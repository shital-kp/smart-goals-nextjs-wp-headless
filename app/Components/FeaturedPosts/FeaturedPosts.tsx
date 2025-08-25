'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import styles from './FeaturedPosts.module.scss';
// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';

const FeaturedPosts = (props) => {  
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props?.latestPosts?.map((post, index) => {
          const altText = post?.featuredImage ? post?.featuredImage?.node?.altText : 'placeholder-image';
          const placeHolderImageUrl = `/placeholder-image.jpg`;
          const featuredImageUrl = post?.featuredImage
            ? `${post?.featuredImage?.node?.sourceUrl}`
            : placeHolderImageUrl;
          const postTitle = post?.title ? post?.title?.slice(0, 100) : '';

          return (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={featuredImageUrl}
                    alt={altText}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.title}>
                  <Link href={`/${post?.slug}`}>
                    <p>{postTitle}</p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default FeaturedPosts;