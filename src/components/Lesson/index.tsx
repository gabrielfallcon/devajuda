import styles from './styles.module.scss';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  return (
    <Link href={`${props.slug}`}>
      <a className={styles.contentFullLesson}>
        <span className={styles.dateLesson}>
          {availableDateFormatted}
        </span>

        <div className={styles.contentLesson}>
          <header className={styles.headerLesson}>
            {isLessonAvailable ? (
              <span className={styles.statusLessionActive}>
                <CheckCircle size={20}/>
                Aula Liberada
              </span>
            ) : (
              <span className={styles.statusLessionBlock}>
                <Lock size={20}/>
                Em breve
              </span>
            )}
          </header>


          <strong className={styles.infoLesson}>
            {props.title}
          </strong>
        </div>
      </a>
    </Link>
  )
}