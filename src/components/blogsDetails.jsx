import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./blogsData";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find((item) => item.id === Number(id));

    const toc = useMemo(() => {
        return blog?.sections?.map((s) => ({
            id: s.id,
            title: s.title,
        }));
    }, [blog]);

    if (!blog) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <h2 className="text-xl font-semibold text-gray-700">
                    Blog not found
                </h2>
            </div>
        );
    }

    return (
        <article className="bg-gray-50">

            <div className="relative h-[260px] md:h-[340px] lg:h-[420px] overflow-hidden">
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>


            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-12 lg:grid-cols-[1fr_280px]">

                <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                        {blog.title}
                    </h1>

                    <div className="flex justify-between">
                        <p className="mt-2 text-sm text-gray-600">
                            <span className="font-semibold text-gray-900">
                                {blog.author.name}
                            </span>{" "}
                            — {blog.author.role}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                            <span>{blog.category}</span>•
                            <span>{blog.readingTime}</span>•
                            <span>{blog.level}</span>
                        </div>


                    </div>


                    {/* Summary */}
                    <p className="mt-6 text-lg leading-relaxed text-gray-900">
                        {blog.summary}
                    </p>

                    <hr className="my-8" />

                    {/* ===== Sections ===== */}
                    <div className="space-y-14">
                        {blog.sections?.map((section) => (
                            <section key={section.id} id={section.id}>
                                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                    {section.title}
                                </h2>

                                {section.type === "text" && (
                                    <p className="whitespace-pre-line text-base leading-8 text-gray-700">
                                        {section.content}
                                    </p>
                                )}

                                {section.type === "list" && (
                                    <ul className="list-disc space-y-3 pl-5 text-base text-gray-700">
                                        {section.content.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.type === "code" && (
                                    <div className="rounded-xl overflow-hidden border">
                                        <SyntaxHighlighter
                                            language={section.language || "javascript"}
                                            style={oneDark}
                                            customStyle={{
                                                margin: 0,
                                                fontSize: "14px",
                                                padding: "20px",
                                            }}
                                        >
                                            {section.content}
                                        </SyntaxHighlighter>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-wrap gap-3">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ===== TOC ===== */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">
                        <p className="mb-4 text-sm font-semibold text-gray-900">
                            Table of Contents
                        </p>

                        <ul className="space-y-2 text-sm">
                            {toc.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="block text-gray-600 hover:text-gray-900 transition"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </article>
    );
};

export default BlogDetails;
