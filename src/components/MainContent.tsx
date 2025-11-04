import InfoBlockList from './InfoListBlock';
import GetStartedBlock from './GetStartedBlock';
import text from '../text.json';
import MediaBlock from './MediaBlock';

function MainContent() {
    return (
        <div className='content'>
            <MediaBlock />
            {text.sections.map((section) => (
                <InfoBlockList 
                    key={section.id} 
                    header={section.header} 
                    descriptions={section.descriptions} 
                />
            ))}
            <GetStartedBlock />
        </div>
    );
}

export default MainContent; 