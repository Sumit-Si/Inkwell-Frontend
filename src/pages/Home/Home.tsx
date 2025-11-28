import AllPosts from "@/components/Home/AllPosts";
import Hero from "@/components/Home/Hero";
import RecentBlogs from "@/components/Home/RecentBlogs";
import Page from "@/components/Page";

const Home = () => {
  return (
    <Page>
      <Hero />

      <RecentBlogs />

      <AllPosts />
    </Page>
  );
};

export default Home;
