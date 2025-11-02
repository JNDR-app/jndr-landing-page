import text from '../text.json';

function Header() {
    return (
        <h2 className='header'>{text.companyName}</h2>
    );
}

export default Header; 