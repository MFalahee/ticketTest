import * as React from "react";
import { AccordionProps, Section } from "../files/customTypes";
import ArrowButton from "../files/ArrowButton";
import { PhotoTicker, CommentWall, SoundCloudWidget, Socials } from "./index";
import { Stack } from "@mui/material";

export default function Accordion(props: AccordionProps) {
  const [openArr, setOpenArr] = React.useState([false, false, false, false]);
  const [sections, setSections] = React.useState(props.sections);

  function accordionClickHandler(index: number) {
    let newOpenArr = [...openArr];
    newOpenArr[index] = !newOpenArr[index];
    setOpenArr(newOpenArr);
  }

  function handleSectionContent(index: number) {
    switch (index) {
      case 0:
        return <PhotoTicker />;
        break;
      case 1:
        return <CommentWall />;
        break;
      case 2:
        return <SoundCloudWidget />;
        break;
      case 3:
        return <Socials />;
        break;
    }
  }

  function handleAccordionSectionTop(section: Section) {
    if (section !== null) {
      return (
        <div className="cas-card">
          <div className="cas-top-row">
            <span className="cas-title-text">{section.name}</span>
            <ArrowButton index={section.id} />
          </div>
          <div className="cas-bottom-row">
            <p className="cas-subcategories">
              {section.subcategories?.map((subcategory, index) => {
                return (
                  <span key={index} className="cas-subcategory">
                    {subcategory}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      );
    } else {
      console.error("failure to load accordion section", section);
    }
  }

  if (props.sections && props.sections.length >= 0) {
    return (
      <div className="custom-accordion">
        {props.sections.map((section, key) => {
          return (
            <div key={key} className="custom-accordion-section cas">
              <Stack
                className="cas-visible-content"
                direction="column"
                spacing={1}
                onClick={() => accordionClickHandler(key)}
              >
                {handleAccordionSectionTop(section)}
                {/* hidden accordion content */}
                {openArr[key] ? handleSectionContent(key) : null}
              </Stack>
            </div>
          );
        })}
      </div>
    );
  } else {
    console.error("No Sections found to populate Accordion component.");
    return null;
  }
}
