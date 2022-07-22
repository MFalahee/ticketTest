import Section from './customTypes';

let sections: Array<Section> = [
    {
        name: 'Photos',
        subcategories: ['View Gallery', 'Relive Memories'],
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
        subcategories: ['Social + Discord', 'Join Us !!'],
        // Promote community and other NFT ticket websites potentially? Could incorporate 3d model if we want to be ambitious?
        description: 'Section to display social media and discord channels.',
        id: 3,
    }
]

export default sections;