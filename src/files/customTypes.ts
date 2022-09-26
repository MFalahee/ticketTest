export type Section = {
  name: string
  subcategories?: Array<string>
  id: number
  description?: string
  // add more properties to section here when needed
}

export type AccordionProps = {
  sections?: Array<Section>
  city?: string
  photos: Array<string>
}

export type AudienceComments = {
  name: string
  message: string
  created_at: string
  city: string
  id: number
}

export type CommentRowProps = {
  comments?: AudienceComments[]
  index?: number
  key?: number
}

export type PhotoTickerProps = {
  city?: string
  photos: Array<string>
}
export type CommentWallProps = {
  comments: AudienceComments[]
  city?: string
}

export type TicketProps = {
  ticketURL?: string
  city?: string
}
