import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';
import styles from './styles.module.scss';
import { PLayerProps } from '../PlayerVideo';

import dynamic from 'next/dynamic';
import { gql, useQuery } from '@apollo/client';

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

interface GET_LESSON_BY_SLUG_QUERY_DTO {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    }
  }
}

interface VideoProps {
  slug: string;
}

const PlayerDynamic = dynamic<PLayerProps>(() => import('../PlayerVideo').then((mod) => mod.PlayerVideo), {
  ssr: false,
})

export function Video({ slug }: VideoProps) {

  const { data } = useQuery<GET_LESSON_BY_SLUG_QUERY_DTO>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: slug
    }
  });

  const videoURLString = data?.lesson?.videoId as string

  return (
    <div className={styles.containerVideo}>
      <div className={styles.contentVideo}>
        <div className={styles.video}>
          <PlayerDynamic idVideo={videoURLString}/>
        </div>
      </div>

      <div className={styles.contentDescription}> 
        <div className={styles.contentBoxText}>
          <div className={styles.contentText}>
            <h1 className={styles.titleDescription}>{data?.lesson?.title}</h1>
            <p className={styles.infoDescription}>
              {data?.lesson?.description}
            </p>

            <div className={styles.contentProfile}> 
              <img 
                className={styles.contentImage}
                src={data?.lesson?.teacher.avatarURL} 
                alt="Profile"
              />

              <div className={styles.boxTeacher}>
                <strong className={styles.nameTeacher}>{data?.lesson?.teacher.name} </strong>
                <span className={styles.jobTeacher}>{data?.lesson?.teacher.bio} </span>
              </div>
            </div>
          </div>

          <div className={styles.contentButton}>
            <a href="" className={styles.FirstBtn}>
              <DiscordLogo size={24}/>
              Comunidade do discord
            </a>
            <a href="" className={styles.SecondtBtn}>
              <Lightning size={24}/>
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className={styles.contentExtras}> 
          <a
            className={styles.contentBoxExtras}
            href="#"
          >
            <div className={styles.contentBoxExtrasIcon}>
              <FileArrowDown size={40} />
            </div>

            <div className={styles.contentBoxExtrasText}>
              <div className={styles.contentBoxExtrasInfo}> 
                <span className={styles.contentExtrasTitle}>
                  Material complementar
                </span>

                <p className={styles.contentExtrasDescription}>
                  Acesse o material complementar para acelerar o seu desenvolvimento
                </p>
              </div>
              
              <CaretRight size={24} className={styles.arrowIcon}/>
            </div>
          </a>

          <a
            className={styles.contentBoxExtras}
            href="#"
          >
            <div className={styles.contentBoxExtrasIcon}>
              <FileArrowDown size={40} />
            </div>

            <div className={styles.contentBoxExtrasText}>
              <div className={styles.contentBoxExtrasInfo}> 
                <span className={styles.contentExtrasTitle}>
                  Wallpapers exclusivos
                </span>

                <p className={styles.contentExtrasDescription}>
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                </p>
              </div>
              
              <CaretRight size={24} className={styles.arrowIcon}/>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}