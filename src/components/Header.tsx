import text from '../text.json';

function Header() {
    return (
        <h2 className='header'>
            <img src='/logo.svg' alt='Jndr Logo' className='header-logo' />
            {text.companyName}
        </h2>
    );
}

export default Header; 