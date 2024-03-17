import React from "react";
import InfoPost from "./InfoPost";
import Link from "next/link";

const CardPost = ({ thumbnail, ...infoPost }: any) => {
  return (
    <>
      <article>
        <Link href="/detail">
          <img src={thumbnail} className="mb-5" />
        </Link>
        <InfoPost {...infoPost} />
      </article>
    </>
  );
};

export default CardPost;
