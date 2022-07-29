import * as React from 'react';
import discordLogo from "../files/svgs/discord.svg";
import socialLogos from "../files/svgs/socials.svg";

export default function Socials() {
    return(
        <div className="socials-container">
            <img
                        src={discordLogo}
                        alt="discord logo"
                        className="discord-logo"
                      />
                      <img
                        src={socialLogos}
                        alt="socials logo"
                        className="socials-logo"
                      />
        </div>
    )
}