'use client'
import { Category } from "@/app/lib/types"
import styles from "./Categories.module.scss"

const Categories = (props: {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect?: (category: string) => void;
}) => {
  const { categories, onCategorySelect } = props;

  const handleClick = (category: string) => {
    console.log("clicked: ", category);
    props.onCategorySelect?.(category);
  };

  return (
    <div className={styles.categoriesList}>
      <p
        onClick={() => handleClick("All")}
        className={`${styles.category} ${
          props.selectedCategory === "All" ? styles.active : ""
        }`}
      >
        All
      </p>
      {categories?.length
        ? categories.map((category) => (
            <p
              className={`${styles.category} ${
                props.selectedCategory === category.name ? styles.active : ""
              }`}
              key={category.id}
              onClick={() => handleClick(category.name)}
            >
              {category.name}
            </p>
          ))
        : null}
    </div>
  );
};

export default Categories