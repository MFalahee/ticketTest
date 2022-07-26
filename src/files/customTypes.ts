  // declaration of custom types 
export default interface Section {
    name? : string,
    subcategories?: Array<string>,
    id?: number,
    photos?: Array<string>,
    description?: string,
    // add more properties to section here when needed
  }

export default interface AccordionProps {
  sections?: Array<Section>
}
