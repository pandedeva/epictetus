"use client";
import React, { useState } from "react";
import Container from "./Container";
import CardPost from "./CardPost";
import mockPosts from "../utils/posts.json";

const CardPosts = () => {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Container>
      {!posts.length ? (
        <div className="text-center">
          <h1 className="text-6xl">No result 😥</h1>
          <p className="mx-auto mt-5 w-6/12 text-xl">
            We couldn`t find any posts with the keyword `yahahahayuk`. Please
            try another keyword.
          </p>
        </div>
      ) : (
        <div className="-mx-4 flex flex-wrap lg:mt-16">
          {posts.map((post) => (
            <div key={post.id} className="w-full px-4 py-6 md:w-4/12">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default CardPosts;
