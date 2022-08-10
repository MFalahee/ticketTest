import * as React from 'react';
import discordLogo from "../files/svgs/discord.svg";
import facebookLogo from "../files/svgs/fbook.svg";
import instagramLogo from "../files/svgs/insta.svg";
import twitterLogo from "../files/svgs/twitter.svg";
import tiktokLogo from "../files/svgs/tiktok.svg";
import snapchatLogo from "../files/svgs/snapchat.svg";
/*
// https://twitter.com/iamtheELEPHANTE
// youtube: https://www.youtube.com/c/iamtheelephante
// https://www.instagram.com/iamtheelephante/
// https://www.facebook.com/iamtheelephante
// https://www.tiktok.com/@elephante
// spotify https://open.spotify.com/artist/3fjs4zbBFxEFFe8Wyojo0G?si=ah4x_5_aTWGXDCpNWLwWGA
// snap http://www.snapchat.com/add/iamtheelephante
*/

export default function Socials() {
    function linkOnClick(link: string, e: React.MouseEvent) {
        e.preventDefault();
        window.open(link);
    }
    return(
        <div className="socials-container">
                    <img
                        src={discordLogo}
                        alt="discord logo"
                        // TODO add real link to discord
                        className="discord-logo socials-logo svg-filter-for-yellow"
                        onClick={(e) => linkOnClick("https://discord.gg/XqewexqJnc", e)}
                      />
                      <img
                        src={facebookLogo}
                        alt="facebook logo"
                        className="fbook-logo socials-logo svg-filter-for-yellow"
                        onClick={(e) => linkOnClick("https://www.facebook.com/iamtheelephante", e)}
                      />
                      <img 
                        src={instagramLogo}
                        alt="instagram logo"
                        className="insta-logo socials-logo svg-filter-for-yellow"
                        onClick={(e) => linkOnClick("https://www.instagram.com/iamtheelephante", e)}
                        />
                        <img
                        src={twitterLogo}
                        alt="twitter logo"
                        className="twitter-logo socials-logo svg-filter-for-yellow"
                        onClick={(e) => linkOnClick("https://twitter.com/iamtheELEPHANTE", e)}
                        />
                        <img
                        src={tiktokLogo}
                        alt="tiktok logo"
                        className="tiktok-logo socials-logo svg-filter-for-yellow"
                        onClick={(e) => linkOnClick("https://www.tiktok.com/@elephante", e)}
                        />
                        <img
                        src={snapchatLogo}
                        alt="snapchat logo"
                        className="snapchat-logo socials-logo svg-filter-for-yellow"
                        onClick={(e) => linkOnClick("https://www.snapchat.com/add/iamtheelephante", e)}
                        />
        </div>
    )
}