interface InfoBlockProps {
    header: string;
    description: string;
    content: string;
}

function InfoBlock({ header, description, content }: InfoBlockProps) {
    return (
        <div>
            <h2>{header}</h2>
            <p>{description}</p>
            <p>{content}</p>
        </div>
    );
}

export default InfoBlock;