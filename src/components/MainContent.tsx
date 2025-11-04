import InfoBlockList from './InfoBlockList';
import GetStartedBlock from './GetStartedBlock';
import text from '../text.json';

function MainContent() {
    return (
        <div className='content'>
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