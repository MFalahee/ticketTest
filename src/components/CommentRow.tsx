import { AudienceComments, CommentRowProps } from "../files/customTypes"

export default function CommentRow(props: CommentRowProps) {
  function seedComment(comment: AudienceComments, key: number) {
    if (comment)
      return (
        <div key={key} className='marquee-item'>
          <div className='comment-style-div'>
            <div className={`comment-row-comment-top`}>
              <span className='comment-text'> {`"${comment.message}"`} </span>
            </div>
            <div className={`comment-row-comment-bottom`}>
              <span className='comment-name'>{`${comment.name}`}</span>
              <span> | </span>
              <span className='comment-date'>{`${comment.created_at}`}</span>
            </div>
          </div>
        </div>
      )
  }

  if (props.comments) {
    props.comments.sort(() => Math.random() - 0.5)
    let comments = props.comments.slice(0, 5)
    return (
      <div
        className='comment-row-container marquee-wrapper'
        onAnimationStart={(e) => {
          e.isDefaultPrevented()
        }}
      >
        <div className='container'>
          <div className='marquee-block'>
            <div className='marquee-inner'>
              <span className='marquee-inner-span'>
                {comments.map((comment, key) => {
                  return seedComment(comment, key)
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // if there are no comments, return null
  return null
}
