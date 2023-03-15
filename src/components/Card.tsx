import React, { useState } from 'react';
import {
  progressBarClass,
  sectionClass,
  cardDesc,
  unstyledList,
  currentUsageClass,
  progressText,
  progressBlockClass,
  progressClass,
  wrapperClass,
  buttonClass,
  mainTitle,
} from '../styles/card.css';
import Feature from './Feature';
const Card: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const maxCount = 10;

  const progress: (n: number) => number = (val: number) => (val / maxCount) * 100;

  const isDisabled: (val: number) => boolean = (val: number) => val === maxCount;

  const handleButtonClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <article className={wrapperClass}>
      <header className={sectionClass}>
        <figure>
          <svg
            width='86'
            height='87'
            viewBox='0 0 86 87'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect x='0.5' y='1' width='85' height='85' fill='white' stroke='#D8D9D9' />
            <path
              d='M56.6218 51.9911L52.46 44.8039C53.3116 43.2398 53.7553 41.4863 53.75 39.7054C53.75 36.8543 52.6174 34.12 50.6014 32.104C48.5854 30.088 45.8511 28.9554 43 28.9554C40.1489 28.9554 37.4146 30.088 35.3986 32.104C33.3826 34.12 32.25 36.8543 32.25 39.7054C32.2447 41.4863 32.6884 43.2398 33.54 44.8039L29.3782 51.9911C29.2432 52.225 29.1722 52.4904 29.1725 52.7605C29.1727 53.0306 29.2442 53.2958 29.3797 53.5294C29.5152 53.7631 29.71 53.9569 29.9443 54.0912C30.1786 54.2256 30.4442 54.2957 30.7143 54.2947H35.1218L37.3639 58.0725C37.4395 58.1977 37.5326 58.3115 37.6404 58.4104C37.925 58.6848 38.3046 58.8388 38.7 58.8404H38.915C39.1468 58.8086 39.3684 58.7244 39.5627 58.5939C39.757 58.4635 39.9189 58.2904 40.0361 58.0879L43 52.9893L45.9639 58.1339C46.0828 58.3336 46.2455 58.5037 46.4397 58.6314C46.6339 58.7591 46.8545 58.8411 47.085 58.8711H47.3C47.7007 58.8735 48.0865 58.7192 48.375 58.4411C48.4783 58.3478 48.5664 58.239 48.6361 58.1186L50.8782 54.3407H55.2857C55.5563 54.3418 55.8224 54.2714 56.057 54.1365C56.2917 54.0017 56.4865 53.8072 56.6218 53.5729C56.7653 53.334 56.8411 53.0606 56.8411 52.782C56.8411 52.5033 56.7653 52.2299 56.6218 51.9911V51.9911ZM38.6846 54.3407L37.3179 52.0525C37.1833 51.8255 36.9925 51.637 36.7638 51.5052C36.5352 51.3734 36.2764 51.3027 36.0125 51.3H33.3557L35.5518 47.4914C37.064 48.9486 38.97 49.931 41.0343 50.3172L38.6846 54.3407ZM43 47.3839C41.4813 47.3839 39.9967 46.9336 38.734 46.0899C37.4713 45.2461 36.4871 44.0469 35.9059 42.6438C35.3248 41.2408 35.1727 39.6969 35.469 38.2074C35.7652 36.7179 36.4966 35.3497 37.5704 34.2758C38.6443 33.2019 40.0125 32.4706 41.502 32.1743C42.9915 31.8781 44.5354 32.0301 45.9385 32.6113C47.3415 33.1925 48.5408 34.1766 49.3845 35.4394C50.2282 36.7021 50.6786 38.1867 50.6786 39.7054C50.6786 41.7419 49.8696 43.6949 48.4296 45.1349C46.9896 46.575 45.0365 47.3839 43 47.3839V47.3839ZM49.9875 51.3C49.7236 51.3027 49.4648 51.3734 49.2362 51.5052C49.0075 51.637 48.8167 51.8255 48.6821 52.0525L47.3154 54.3407L44.9811 50.2711C47.0381 49.877 48.937 48.8956 50.4482 47.4454L52.6443 51.2539L49.9875 51.3Z'
              fill='#E26559'
            />
          </svg>
        </figure>
        <h5 className={mainTitle}>Upgrade to Riddey PRO and boost productivity!</h5>
        <summary className={cardDesc}>
          Pellentesque porttitor euismod ante, accumsan consequat purus!
        </summary>
      </header>
      <section className={sectionClass}>
        <ul className={unstyledList}>
          {[1, 2, 3].map((item, index: number) => (
            <Feature index={index + 1} key={item} />
          ))}
        </ul>
      </section>
      <footer className={sectionClass}>
        <section className={progressBlockClass}>
          <h3 className={currentUsageClass}>Current Usage</h3>

          <span className={progressText}>
            {count} out of {maxCount} boards in use
          </span>

          <div className={progressBarClass}>
            <div
              className={progressClass}
              style={{
                width: `${progress(count)}%`,
              }}
            />
          </div>
        </section>
        <button
          type='button'
          aria-label='button'
          role='button'
          onClick={handleButtonClick}
          disabled={isDisabled(count)}
          className={buttonClass}
        >
          Add New Board
        </button>
      </footer>
    </article>
  );
};

export default Card;
