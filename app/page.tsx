import Categories from "./Components/Categories/Categories";
import FeaturedPosts from "./Components/FeaturedPosts/FeaturedPosts";
import Post from "./Components/Post/Post";
import PostsWithSorter from "./Components/PostsWithSorter/PostsWithSorter";
import { getCategories, GetLatestPosts, getPosts } from "./lib/queries";
import styles from "./page.module.css";

export default async function Home() {

  let categories: any[];
  try {
    categories = await getCategories();
  } catch (error) {
    console.error('Error fetching categories: ', error);
    categories = [];
  }

  let posts;
  try {
    posts = await getPosts();
  } catch (error) {
    console.error('Error fetching posts: ', error);
    posts = [];
  }

  let latestPosts;
  try {
    latestPosts = await GetLatestPosts(3);
  } catch (error) {
    console.error('Error fetching latest posts: ', error);
    latestPosts = [];
  }

  return (
    <div className={styles.page}>
      <h2>Latest Posts</h2>
      <div>
        {latestPosts.length === 0 ? (
          <p>No data found</p>
        ) : (
          <FeaturedPosts latestPosts={latestPosts} />
        )}
      </div>

      <h2 className={styles.pageTitle}>Posts</h2>

      <PostsWithSorter 
        categories={categories}
        posts={posts}
      />
    </div>
  );
}
