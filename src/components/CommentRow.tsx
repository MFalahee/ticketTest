import { CommentRowProps } from "../files/customTypes";

// https://www.googleapis.com/youtube/v3/commentThreads?key={your_api_key}&textFormat=plainText&part=snippet&videoId={video_id}&maxResults=100&pageToken={nextPageToken}
// potentially grab comments from Tims yt videos and populate that way? I'd have to filter them somehow.
// researched: https://developers.google.com/youtube/v3/docs/comments
// https://www.youtube.com/c/iamtheelephante

export default function CommentRow(props: CommentRowProps) {
  // 3 random comments from the array of comments
  if (props.comments) {
    props.comments.sort(() => Math.random() - 0.5);
    let comments = props.comments.slice(0, 5);
    return (
      <div className={`comment-row`}>
        {comments.map((comment, key) => {
          return (
            <div key={key} className="trying-something">
              <div
                className={`comment-row-comment move-${props.direction}`}>
                <div className={`comment-row-comment-top`}>
                  <span className="comment-text"> {`"${comment.text}"`} </span>
                </div>

                <div className={`comment-row-comment-bottom`}>
                  <span className="comment-name">{`${comment.name}`}</span>
                  <span> | </span>
                  <span className="comment-date">{`${comment.date}`}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // if there are no comments, return null
  return null;
}
