import {FC} from 'react';

import {wrapper} from 'model/store';

import Clock from 'components/clock';
import Counter from 'components/counter';

// import Page from '../components/Page';
// import {addCount} from '../store/count/action';
// import {wrapper} from '../store/store';
// import {serverRenderClock, startClock} from '../store/tick/action';

const SSR: FC = () => {
  // useEffect(() => {
  //   const timer = props.startClock();

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [props]);

  return (
    <>
      <h1>Server-side Rendering</h1>
      <Counter />
      <Clock />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  // store.dispatch(serverRenderClock(true));
  // store.dispatch(addCount());
});

export default SSR;
