import * as React from 'react';
import AccordionProps from '../files/customTypes';
import ArrowButton from '../files/ArrowButton';
import { Stack } from '@mui/material';


export default function Accordion(props: AccordionProps) {
    let [i, setI] = React.useState<Array<number>>(new Array(props.sections?.length).fill(0));
    if (props.sections && props.sections.length >= 0) {
    
    const handleArrowClick = (index: number) => {
            if (index >= 0) {
                i[index] = i[index] === 0 ? 1 : 0
                setI(i)
            } else 
                console.log('index is undefined')
    }
    return (
        <div className="custom-accordion">
            {props.sections.map((section, key) => {
                let sectionIndex = section.id? section.id : 0;
                return(
                <div key={key} className="custom-accordion-section cas">
                    <Stack
                     className="cas-visible-content"
                     direction="column"
                     spacing={1}>
                        <div className="cas-top-row">
                            <span className='cas-title-text'>
                                {section.name}
                            </span>
                            <ArrowButton index={sectionIndex} handleArrowClick={handleArrowClick}/>
                        </div> {/* end of cas-top-row */}
                        <div className="cas-bottom-row">
                            <p className="cas-subcategories">
                            <span>{section.subcategories? section.subcategories[0] : null}</span>
                            <span>|</span>
                            <span>{section.subcategories? section.subcategories[1] : null}</span>
                            </p>
                        </div>  {/* end of cas-bottom-row */}
                    </Stack>
                </div> 
                )
            })}
        </div> 
    )} else {
        return null;
    }
}