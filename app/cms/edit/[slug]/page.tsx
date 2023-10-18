"use client";

import React, { use, useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import SideBar from "../../components/SideBar";
import NavBarCMS from "../../components/NavBar";

const EditPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();

  const [file, setFile] = useState("");
  const [imageBlog, setImageBlog] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e: any) {
    setImageBlog(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }

  // remove indexed value
  const handleRemove = (index: number) => {
    let tagsTemp: any = [
      ...tags.slice(0, index),
      ...tags.slice(index + 1, tags.length),
    ];
    setTags(tagsTemp);
  };

  const addTag = async () => {
    if (tag) {
      if (tags.indexOf(tag) !== -1) {
        alert(tag + " sudah ada");
      } else {
        tags.push(tag);
        setTags(tags);
        setTag("");
      }
    } else {
      alert("You didn't type anything.");
    }
  };

  let modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "video",
    "formula",
  ];

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs/" + params.slug)
      .then((res) => res.json())
      .then((data) => {
        setImageBlog(data.blog.imageBlog);
        setCategory(data.blog.category);
        setTitle(data.blog.title);
        setContent(data.blog.content);
        setTags(data.blog.tags);
        setIsLoading(false);
      });
  }, []);

  const editBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!category) {
      alert("Please select a category");
      return;
    } else if (!content) {
      alert("Please fill the content");
      return;
    }
    try {
      setIsLoading(true);

      const data = new FormData();
      if (file) {
        data.set("file", file);
      }
      data.set("category", category);
      data.set("title", title);
      data.set("content", content);
      data.set("tags", JSON.stringify(tags));

      const response = await fetch(
        "http://localhost:3000/api/blogs/" + params.slug,
        {
          method: "PUT",
          body: data,
        }
      );

      setIsLoading(false);

      if (!response.ok) {
        alert(response.statusText);
      }

      const dataResponse = await response.json();

      if (dataResponse.status == 200) {
        alert("Blog has been updated");
        router.push("/cms/dashboard");
      } else {
        alert(dataResponse.error);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <SideBar />
      <div className="sm:ml-64">
        <NavBarCMS />
        <section className="bg-white">
          <div className="px-4 mx-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-x-2 text-red-400 mb-4 font-medium"
            >
              <Icon icon="ep:back" />
              Back
            </button>
            <h2 className="mb-4 text-xl font-bold text-gray-900 ">Edit blog</h2>
            <form onSubmit={editBlog} encType="multipart/form-data">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Image
                  </label>
                  {file !== "" ? (
                    <img
                      className="max-h-[510px] object-cover w-full mb-3 rounded-md"
                      src={imageBlog}
                      alt=""
                    />
                  ) : (
                    <div>
                      <img
                        className="max-h-[510px] object-cover w-full mb-3 rounded-md"
                        src={`http://localhost:3000/blog/${imageBlog}`}
                        alt=""
                      />
                    </div>
                  )}

                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  >
                    <option disabled>Select category</option>
                    <option selected={category == "OMS"} value="OMS">
                      Order Management System
                    </option>
                    <option selected={category == "CRM"} value="CRM">
                      Customer Relationship Management
                    </option>
                    <option selected={category == "OA"} value="OA">
                      Office Automation
                    </option>
                    <option selected={category == "SM"} value="SM">
                      Supplier Management
                    </option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Title
                  </label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Content
                  </label>
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={content}
                    onChange={setContent}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="tag"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Tags
                  </label>
                  <div className="flex">
                    <input
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      type="text"
                      id="tag"
                      className="bg-gray-50 mr-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                      Add
                    </button>
                  </div>
                  <div className=" flex flex-wrap mt-4">
                    {tags?.map((tag, i) => {
                      return (
                        <div key={i}>
                          <div className="inline-flex justify-between items-center text-gray-900 bg-white border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm py-2.5 mr-3 my-1.5">
                            <div className="ml-4 mr-2">{tag}</div>
                            <button
                              onClick={() => handleRemove(i)}
                              type="button"
                              className="items-center flex text-red-600 mr-3"
                            >
                              <Icon icon="material-symbols:close" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {isLoading ? "Loading..." : "Update Blog"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditPage;
