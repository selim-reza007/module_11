import blogList from '@/data/blogData.json';
import Link from 'next/link';
import styles from './page.module.css'

export default function Blog() {

  let blogslist = blogList.blog;
  return (
    <div className={styles.blogContainer}>
      <p className={styles.blogHeader}>Blog page</p>
      <Link href={'/'} className={styles.homeLink}>Home</Link>
      <div className={styles.blogListHeader}>List of available blog
        {
          blogslist.map((bl, index) => {
            return (
              <Link className={styles.blogListLink} href={'/post/' + index} key={index}>
                <p>{bl.id} - {bl.title}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

