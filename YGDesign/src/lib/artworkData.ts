
// src/lib/artworkData.ts
import type { Artwork } from '../types';

// Artwork definitions
const durgaTeaBranding: Artwork = {
  id: '3',
  title: 'Durga Tea Company',
  imageUrl: '/Images/D-01.webp',
  imageWidth: 1000,
  imageHeight: 750,
  description: "Brand identity guidelines for 'Durga Tea', a conceptual tea company. This project explores the visual identity, color palettes, typography, and packaging concepts inspired by the strength, serenity, and symbolism associated with the deity Durga. The aim is to create a brand that evokes warmth, power, and tranquility, reflecting the essence of both the tea and its divine namesake.",
  tags: ['branding', 'logo design', 'packaging', 'tea', 'India', 'tiger', 'chai'],
  category: 'Branding & Identity',
  creationDate: '2024',
  dimensions: 'Digital',
  medium: 'Adobe Illustrator, Adobe Photoshop',
  toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
  dataAiHint: 'tea branding mockup',
  showMotifSwitcher: true,
  interactiveDisplay: {
    contentImageUrl: '/Images/D-11.webp'
  },
  additionalImageUrls: [
    '/Images/D-02.webp',
    '/Images/D-03.webp',
    '/Images/D-04.webp',
    '/Images/D-05.webp',
    '/Images/D-06.webp',
    '/Images/D-07.webp',
    '/Images/D-08.webp',
    '/Images/D-09.webp',
    '/Images/D-10.webp'
  ]
};

const kellardenFarm: Artwork = {
  id: '1',
  title: 'Kellarden Farm',
  imageUrl: '/Images/K_1.webp',
  imageWidth: 500,
  imageHeight: 700,
  description: 'Brand identity proposal for Kellarden Farm, showcasing logo concepts, typography, color palette, and application mockups.',
  tags: ['branding', 'identity design', 'logo', 'farm', 'agriculture', 'proposal'],
  category: 'Branding & Identity Design',
  creationDate: '2022',
  dimensions: 'Digital',
  medium: 'Digital',
  dataAiHint: 'brand proposal',
  additionalImageUrls: [
    '/Images/K_2.webp',
    '/Images/K_3.webp',
    '/Images/K_4.webp',
    '/Images/K_6.webp',
    '/Images/K_7.webp',
    '/Images/K_8.webp',
  ],
  toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
  showLogoSwitcher: true,
};

const silverScreenZine: Artwork = {
  id: '2',
  title: 'Silver Screen',
  imageUrl: '/Images/SS_1.webp',
  imageWidth: 1080,
  imageHeight: 864,
  description: "A special edition zine focusing on cinema, featuring an exclusive look at Godzilla. Winter 2023 special, celebrating the upcoming 70th anniversary of the original film's release.",
  imageCaption: "Inspired by my adoration for the legacy of Godzilla, this zine pays homage to the giant in many ways. The first of which being the custom typeface for the title. Taking inspiration from original artwork for the film's Criterion collection",
  tags: ["zine", "movie", "godzilla", "publication", "cinema"],
  category: 'Publication',
  creationDate: '2023',
  dimensions: 'N/A',
  medium: 'Print',
  toolsUsed: ['Adobe Photoshop', 'Adobe Indesign'],
  dataAiHint: 'zine page',
  downloadablePdfUrl: '/zine/Godzillazine.pdf',
  additionalImageUrls: [
    '/Images/SS_2.webp',
    '/Images/SS_3.webp',
    '/Images/SS_4.webp',
    '/Images/SS_5.webp',
    '/Images/SS_6.webp',
    '/Images/SS_7.webp',
    '/Images/SS_8.webp',
    '/Images/SS_9.webp',
    '/Images/SS_10.webp',
  ],
};

const youthSocietyEmblem: Artwork = {
  id: '7',
  title: 'Youth Society Emblem',
  imageUrl: '/Images/YS_1.webp',
  imageWidth: 258,
  imageHeight: 258,
  description: 'A collection of emblem designs and mockups for "Youth Society," exploring variations in color and style on apparel. These logos aim to convey energy, community, and modern appeal.',
  tags: ['logo design', 'branding', 'emblem', 'youth', 'community', 'mockup'],
  category: 'Logo Design',
  creationDate: '2025',
  dimensions: 'Digital',
  medium: 'Adobe Illustrator, Adobe Photoshop',
  dataAiHint: 'youth emblem mockup',
  additionalImageUrls: [
    '/Images/YS_2.webp',
    '/Images/YS_3.webp',
    '/Images/YS_4.webp',
    '/Images/YS_5.webp',
    '/Images/YS_6.webp',
  ],
  toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
};

const personalProjects: Artwork = {
  id: '9',
  title: 'Personal Projects',
  imageUrl: '/Images/3D_1.webp',
  imageWidth: 800,
  imageHeight: 800,
  description: 'A collection of personal 3D works and passion projects.',
  imageCaption: "A start to my 3D rendering. Artwork sourced from https://www.thecoverproject.net/ of course being covers of Pokémon Red and The Legend of Zelda: Links Awakening for the Gameboy.",
  tags: ["3D", "digital art", "Blender", "rendering", "sculpting", "personal projects"],
  category: 'Personal Projects',
  creationDate: '2024',
  dimensions: 'Digital',
  medium: 'Digital',
  toolsUsed: ['Blender', 'Adobe Photoshop'],
  dataAiHint: '3d abstract render',
  additionalImageUrls: [
    '/Images/N64.webp'
  ],
};

const universityWork: Artwork = {
  id: '10',
  title: 'University',
  imageUrl: '/Images/T_3.webp',
  specialDetailImage: '/Images/wcu-icon-01.svg',
  imageWidth: 600,
  imageHeight: 800,
  description: 'A collection of design projects completed during university studies, showcasing a range of skills and concepts.',
  tags: ["university", "student work", "graphic design", "concepts", "academic", "3D"],
  category: 'Academic Projects',
  creationDate: '2019-2024',
  dimensions: 'Digital & Print',
  medium: 'Various Digital Tools, Mixed Media',
  toolsUsed: ['Adobe Creative Suite', 'Blender', 'Cut Paper'],
  dataAiHint: 'university project design',
  additionalImageUrls: [
    '/Images/RC_1.webp',
    '/Images/RC_2.webp',
    '/Images/RC_3.webp',
    '/Images/RSP_1.webp',
    '/Images/LSP_1.webp',
    '/Images/LEGO_1.webp',
    '/Images/LEGO_2.webp',
    '/Images/T_1.webp',
    '/Images/T_2.webp',
  ],
  additionalImageCaptions: [
    "This is a project created for a 3D art class. The objective was to design and construct a wood-cut food puzzle. I completed the design and construction of the puzzle with ease and wanted to create a real-world mockup of potential packaging. Inspired by Pulp Fiction I recreated the McDonald's burger container to fit the full built puzzle. The bottom of the packaging lists the film's cast as well as various facts and references.",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ],
};


const artworks: Artwork[] = [
  durgaTeaBranding, // ID '3'
  kellardenFarm, // ID '1'
  silverScreenZine, // ID '2'
  youthSocietyEmblem, // ID '7'
  personalProjects, // ID '9'
  universityWork, // ID '10' - Updated
];

export async function getArtworks(): Promise<Artwork[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 50));
  // Filter out any invalid entries but do not sort, to respect the defined order.
  const validArtworks = artworks.filter(artwork => artwork && artwork.id && artwork.creationDate && artwork.title && artwork.imageUrl);
  return validArtworks;
}

export async function getArtworkById(id: string): Promise<Artwork | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 50));
  return artworks.find(artwork => artwork.id === id);
}
    

/*
// TEMPLATE FOR NEW ARTWORK
// 1. Copy the entire block below.
// 2. Uncomment it.
// 3. Change `templateArtwork` to a unique name (e.g., `newProjectName`).
// 4. Fill in all the details.
// 5. Add the unique name (`newProjectName`) to the `artworks` array above.

const templateArtwork: Artwork = {
  // Required fields
  id: 'UNIQUE_ID', // A unique number as a string (e.g., '11')
  title: 'Artwork Title', // Title of the project, can include <br /> for line breaks
  imageUrl: '/Images/your-main-image.webp', // Path to the primary image for the artwork
  imageWidth: 800, // Natural width of the main image in pixels
  imageHeight: 600, // Natural height of the main image in pixels
  description: 'A detailed description of the artwork or project.',
  tags: ['tag1', 'tag2', 'etc'], // A list of relevant tags
  category: 'Artwork Category', // e.g., 'Branding', 'Publication', '3D Art'
  creationDate: 'YYYY', // Year of creation, e.g., "2025"
  dimensions: 'Digital or Physical Dimensions', // e.g., "1920x1080px" or "8.5 x 11 in"
  medium: 'Primary medium used', // e.g., 'Adobe Illustrator', 'Blender', 'Oil on canvas'

  // Optional fields - remove if not needed

  toolsUsed: ['Tool 1', 'Tool 2'], // List of software or tools used
  dataAiHint: 'two keywords', // Hint for AI image generation (max 2 words, e.g., "abstract logo")

  additionalImageUrls: [
    '/Images/additional-1.webp',
    '/Images/additional-2.webp',
    // You can have as many as you need
  ],
  
  additionalImageCaptions: [
    'Caption for additional image 1.', // Corresponds to the image at the same position
    'Caption for additional image 2.',
    undefined, // Use `undefined` if an image doesn't have a caption
  ],
  
  imageCaption: 'A special caption that appears below the main image gallery.',

  downloadablePdfUrl: '/path/to/your/document.pdf', // Link to a PDF file

  // For interactive components, set to `true` to show them
  showLogoSwitcher: false, // Set to true for projects like Kellarden Farm
  showMotifSwitcher: false, // Set to true for projects like Durga Tea

  interactiveDisplay: {
    contentImageUrl: '/Images/long-scrolling-mockup.webp' // For the scrollable mockup display
  },

  specialDetailImage: '/Images/detail-icon.svg', // An icon or small image for the corner accent
};
*/
