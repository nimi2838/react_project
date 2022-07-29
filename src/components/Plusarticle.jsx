import React, { useState } from 'react';

function Plusarticle () {
    const [ text, setText ] = useState(``);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText(``);
    };
    
    const [articles, setArticles] = useState([
        {
            subject : "글 1번",
            content : "내용 1번",
        },
        {
            subject : "글 2번",
            content : "내용 2번"
        }
    ]);
    const addArticle = () => {
        setArticles(
            articles.concat({
                subject : "글 3번",
                content : "내용 3번"
            })
        );
    };

    return (
        <div>
            <ul>
                {articles.map((article, index) => {
                    return (
                        <li key={index}>
                            <div>제목 : {article.subject}</div>
                            <div>제목 : {article.content}</div>
                        </li>
                    );
                })}
            </ul>
            <button onClick={addArticle}>게시물 추가</button>
        </div>
    );
};

export default Plusarticle;