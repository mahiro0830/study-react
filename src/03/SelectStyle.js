import './css/SelectStyle.css';

const SelectStyle = ({ mode }) => {
  return (
    <div className={ `box ${ mode === 'light' ? 'light' : 'dark' }` }>
      <p>こんにちは、世界！</p>
    </div>
  );
}

export default SelectStyle;
