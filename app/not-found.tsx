import Link from "next/link";
import styles from "./not-found.module.scss";

export default function page() {
  return (
    <div className={styles.notFound}>
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}