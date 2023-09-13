import React from 'react'

function Article({title, date='January 1, 1970', preview, minutes}) {
    const image = minutes < 30 ? '☕️' : '🍱';
    const timeUnit = minutes < 30 ? 5 : 10;
    const imgList = [];
    for (let i = 0; i < Math.ceil(minutes / timeUnit); i++) {
        imgList.push(<small key={i}>{image}</small>);
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>•</small>
            {imgList}
            <small>{`${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article