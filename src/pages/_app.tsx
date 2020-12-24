import i18n from 'i18next';
import {AppProps} from 'next/app';
import {useRouter} from 'next/dist/client/router';
import Head from 'next/head';
import {useMemo} from 'react';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import 'styles/globals.css';

const resources = {
  en: {
    translation: require('../locales/en.json'),
  },
  zh: {
    translation: require('../locales/zh.json'),
  },
};

i18n.use(initReactI18next).init({resources});

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  const {locale} = useRouter();
  useMemo(() => {
    i18n.changeLanguage(locale ?? 'zh');
  }, [locale]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#000000" />
      </Head>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </>
  );
}

export default MyApp;
