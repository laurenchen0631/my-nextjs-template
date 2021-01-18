import useInterval from 'lib/hook';
import {getAllPostIds, getPostData, PostFile} from 'lib/posts';
import {GetStaticPaths} from 'next';
import Head from 'next/head';
import utilStyles from 'styles/utils.module.css';

import {tick} from 'model/clock/ClockAction';
import {AppDispatch, useDispatch} from 'model/helper';
import {wrapper} from 'model/store';

import Clock from 'components/clock';
import DateComponent from 'components/date';
import Layout from 'components/layout';

interface PostProps {
  postData?: PostFile;
}

export default function Post({postData}: PostProps): JSX.Element {
  const dispatch = useDispatch();

  // Tick the time every second
  useInterval(() => {
    dispatch(tick());
  }, 1000);

  return (
    <Layout>
      <Head>
        <title>{postData?.title}</title>
      </Head>
      <Clock />

      <article>
        <h1 className={utilStyles.headingXl}>{postData?.title}</h1>
        <div className={utilStyles.lightText}>
          <DateComponent dateString={postData?.date ?? ''} />
        </div>
        <div dangerouslySetInnerHTML={{__html: postData?.contentHtml ?? ''}} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps(async ({store, params}) => {
  const postData = await getPostData(params?.id as string);
  (store.dispatch as AppDispatch)(tick());

  return {
    props: {
      postData,
    },
  };
});
