import * as React from "react"
import getComments from "../files/comments"
import { AccordionProps, AudienceComments, Section } from "../files/customTypes"
import ArrowButton from "../files/ArrowButton"
import { PhotoTicker, CommentWall, SoundCloudWidget, Socials } from "./index"

export default function Accordion(props: AccordionProps) {
  const [openArr, setOpenArr] = React.useState([false, false, false, false])
  const [sections, setSections] = React.useState(props.sections)
  const [comments, setComments] = React.useState<AudienceComments[]>([])

  React.useEffect(() => {
    const fetchComments = setTimeout(async () => {
      if (comments && comments.length === 0) {
        await getComments().then((result) => {
          setComments(result)
        })
      }
    }, 5000)
    return () => clearTimeout(fetchComments)
  }, [comments])
  // index = which drawer was clicked
  function accordionClickHandler(index: number) {
    // SHOWS opens a link
    if (index === 4) {
      window.open("http://www.elephantemusic.com/tour")
    }
    // toggle our state obj
    let newOpenArr = [...openArr]
    newOpenArr[index] = !newOpenArr[index]
    // park it
    setOpenArr(newOpenArr)
  }

  // populates the bottom portion of the accordion with the appropriate content
  function handleSectionContent(index: number) {
    switch (index) {
      case 0:
        return (
          <div className='cas-section-content animate-accordion-open'>
            <PhotoTicker city={props.city} photos={props.photos} />
          </div>
        )
      case 1:
        return (
          <div className='cas-section-content animate-accordion-open'>
            {" "}
            {comments ? (
              <CommentWall comments={comments} city={props.city} />
            ) : null}
          </div>
        )
      case 2:
        return (
          <div className='cas-section-content animate-accordion-open'>
            <SoundCloudWidget />
          </div>
        )
      case 3:
        return (
          <div className='cas-section-content animate-accordion-open'>
            {" "}
            <Socials />
          </div>
        )
      case 4:
        // SHOWS section- left blank intentionally
        return (
          <div className='cas-section-content animate-accordion-open'>
            {/* put anything here in SHOWS? */}
          </div>
        )
      default:
        return (
          <div className='cas-section-content animate-accordion-open'>
            Failed to load content.
          </div>
        )
    }
  }

  // reusable function to create the accordion title sections
  function handleAccordionSectionHeader(section: Section) {
    if (section !== null) {
      return (
        <div className='cas-card'>
          <div
            className='cas-top-row'
            onClick={() => accordionClickHandler(section.id)}
            onChange={(e) => console.log("change fired", e)}
          >
            <span className='cas-title-text'>{section.name}</span>
            <ArrowButton index={section.id} />
          </div>
          <div className='cas-bottom-row'>
            <p className='cas-subcategories'>
              {section.subcategories?.map((subcategory, index) => {
                return (
                  <span key={index} className='cas-subcategory'>
                    {subcategory}
                  </span>
                )
              })}
            </p>
          </div>
        </div>
      )
    } else {
      console.error("failure to load accordion section", section)
    }
  }

  // will toggle class to correct arrow

  function handleArrowAnimation() {
    openArr.forEach((ele, key) => {
      let t = document.getElementById(`cas-arrow-${key}`)
      if (t !== null) {
        if (ele) {
          if (!t.classList.contains("active-drawer"))
            t.classList.toggle("active-drawer")
        } else {
          if (t.classList.contains("active-drawer"))
            t.classList.toggle("active-drawer")
        }
      }
    })
    return
  }

  let arrowAnimCB = React.useCallback(handleArrowAnimation, [openArr])

  // if sections change, we update our drawers
  React.useEffect(() => {
    setSections(props.sections)
  }, [props.sections])

  React.useEffect(() => {
    arrowAnimCB()
  }, [openArr, arrowAnimCB])

  if (sections && sections.length >= 0) {
    return (
      <div className='custom-accordion'>
        {sections.map((section, key) => {
          return (
            <div
              key={key}
              className={`custom-accordion-section cas cas-${key}`}
            >
              <div className='cas-visible-content'>
                {handleAccordionSectionHeader(section)}
                {/* hidden accordion content */}
                {openArr[key] ? handleSectionContent(key) : null}
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    console.error("No Sections found to populate Accordion component.")
    return null
  }
}
