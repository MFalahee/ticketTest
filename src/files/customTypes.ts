export type Section = {
    name : string,
    subcategories?: Array<string>,
    id?: number,
    photos?: Array<string>,
    description?: string,
    // add more properties to section here when needed
  }

export type AccordionProps = {
  sections?: Array<Section>
}


export  type AudienceComments = {
  name: string;
  text: string;
  date: string;
}

export type CommentRowProps = {
  comments?: AudienceComments[];
  index?: number;
  direction?: string;
}