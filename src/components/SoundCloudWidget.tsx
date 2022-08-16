import * as React from "react";

export default function SoundCloudWidget() {
  return (
    <div className="sc-widget">
      <iframe
        title="soundcloud-widget"
        id="sc-widget"
        width="50%"
        height="322"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/10915053/sets/heavy-glow-tour-vips/s-8DtQOIkYrrS?si=a79f6faf75144bf1974c4c8a6cf38d75"
      />
    </div>
)}

// https://soundcloud.com/iamtheelephante/sets/heavy-glow-tour-vips/s-8DtQOIkYrrS?si=a79f6faf75144bf1974c4c8a6cf38d75

// prev vers
// "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/10915053"