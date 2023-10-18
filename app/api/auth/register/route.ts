import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
const bcrypt = require("bcrypt");

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectMongoDB();

    const body = await request.json();

    const checkUser = await User.find({ username: body.username });

    if (checkUser.length > 0)
      return NextResponse.json({
        status: 422,
        message: "Username already registered",
      });

    //hash password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    //create new user
    const newUser = await new User({
      username: body.username,
      password: hashedPassword,
    });

    //save user and return respond
    const user = await newUser.save();

    const { password, ...data } = await user.toJSON();

    return NextResponse.json({ status: 200, data: data, message: "success" });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({
      error: e.toString(),
      status: 500,
    });
  }
}
