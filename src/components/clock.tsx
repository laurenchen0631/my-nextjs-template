import {useSelector} from 'react-redux';

import {getCurrentTime, isLight} from 'model/clock/ClockSelector';

const formatTime = (time: number) => {
  return new Date(time).toTimeString().slice(0, 8);
};

const Clock = (): JSX.Element => {
  const lastUpdate = useSelector(getCurrentTime);
  const light = useSelector(isLight);

  return (
    <div className={light ? 'light' : ''} data-testid="time">
      {formatTime(lastUpdate)}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }
        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  );
};

export default Clock;
