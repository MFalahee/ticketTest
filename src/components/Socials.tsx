import * as React from 'react';
import discordLogo from "../files/svgs/discord.svg";
import facebookLogo from "../files/svgs/fbook.svg";
import instagramLogo from "../files/svgs/insta.svg";
import twitterLogo from "../files/svgs/twitter.svg";
import tiktokLogo from "../files/svgs/tiktok.svg";
import snapchatLogo from "../files/svgs/snapchat.svg";


export default function Socials() {
    return(
        <div className="socials-container">
                    <img
                        src={discordLogo}
                        alt="discord logo"
                        className="discord-logo socials-logo svg-filter-for-yellow"
                      />
                      <img
                        src={facebookLogo}
                        alt="facebook logo"
                        className="fbook-logo socials-logo svg-filter-for-yellow"
                      />
                      <img 
                        src={instagramLogo}
                        alt="instagram logo"
                        className="insta-logo socials-logo svg-filter-for-yellow"
                        />
                        <img
                        src={twitterLogo}
                        alt="twitter logo"
                        className="twitter-logo socials-logo svg-filter-for-yellow"
                        />
                        <img
                        src={tiktokLogo}
                        alt="tiktok logo"
                        className="tiktok-logo socials-logo svg-filter-for-yellow"
                        />
                        <img
                        src={snapchatLogo}
                        alt="snapchat logo"
                        className="snapchat-logo socials-logo svg-filter-for-yellow"
                        />
        </div>
    )
}