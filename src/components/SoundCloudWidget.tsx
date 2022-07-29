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
        src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/10915053"
      />
    </div>
  );
}
