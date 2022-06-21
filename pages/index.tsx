import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import { Auth } from 'aws-amplify';

export default function Home() {
  return (
    <div className={styles.homeMainContent}>Welcome Home, Son</div>
  );
}
