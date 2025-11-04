import text from '../text.json';
import Button from './Button';

function MediaBlock() {
    return (
        <div className='media-block'>
            <img src='/video.png' alt='Media' className='media-background' />
            <div className='media-content'>
                <h2>{text.companyName}</h2>
                <Button text={text.GetStarted_Button} link='https://www.google.com/' />
            </div>
        </div>
    );
}

export default MediaBlock; 