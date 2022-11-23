function makeEmojis(minutes) {
    console.log(minutes)
    let emoji 
    if (minutes < 30) {emoji="☕️"}
    else {emoji="🍱"}
    let interval 
    if (minutes < 30) {interval=5}
    else {interval=10}
    let readTime=''
    for (let i=0; i<minutes; i+=interval){
        readTime += emoji;
    }
    return readTime;
}

function Article({ title, date='January 1, 1970', preview, minutes }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <small>{makeEmojis(minutes)} {minutes} min read</small>
        </article>
    );
}

export default Article;