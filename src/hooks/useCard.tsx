import { useState } from 'react';

const useCard = (): [
  number,
  number,
  (val: number) => boolean,
  () => React.Dispatch<React.SetStateAction<number>>,
] => {
  const [count, setCount] = useState<number>(0);
  const maxCount = 10;

  const progress = (val: number) => (val / maxCount) * 100;

  const isDisabled: (val: number) => boolean = (val: number) => val === maxCount;

  const handleButtonClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  return [count, maxCount, progress, isDisabled, handleButtonClick];
};
export default useCard;
