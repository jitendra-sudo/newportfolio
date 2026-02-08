import React from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "./blogsData";

/* -----------------------------------
   Image Component with Skeleton Loader
------------------------------------ */
const ImageWithSkeleton = ({ src, alt, className }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      />
    </div>
  );
};

/* -----------------------------------
   Blogs Page
------------------------------------ */
const Blogs = () => {
  const navigate = useNavigate();

  return (
    <section id="blogs" className="py-10 mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 pb-9">
        Blogs
      </h2>

      {/* ---------- MOBILE (HORIZONTAL SCROLL) ---------- */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blogs/${blog.id}`)}
              className="relative flex-shrink-0 w-56 h-56 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image with Skeleton */}
              <ImageWithSkeleton
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-3">
                <h3 className="text-white text-sm font-semibold line-clamp-2">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- DESKTOP (MASONRY GRID) ---------- */}
      <div className="hidden sm:block px-6 xl:max-w-[80%] xl:mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {blogs.map((blog) => {
            const randomHeight =
              Math.floor(Math.random() * 120) + 200;

            return (
              <div
                key={blog.id}
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="relative rounded-xl break-inside-avoid overflow-hidden cursor-pointer shadow hover:shadow-lg transition"
                style={{ height: randomHeight }}
              >
                <ImageWithSkeleton
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />

             
                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-4">
                  <h3 className="text-white font-semibold text-base line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    {blog.readingTime} • {blog.level}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Blogs);
