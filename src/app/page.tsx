import CardPosts from "@/components/CardPosts";
import FeaturedPost from "@/components/FeaturedPost";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <FeaturedPost />
      <CardPosts />
    </Layout>
  );
}
