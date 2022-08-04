import * as React from "react";
import { AccordionProps, Section } from "../files/customTypes";
import ArrowButton from "../files/ArrowButton";
import { PhotoTicker, CommentWall, SoundCloudWidget, Socials } from "./index";

export default function Accordion(props: AccordionProps) {
  const [openArr, setOpenArr] = React.useState([false, false, false, false]);
  const [sections, setSections] = React.useState(props.sections);

  function accordionClickHandler(index: number) {
    let newOpenArr = [...openArr];
    newOpenArr[index] = !newOpenArr[index];
    setOpenArr(newOpenArr);
  }

  // populates the bottom portion of the accordion with the appropriate content
  function handleSectionContent(index: number) {
    switch (index) {
      case 0:
        return <div className="cas-section-content active-cas-section"><PhotoTicker /></div> ;
      case 1:
        return <div className="cas-section-content active-cas-section"> <CommentWall /></div>;
      case 2:
        return <div className="cas-section-content active-cas-section"><SoundCloudWidget /></div> ;
      case 3:
        return <div className="cas-section-content active-cas-section"> <Socials /></div>;
    }
  }
  // reusable function to create the accordion title sections
  function handleAccordionSectionTop(section: Section) {
    if (section !== null) {
      return (
        <div className="cas-card"
             onClick={() => accordionClickHandler(section.id)}>
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
  // if sections change, we update our drawers
  React.useEffect(() => {
    setSections(props.sections);
  }, [props.sections])

  if (sections && sections.length >= 0) {
    return (
      <div className="custom-accordion">
        {sections.map((section, key) => {
          return (
            <div key={key} className={`custom-accordion-section cas cas-${key}`}>
              <div
                className="cas-visible-content"
              >
                {handleAccordionSectionTop(section)}
                {/* hidden accordion content */}
                {openArr[key] ? handleSectionContent(key) : null}
              </div>
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
