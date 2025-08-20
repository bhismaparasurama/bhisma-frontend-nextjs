"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://laravel-api-backend-production.up.railway.app/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex flex-col gap-10 mt-20 px-30 max-[1000px]:px-4">
      <div className="flex items-center justify-between">
        <h1 className="font-Montserrat text-xl font-medium text-center">
          My Blog
        </h1>
        <a href="/" className="bg-orange-500 py-3 px-6 text-white rounded-full">
          Back
        </a>
      </div>
      <div className="grid grid-cols-4 gap-6 max-[1300px]:grid-cols-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-100 p-8 rounded-xl flex flex-col gap-4 max-[500px]:p-4"
          >
            <Image
              src={blog.image || "fallback.jpg"}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h2 className="font-Montserrat font-medium text-xl">{blog.title}</h2>
            <a
              href={`/blog/${blog.id}`}
              className="flex items-center gap-2 bg-orange-500 rounded-full py-2 px-4 w-fit text-white mt-auto"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
