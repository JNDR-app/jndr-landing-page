import React from 'react';

interface InfoBlockDefaultProps {
  header: string;
  description: string;
}

function InfoBlockDefault({ header, description }: InfoBlockDefaultProps) {
  const normalized = description.replace(/\r\n?|\n\r?/g, '\n');
  return (
    <div className='info-block-default'>
      <h2>{header}</h2>
      <div className='BorderedDescription multiline'>{normalized}</div>
    </div>
  );
}

export default InfoBlockDefault;