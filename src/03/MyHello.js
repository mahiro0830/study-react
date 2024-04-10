import PropTypes from 'prop-types';

const MyHello = ( { myName } ) => {
  return (
    <div>こんにちは、{ myName }さん！</div>
  );
}

MyHello.propTypes = {
  myName: PropTypes.string.isRequired,
}

export default MyHello;
