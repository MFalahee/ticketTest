import * as React from "react";
import commentDB from "../files/comments";
import CommentRow from "./CommentRow";

interface AudienceComments {
  name: string;
  text: string;
  date: string;
}

export default function CommentWall() {
  const [comments, setComments] = React.useState<AudienceComments[]>();
  const [isVisible, setIsVisible] = React.useState<Boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);
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
    commentsIn.sort(() => Math.random() - 0.5);
    setComments(commentsIn);
  }, [commentsIn]);

  React.useEffect(() => {
    startAnimation();
  }, [ref.current]);

  function startAnimation() {
    // start animation
    // hook comment rows via DOM
    // row-left and row-right are the classes for the rows
    let rowLeft = document.getElementsByClassName("move-left");
    let rowRight = document.getElementsByClassName("move-right");
    if (rowLeft && rowRight) {
      // iterate through each arrow of rows and add an animation class to each
      for (let i = 0; i < rowLeft.length; i++) {
        rowLeft[i]?.classList.add("marquee-left");
        rowRight[i]?.classList.add("marquee-right");
      }
    }
  }

  return (
    <div ref={ref} className="comment-wall">
      <CommentRow comments={comments} index={0} direction="left" />
      {/* <div className='comment-wall-row'></div> */}
      <CommentRow comments={comments} index={1} direction="right" />
      {/* <div className='comment-wall-row'></div> */}
      <CommentRow comments={comments} index={2} direction="left" />
      {/* <div className='comment-wall-row'></div> */}
      <CommentRow comments={comments} index={3} direction="right" />
      {/* <div className='comment-wall-row'></div> */}
      <CommentRow comments={comments} index={4} direction="left" />
    </div>
  );
}
