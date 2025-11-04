// Type for section descriptions: array of { id: string, description: string }
interface InfoListBlockProps {
    header: string;
    descriptions: Array<{ id: string; description: string }>;
}

function InfoListBlock({ header, descriptions }: InfoListBlockProps) {
    const steps = descriptions.map((desc) => ({
        id: desc.id,
        text: desc.description
    }));

    const isMultiple = steps.length > 1;

    return (
        <div className='info-block-default'>
            <h2>{header}</h2>
            <div className={`step-list ${isMultiple ? 'step-list--grid' : ''}`}>
                {steps.map((step, index) => {
                    const isLastOdd = isMultiple && steps.length % 2 !== 0 && index === steps.length - 1;
                    return (
                        <div
                            key={step.id}
                            className={`BorderedDescription multiline ${isLastOdd ? 'step-item--full' : ''}`}>
                            {step.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default InfoListBlock;
