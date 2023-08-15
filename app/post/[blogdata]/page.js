import blogList from '@/data/blogData.json';
import styles from './page.module.css'
import Link from 'next/link';

export default function Post({ params }) {

  let blog = blogList.blog[params.blogdata];

  return (
    <div className={styles.postContainer}>
      <p className={styles.postHeader}>Detail of Blog post</p>
      <div className={styles.linkContainer}>
        <Link href={'/'} className={styles.homeLink}>Home</Link>
        <Link href={'/blog'} className={styles.homeLink}>Blog list</Link>
      </div>
      <div className={styles.blogContainer}>
        <p><span className={styles.blog}>Blog Id : </span> <span className={styles.blogData}>{blog.id}</span></p>
        <p><span className={styles.blog}>Title : </span> <span className={styles.blogData}>{blog.title}</span></p>
        <p className={styles.contentData}>{blog.content}</p>
        <p className={styles.dateData}><span className={styles.dateInfo}>Created at </span> {blog.date}</p>
      </div>
    </div>
  );
}