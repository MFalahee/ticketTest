import { Section } from './customTypes';

let sections: Array<Section> = [
    {
        name: 'Photos',
        subcategories: ['View Gallery', 'Relive Memories'],
        photos: [
            '/files/photos/conc1comp.png',
            '/files/photos/conc2comp.png',
            '/files/photos/conc3comp.png',
            '/files/photos/conc4comp.png',
            '/files/photos/conc5comp.png',
            '/files/photos/conc6comp.png',
            '/files/photos/conc7comp.png',
            '/files/photos/conc8comp.png',
            '/files/photos/conc9comp.png',
            '/files/photos/conc10comp.png',
        ],
        description: 'Section to display photos for the specifc NFT ticket',
        id: 0,
    },
    {
        name: 'Words',
        subcategories: ['Comment Wall', 'Party Voices'],
        // need clarification on the Party Voices section
        description: 'Section to display comments from the crowds  @ the events, and to watch videos of the crowd',
        id: 1,
    },
    {
        name: 'Listen',
        subcategories: ['Private Streams', 'Secret Music'],
        description: 'Section to display private streams and secret music -- Soundcloud embeds and YouTube embeds? ',
        id: 2,
    },
    {
        name: 'World',
        photos: [],
        subcategories: ['Social + Discord', 'Join Us !!'],
        // Promote community and other NFT ticket websites potentially? Could incorporate 3d model if we want to be ambitious?
        description: 'Section to display social media and discord channels.',
        id: 3,
    }
]

/*
social links:
https://discord.gg
https://linktr.ee/iamtheelephante
https://www.facebook.com/IAmTheElephante
https://www.instagram.com/iamtheelephante
https://twitter.com/IAmTheElephante

@Tim
need discord link
need info for domain name
*/ 


export default sections;