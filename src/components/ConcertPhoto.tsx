import * as React from "react"

const ConcertPhoto: React.FC<{ photo: string; id: number }> = (props) => {
  if (props.photo !== "") {
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
