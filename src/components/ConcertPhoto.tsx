import * as React from "react"

// w=900&h=300&fit=crop&crop=entropy&auto=format,enhance&q=60
// going to try using imgix to deliver the images.
const ConcertPhoto: React.FC<{ photo: string; id: number }> = (props) => {
  if (props.photo !== "") {
    console.log(props.photo)
    return (
      <div className='custom-photo-ticker-photo'>
        <img
          src={props.photo}
          className={`custom-photo-ticker-image`}
          id={`img-${props.id}`}
          alt=''
          onMouseOut={(e) => {
            e.preventDefault()
          }}
        />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default ConcertPhoto
