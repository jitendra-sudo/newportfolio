import React from "react";
import { data } from "./data";

const Blogs = () => {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 pb-9">
        Blogs
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        { data?.blogs.map((blog) => {
          const randomHeight = Math.floor(Math.random() * 110) + 120; 
          return (
            <div
              key={blog.id}
              className="bg-gray-300 rounded-lg break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              style={{ height: randomHeight }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
