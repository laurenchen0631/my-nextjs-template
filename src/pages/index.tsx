import {getSortedPostsData, PostFile} from 'lib/posts';
import {GetStaticProps} from 'next';
import getConfig from 'next/config';
import Head from 'next/head';
import Link from 'next/link';
import {Trans} from 'react-i18next';
import utilStyles from 'styles/utils.module.css';

import Counter from 'components/counter';
import Date from 'components/date';
import Layout, {siteTitle} from 'components/layout';

interface HomeProps {
  allPostsData: PostFile[];
}

const {serverRuntimeConfig} = getConfig();

console.log(serverRuntimeConfig);

export default function Home({allPostsData}: HomeProps): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {process.env.NEXT_PUBLIC_ANALYTICS_ID}

      <Link href="/" locale="zh">
        <a className="m-2">繁體中文</a>
      </Link>

      <Link href="/" locale="en">
        <a className="m-2">English</a>
      </Link>

      <h1>
        <Trans i18nKey="welcomeMessage" />
      </h1>

      <Counter />

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
