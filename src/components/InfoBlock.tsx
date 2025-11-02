import React, { ReactNode } from 'react';

interface InfoBlockProps {
    header: string;
    description: string;
    content: ReactNode; // now can be a component/object render
}

function InfoBlock({ header, description, content }: InfoBlockProps) {
    return (
        <div className='info-block'>
            <h2 className='info-block__header'>{header}</h2>
            <div className='info-block__content'>{content}</div>
        </div>
    );
}

export default InfoBlock;
