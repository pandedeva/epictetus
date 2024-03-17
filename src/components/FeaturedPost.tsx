import React from "react";
import Container from "./Container";
import InfoPost from "./InfoPost";
import Link from "next/link";

const FeaturedPost = () => {
  return (
    <>
      <article className="pt-14">
        <Container>
          <div className="-mx-4 flex flex-wrap items-start lg:items-center">
            <div className="mb-2 w-full px-4 md:mb-0 md:w-7/12 lg:w-8/12">
              <Link href="/detail">
                <img
                  src="./featured-img.png"
                  className="w-full rounded-lg"
                  alt=""
                />
              </Link>
            </div>
            <div className="w-full px-4 md:w-5/12 lg:w-4/12">
              <InfoPost
                category="UI DESIGN"
                date="July 2, 2021"
                title="Understanding color theory: the color wheel and finding complementary colors"
                shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                authorAvatar="./author1.png"
                authorName="Leslie Alexander"
                authorJob="UI Designer"
              />
            </div>
          </div>
          <hr className="mt-10 border-white/15 md:hidden" />
        </Container>
      </article>
    </>
  );
};

export default FeaturedPost;
