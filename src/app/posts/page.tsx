import CardPosts from "@/components/CardPosts";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default function Posts() {
  return (
    <Layout>
      <SectionHeader>UI Design</SectionHeader>
      <CardPosts />
    </Layout>
  );
}
