function Card({ title, subtitles }) {
    return (
        <div className="card border">
            <div className="card2">
                <h2>{title}</h2>
                {subtitles.map((subtitle, index) => (
                    <div key={index}>
                        <h3>{subtitle.title}</h3>
                        <ul>
                            {subtitle.items.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;