'use client';
import styles from './PostsWithSorter.module.scss'
import Categories from '../Categories/Categories';
import Post from '../Post/Post';
import { useState } from 'react';

const PostsWithSorter = (props) => {
  const { posts, categories } = props;

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) =>
          post.categories?.nodes?.some(
            (cat) => cat.name.toLowerCase() === selectedCategory.toLowerCase()
          )
        );

  console.log('filteredPosts: ', filteredPosts)

  return (
    <div>
      <p className={styles.categoryTitle}><b>Categories</b></p>
      <div className={styles.categoriesListing}>
        <Categories 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onCategorySelect={setSelectedCategory} 
        />
      </div>

      <div className={styles.postsList}>
        {filteredPosts?.length ? (
          filteredPosts.map((post) => <Post key={post.id} postData={post} />)
        ) : (
          'No posts found'
        )}
      </div>
    </div>
  )
}

export default PostsWithSorter      