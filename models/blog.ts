import mongoose, { Schema } from "mongoose";
var slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

export type BlogDocument = mongoose.Document & {
  imageBlog: string;
  category: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
};

const BlogSchema = new Schema<BlogDocument>(
  {
    imageBlog: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog =
  mongoose.models.Blog || mongoose.model<BlogDocument>("Blog", BlogSchema);

export default Blog;
