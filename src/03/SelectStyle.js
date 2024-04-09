import './css/SelectStyle.css';
import cn from 'classnames';

const SelectStyle = ({ mode }) => {
  return (
    <div className={ cn( 'box', mode === 'light' ? 'light' : 'dark' ) }>
      <p>こんにちは、世界！</p>
    </div>
  );
}

export default SelectStyle;
