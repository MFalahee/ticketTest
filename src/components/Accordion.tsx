import * as React from "react";
import AccordionProps from "../files/customTypes";
import ArrowButton from "../files/ArrowButton";
import { PhotoTicker, CommentWall } from './index';
import { Stack } from "@mui/material";

export default function Accordion(props: AccordionProps) {
  let [state_index, setIndex] = React.useState<Array<number>>(
    new Array(props.sections?.length).fill(0)
  );

  React.useEffect(() => {}, [state_index]);

  const handleActiveDrawer = (index: number) => {
        //check for active drawer, and add or remove active class
        let activeDrawer = document.getElementById(`cas-content-${index}`);
        if (activeDrawer) {
            activeDrawer.classList.toggle("cas-content-hidden");
            document.getElementById(`cas-arrow-${index}`)?.classList.toggle("clicked-arrow")
            document.getElementById(`squares-${index}`)?.classList.toggle("clicked-square")           
        } else {
            console.error('Drawer missing');
        }
  };



  if (props.sections && props.sections.length >= 0) {
    return (
      <div className="custom-accordion">
        {props.sections.map((section, key) => {
          let sectionIndex = section.id ? section.id : 0;
          return (
            <div key={key} className="custom-accordion-section cas">
              <Stack
                className="cas-visible-content"
                direction="column"
                spacing={1}
                onClick={() => handleActiveDrawer(sectionIndex)}
              >
                <div className="cas-top-row">
                  <span className="cas-title-text">{section.name}</span>
                  <ArrowButton
                    index={sectionIndex}
                  />
                </div>{" "}
                {/* end of cas-top-row */}
                <div className="cas-bottom-row">
                  <p className="cas-subcategories">
                    <span>
                      {section.subcategories ? section.subcategories[0] : null}
                    </span>
                    <span>|</span>
                    <span>
                      {section.subcategories ? section.subcategories[1] : null}
                    </span>
                  </p>
                </div>{" "}
                {/* end of cas-bottom-row */}
                {/* hidden accordion content */}
                <div className={`cas-content cas-content-hidden`} id={`cas-content-${sectionIndex}`}>
                    {sectionIndex === 0 ? <PhotoTicker /> : null}
                    {sectionIndex === 1 ? <CommentWall /> : null}
                    {sectionIndex === 2 ? (<div> SoundCloud </div>) : null}
                    {sectionIndex === 3 ? (<div> Socials </div>) : null}
                </div>
              </Stack>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
