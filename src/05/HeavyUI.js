const sleep = (delay) => {
  let start = new Date().now;
  while (new Date().now - start < delay);
};

const HeavyUI = ({ delay }) => {
  sleep(delay);
  return <p>遅延時間は{ delay }ミリ秒</p>
};

export default HeavyUI;
