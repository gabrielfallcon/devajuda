import { NextPage } from "next";
import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

import styles from '../styles/course.module.scss';


const Course: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Video />
        <Sidebar />
      </main>
    </div>
  )
};

export default Course;