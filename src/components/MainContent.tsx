// import InfoBlock from './InfoBlock';
import GetStartedBlock from './GetStartedBlock';
import InfoBlockDefault from './InfoBlockDefault';
import text from '../text.json';

function MainContent() {
    return (
        <div className='content'>
            <InfoBlockDefault header={text.WhatIsJndr_Header} description={text.WhatIsJndr_Description} />
            <InfoBlockDefault header={text.WhyJndr_Header} description={text.WhyJndr_Description} />
            <InfoBlockDefault header={text.ReferralProgram_Header} description={text.ReferralProgram_Description} />
            <GetStartedBlock />
            {/* <InfoBlock header={text.infoBlock1.title} description={text.infoBlock1.subTitle} content={text.infoBlock1.content} /> */}
        </div>
    );
}

export default MainContent; 