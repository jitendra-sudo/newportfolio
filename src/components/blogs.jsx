import React from "react";
import { data } from "./data";

const Blogs = () => {
  return (
<section id="blogs" className="py-10  mx-auto">
  <h2 className="text-3xl font-bold text-center text-gray-800 pb-9">
    Blogs
  </h2>

  <div className="sm:hidden overflow-x-auto scrollbar-hide">
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        {data?.blogs
          .filter((_, i) => i % 2 === 0)
          .map((blog) => (
            <div
              key={blog.id}
              className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden bg-gray-200"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
      <div className="flex gap-3">
        {data?.blogs
          .filter((_, i) => i % 2 !== 0)
          .map((blog) => (
            <div
              key={blog.id}
              className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden bg-gray-200"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  </div>

  <div className="hidden sm:block px-8 xl:max-w-[80%] xl:mx-auto">
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {data?.blogs.map((blog) => {
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
  </div>
</section>




  );
};

export default Blogs;
