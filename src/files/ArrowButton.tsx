import * as React from "react"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import SquareIcon from "@mui/icons-material/Square"

interface ArrowButtonProps {
  // todo: add props
  index: number
}
const ArrowButton: React.FC<ArrowButtonProps> = (props) => {
  let temp = new Array(4).fill(0)

  //   populate the SHOWS arrow with a link here because it is convenient.
  if (props.index === 4) {
    return (
      <div
        onClick={() => window.open("http://www.elephantemusic.com/tour")}
        className='cas-square-icon-container'
        id={`squares-${props.index}`}
      >
        {temp.map((e, i) => {
          return <SquareIcon key={i} className={`cas-square-${i} cas-square`} />
        })}
        <PlayArrowIcon
          className={`cas-arrow`}
          id={`cas-arrow-${props.index}`}
        />
      </div>
    )
  }
  return (
    <div className='cas-square-icon-container' id={`squares-${props.index}`}>
      {temp.map((e, i) => {
        return <SquareIcon key={i} className={`cas-square-${i} cas-square`} />
      })}
      <PlayArrowIcon className={`cas-arrow`} id={`cas-arrow-${props.index}`} />
    </div>
  )
}

export default ArrowButton
