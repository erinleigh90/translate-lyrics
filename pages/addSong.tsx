import { useContext, useState } from "react";
import { UserContext } from "../utilities/userContextMethods";
import styles from '../styles/Home.module.css';

export default function AddSong() {
  const user = useContext(UserContext);
  const authenticated = (user != null);

  return (
    <div>
      {(authenticated) ?
        <div className={styles.card}>
          <h2>New Song</h2>
        </div>
        :
        <div>Oops! Please log in to add a song!</div>}
    </div>
  );
}