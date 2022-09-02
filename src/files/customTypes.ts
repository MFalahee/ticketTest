import React from "react"

export type Section = {
  name: string
  subcategories?: Array<string>
  id: number
  photos?: Array<string>
  description?: string
  // add more properties to section here when needed
}

export type AccordionProps = {
  sections?: Array<Section>
  modalRef: React.RefObject<HTMLDivElement>
  cityCode?: string
}

export type AudienceComments = {
  name: string
  message: string
  created_at: Date
  city: string
  id: number
}

export type CommentRowProps = {
  comments?: AudienceComments[]
  index?: number
  key?: number
}

export type PhotoTickerProps = {
  modalRef: React.RefObject<HTMLDivElement>
}
export type CommentWallProps = {
  comments: AudienceComments[]
}
