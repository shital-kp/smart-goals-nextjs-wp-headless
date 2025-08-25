import Image from "next/image";
import styles from "./Post.module.scss";
import { formatDate } from "@/app/commonFunctions";

const Post = (props) => {
  const { title, date, featuredImage, slug } = props.postData;

  const altText = featuredImage?.node?.altText ? featuredImage?.node?.altText : 'placeholder-image';
  const placeHolderImageUrl = `/placeholder-image.jpg`;
  const featuredImageUrl = featuredImage?.node?.filePath
    ? `${process.env.NEXT_PUBLIC_WP_BASE_URL}/${featuredImage?.node?.filePath}`
    : placeHolderImageUrl;
  const wpTitle = title?.slice(0, 50);


  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <a href={`${slug}`}>
            <Image
              src={featuredImageUrl}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
      <p className={styles.meta}>
        <span>{formatDate(date)}</span>
      </p>
      <p className={styles.title}>
        <a href={`${slug}`}>{wpTitle}</a>
      </p>
    </div>
  );
};

export default Post;
