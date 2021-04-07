import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>4 de abril de 2021</time>
            <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
            <p>Trabalhar com mapas em aplicações móveis é bem divertido e existem vários casos de uso interessantes para aplicar. Você provavelmente conhece e já usou alguns dos cases de sucesso como Uber, Airbnb entre outras empresas que usam mapas em seus negócios.</p>
          </a>

          <a href="#">
            <time>4 de abril de 2021</time>
            <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
            <p>Trabalhar com mapas em aplicações móveis é bem divertido e existem vários casos de uso interessantes para aplicar. Você provavelmente conhece e já usou alguns dos cases de sucesso como Uber, Airbnb entre outras empresas que usam mapas em seus negócios.</p>
          </a>

          <a href="#">
            <time>4 de abril de 2021</time>
            <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
            <p>Trabalhar com mapas em aplicações móveis é bem divertido e existem vários casos de uso interessantes para aplicar. Você provavelmente conhece e já usou alguns dos cases de sucesso como Uber, Airbnb entre outras empresas que usam mapas em seus negócios.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  });

  console.log(response);

  return {
    props: {}
  };
}