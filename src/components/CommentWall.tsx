import * as React from "react"
import commentDB from "../files/comments"
import CommentRow from "./CommentRow"

interface AudienceComments {
  name: string
  text: string
  date: string
}

export default function CommentWall() {
  const [comments, setComments] = React.useState<AudienceComments[]>()
  const ref = React.useRef<HTMLDivElement>(null)
  let commentsIn = commentDB
  /* 
        this component will be used to display the comments from the database
        there will be four rows of comments, each row will have multiple comments scrolling across the page
        each comment consists of a name, a comment, and a timestamp
        the comments will be displayed in a random order scrolling across the page
        each row will alternate direction for scrolling/speed
    */
  React.useEffect(() => {
    commentsIn.sort(() => Math.random() - 0.5)
    // need to do the logic to insert db here I believe.
    setComments(commentsIn)
  }, [commentsIn])

  return (
    <div ref={ref} className='comment-wall'>
      <CommentRow
        comments={comments}
        index={0}
        key={Math.random()}
        direction='left'
      />
      <CommentRow
        comments={comments}
        index={1}
        key={Math.random()}
        direction='right'
      />
      <CommentRow
        comments={comments}
        index={2}
        key={Math.random()}
        direction='left'
      />
      <CommentRow
        comments={comments}
        index={3}
        key={Math.random()}
        direction='right'
      />
    </div>
  )
}
