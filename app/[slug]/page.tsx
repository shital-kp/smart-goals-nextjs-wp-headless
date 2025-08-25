import { notFound } from "next/navigation";
import { GetPostBySlug } from "../lib/queries";
import { formatDate } from "../commonFunctions";
import styles from "./page.module.scss";
import Image from "next/image";


const page = async ({params, searchParams}) => {
  const resolvedParams = await params;

  let post;
  try {
    post = await GetPostBySlug(resolvedParams.slug);
  } catch (error) {
    console.error('Error fetching post: ', error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.postPage}>
      <h1>{post?.title}</h1>
      <div className={styles.meta}>
        <p>{formatDate(post?.date)}</p>
        <p>
          by <span>{post?.author?.node?.name}</span>
        </p>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
    </div>
  )
}

export default page