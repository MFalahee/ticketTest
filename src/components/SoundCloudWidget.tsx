import * as React from "react"

export default function SoundCloudWidget() {
  let link =
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1482547189%3Fsecret_token%3Ds-8DtQOIkYrrS&color=%230e161a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
  return (
    <div className='sc-widget'>
      <iframe
        title='soundcloud-widget'
        id='sc-widget'
        width='50%'
        height='322'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src={link}
      />
    </div>
  )
}
