import './css/EventPropagation.css';

const EventPropagation = () => {
  const handleParent = () => alert('#parent run...');
  const handleMy = () => alert('#my run...');
  const handleChild = () => alert('#child run...');

  return (
    <div id='parent' onClickCapture={handleParent}>
      親要素
      <div id='my' onClickCapture={handleMy}>
        現在要素
        <a id='child' href='https://google.com' onClickCapture={handleChild}>
          子要素
        </a>
      </div>
    </div>
  );
};

export default EventPropagation;
