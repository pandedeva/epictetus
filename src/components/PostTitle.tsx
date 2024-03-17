import React from "react";
import Link from "next/link";

const PostTitle = ({ category, date, title, center }: any) => {
  return (
    <>
      <div className="flex items-center space-x-2 text-sm text-white/60">
        <div>{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h1
        className={`my-3 text-2xl leading-relaxed ${center ? "text-center" : ""}`}
      >
        <Link href="/detail">{title}</Link>
      </h1>
    </>
  );
};

export default PostTitle;
