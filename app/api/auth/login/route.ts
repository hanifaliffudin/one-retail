import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectMongoDB();

    const body = await request.json();

    const user = await User.findOne({ username: body.username });

    if (!user)
      return NextResponse.json({ status: 404, message: "User not found" });

    //untuk cek password bener atau gak
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) {
      return NextResponse.json({ status: 400, message: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id }, "secret");

    return NextResponse.json({ status: 200, message: "success", token });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({
      error: e.toString(),
      status: 500,
    });
  }
}
