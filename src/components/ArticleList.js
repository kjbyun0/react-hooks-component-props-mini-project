import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const arrArticle = posts.map(postObj => 
        <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} minutes={postObj.minutes} />);

    return (
        <main>
            {arrArticle}
        </main>
    );
}

export default ArticleList