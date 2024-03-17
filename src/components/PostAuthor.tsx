import React from "react";

const PostAuthor = ({ authorAvatar, authorName, authorJob }: any) => {
  return (
    <div className="flex items-center">
      <img
        src={authorAvatar}
        className="h-[50px] w-[50px] object-cover"
        alt=""
      />
      <div className="ml-4">
        <h5>{authorName}</h5>
        <p className="text-sm text-white/60">{authorJob}</p>
      </div>
    </div>
  );
};

export default PostAuthor;
