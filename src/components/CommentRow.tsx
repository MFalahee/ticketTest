import { CommentRowProps } from '../files/customTypes';

export default function CommentRow(props: CommentRowProps) {
    // 3 random comments from the array of comments
    if (props.comments) {
    props.comments.sort(() => Math.random() - 0.5);
    let comments = props.comments.slice(0, 6);
    return(
        <div className={`comment-row row-${props.direction}`}>
            {comments.map((comment, key) => {
                return(
                    <div className="comment-row-comment" key={key}>
                        <div className="comment-row-comment-top">
                        <span className="comment-text">{comment.text}</span>
                        </div>
                        <div className="comment-row-comment-bottom">
                        <span className="comment-name">{comment.name}</span>
                        <span> | </span>
                        <span className="comment-date">{comment.date}</span>
                        </div>
                    </div>
                )})}
        </div>
        )
                }
                // if there are no comments, return null
    return null;
   }