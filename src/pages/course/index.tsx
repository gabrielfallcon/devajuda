import { NextPage } from "next";
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Video } from '../../components/Video';

import styles from '../../styles/course.module.scss';


const Course: NextPage = () => {

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div style={{ flex: 1 }}> <p>Criar tela</p> </div>
        <Sidebar />
      </main>
    </div>
  )
};

export default Course;