import dl_icon from '../images/icon_download.svg';

const Download = ({ isbn }) => {
  return (
    <a href={ `https://www.google.com/${ isbn }/` } target="_blank">
      <img src={ dl_icon } alt="Download" />
    </a>
  );
}

export default Download;
