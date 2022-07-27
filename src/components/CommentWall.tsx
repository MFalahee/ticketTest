import * as React from 'react';
import commentDB from '../files/comments';
import CommentRow from './CommentRow';


interface AudienceComments {
    name: string;
    text: string;
    date: string;
}

export default function CommentWall() {
    const [comments, setComments] = React.useState<AudienceComments[]>();
    let commentsIn = commentDB;
    /* 
        this component will be used to display the comments from the database
        there will be four rows of comments, each row will have multiple comments scrolling across the page
        each comment consists of a name, a comment, and a timestamp
        the comments will be displayed in a random order scrolling across the page
        each row will alternate direction for scrolling/speed
    */
   React.useEffect(() => {
    // set comments
    setComments(commentsIn);
   }, [])

   return(
    <div className="comment-wall-container">
        <CommentRow comments={comments} index={0} direction="left"/>
        <CommentRow comments={comments} index={1} direction="right"/>
        <CommentRow comments={comments} index={2} direction="left"/>
        <CommentRow comments={comments} index={3} direction="right"/>
        <CommentRow comments={comments} index={4} direction="left"/>
    </div> 
   )
}
