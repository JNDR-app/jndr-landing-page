import React from 'react';

interface ButtonProps {
    text: string;
    link: string;
}

function Button({ text, link }: ButtonProps) {
    return (
        <a href={link} className='button'>
            {text}
        </a>
    );
}

export default Button;
