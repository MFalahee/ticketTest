import * as React from "react"
import CommentRow from "./CommentRow"
import { AudienceComments, CommentWallProps } from "../files/customTypes"

export default function CommentWall(props: CommentWallProps) {
  const [comments] = React.useState<AudienceComments[]>(props.comments)
  const [count, setCount] = React.useState<number>(0)
  const ref = React.useRef<HTMLDivElement>(null)
  /* 
        this component will be used to display the comments from the database
        there will be four rows of comments, each row will have multiple comments scrolling across the page
        each comment consists of a name, a comment, and a timestamp
        the comments will be displayed in a random order scrolling across the page
        each row will alternate direction for scrolling/speed
    */
  React.useEffect(() => {
    if (comments && comments.length > 0) {
      // split the comments into chunks for each row. Maximum 10 comments per row, defaults to 5.
      let comArr = props.comments
      let len = comArr.length
      for (let i = 0; i <= 10; i++) {
        if (len % i === 0) {
          setCount(i)
        } else {
          setCount(i)
        }
      }
    }
  }, [comments, props.comments])

  function breakUpComments(row: number) {
    let c = comments
    let num = count
    if (c && num) {
      if (row === 0) {
        let t = c.slice(0, num - 1)
        return t
      } else {
        let t = c.slice(row * num - 1, row * 2 * num - 1)
        return t
      }
    }
  }
  return (
    <div ref={ref} className='comment-wall'>
      <CommentRow comments={breakUpComments(0)} index={0} />
      <CommentRow comments={breakUpComments(1)} index={1} />
      <CommentRow comments={breakUpComments(2)} index={2} />
      <CommentRow comments={breakUpComments(3)} index={3} />
    </div>
  )
}
