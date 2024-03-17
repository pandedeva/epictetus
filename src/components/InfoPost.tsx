import React from "react";
import PostTitle from "./PostTitle";
import PostAuthor from "./PostAuthor";

const InfoPost = ({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}: any) => {
  return (
    <>
      <PostTitle category={category} title={title} date={date} />
      <p className="mb-5 w-10/12 leading-loose text-white/60">
        {shortDescription}
      </p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
};

export default InfoPost;
