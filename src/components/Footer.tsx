import text from '../text.json';

function Footer() {
  return (
    <div className='footer'>
      <a href={`mailto:${text.support_Button}`} className='bottom_group clickable'>
        {text.support_Button}
      </a>
    </div>
  );
}

export default Footer;