import text from '../text.json';
import Button from './Button';

function GetStartedBlock() {
    return (
        <div className='get_started_block'>
            <Button text={text.GetStarted_Button} link='https://www.google.com/' />
            <p>{text.NoDownloadRequired}</p>
            <div className='scanQR'>
                <img className='qr' src='/qr.png' alt='QR code' />
                <p>{text.ScanQR}</p>
            </div>
        </div>
    );
}

export default GetStartedBlock; 