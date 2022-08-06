import { NextPage } from "next";
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Video } from '../../components/Video';
import { useRouter } from 'next/router';

import styles from '../../styles/course.module.scss';


const Course: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  console.log(id)

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Video slug={id as string}/> 
        <Sidebar />
      </main>
    </div>
  )
};

export default Course;