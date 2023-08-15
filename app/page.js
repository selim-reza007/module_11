import Link from "next/link";
import styles from './page.module.css'

export default function Home() {

    return (
      <div className={styles.homeContainer}>
        <p className={styles.headingText}>Welcome to Blog</p>
        <p><Link className={styles.linkArea} href={'/blog'}>Blog page</Link></p>        
      </div>
    );
  }