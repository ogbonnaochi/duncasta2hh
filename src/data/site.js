export const GCAL_URL = 'https://calendar.app.google/QVbKp2B2NJPoM3Ae9';
// Replace the old single GCAL_URL line with these two:



// Keep all the rest of your exports (contact, heroSlides, IMAGES, team, etc.) exactly the same...

export const contact = {
  phone: '07379 338948',
  emails: ['Chris@doncasterphysio.co.uk', 'Chelsea@doncasterphysio.co.uk'],
  address: 'Danum House, South Parade, Doncaster, DN1 2DY',
  hours: 'Monday to Sunday: 8:00 AM – 7:00 PM',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61590079153754',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
};

export const heroSlides = [
  {
    id: 1,
    heading: 'Regain Your\nActive Lifestyle',
    sub: 'Expert physiotherapy care tailored to your recovery journey.',
    bg: 'https://doncasterphysio.com.au/wp-content/uploads/2024/08/logo.png',
  },
];

// Exact images from doncasterphysio.com.au
export const IMAGES = {
  aboutImg: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/ab.jpg',
  physiotherapy: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/Physiotherapy.jpg',
  physiotherapyIcon: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/chiropractic-physiotherapy-svgrepo-com.svg',
  spineIcon: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/spine-svgrepo-com.svg',
  whyA: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/a.svg',
  whyS: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/s.svg',
  whyGender: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/gender-mark-2-svgrepo-com.svg',
  whyLang: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/translation-icon-translate-language-svgrepo-com.svg',
  whyMap: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/map.svg',
  condAnkle: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/an.png',
  condBack: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/b1.png',
  condHip: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/HIP.png',
  condKnee: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/knee.png',
  condNeck: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/neck.png',
  condSurgery: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/rrehab.png',
  condShoulder: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/shoulder.png',
  condSoft: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/soft.png',
  condSports: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/sports.png',
  teamChris: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/shah.jpg',
  teamChelsea: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/sherry.jpg',
  teamJames: 'https://doncasterphysio.com.au/wp-content/uploads/2025/05/sean.jpg',
  logoFooter: '/logo.jpeg',
  logo: '/logo.jpeg',
  // Partners from flyer (HCPC and CSP)
  hcpc: 'https://www.hcpc-uk.org/globalassets/resources/logos/hcpc-logo.png',
  csp: 'https://www.csp.org.uk/system/files/csp_logo_rgb.png',
};

export const conditions = [
  { label: 'Ankle and Foot', img: IMAGES.condAnkle },
  { label: 'Back & Spine', img: IMAGES.condBack },
  { label: 'Hip and Groin', img: IMAGES.condHip },
  { label: 'Knee', img: IMAGES.condKnee },
  { label: 'Neck', img: IMAGES.condNeck },
  { label: 'Pre/Post Surgery', img: IMAGES.condSurgery },
  { label: 'Shoulder', img: IMAGES.condShoulder },
  { label: 'Soft Tissue Injuries', img: IMAGES.condSoft },
  { label: 'Sports Injuries', img: IMAGES.condSports },
];

export const team = [
  {
    name: 'Chris Doncaster',
    role: 'Principal Musculoskeletal Physiotherapist and Director',
    bio: 'Chris is a highly experienced musculoskeletal physiotherapist registered with the HCPC and CSP. With extensive clinical expertise, he leads the team with a commitment to evidence-based, patient-centred treatment across all conditions.',
    img: IMAGES.teamChris,
  },
  {
    name: 'Chelsea Doncaster',
    role: 'Senior Musculoskeletal Physiotherapist',
    bio: 'Chelsea brings a wealth of knowledge in rehabilitation and musculoskeletal physiotherapy. Her compassionate approach and clinical skill ensure every patient receives the highest standard of personalised care.',
    img: IMAGES.teamChelsea,
  },
  {
    name: 'James Whitmore',
    role: 'Senior Musculoskeletal Physiotherapist',
    bio: 'James specialises in sports injury rehabilitation and manual therapy. His dedication to helping patients recover quickly and prevent re-injury makes him a valued member of the Doncaster Physio team.',
    img: IMAGES.teamJames,
  },
];

export const testimonials = [
  {
    title: 'Great Team of Physiotherapists',
    text: 'I have seen three physiotherapists over the past 3 years at Doncaster Physio and everyone has been 100% professional, courteous and helpful. They focus on treatment first and always provide a plan for the prevention of the problem becoming a recurring one. 10/10, cannot recommend highly enough.',
    author: 'Michael T.',
  },
  {
    title: 'Knowledgeable and Friendly Staff',
    text: 'Chris and his team are all very professional and knowledgeable physiotherapists. When I have been here I have confidence that my problem will be dealt with and that motivates me to do the exercises set between visits. These guys also care about their patients and you almost feel like you are being treated by a friend.',
    author: 'Sarah K.',
  },
  {
    title: 'Excellent Service',
    text: "I've been coming to Doncaster Physio for years and I wouldn't go anywhere else. I have a really bad back and Chris is the only one I trust to fix it. Would and have highly recommended to anyone that needs a physiotherapist.",
    author: 'David R.',
  },
];

export const whyUs = [
  { img: IMAGES.whyA, title: 'Highly Experienced Physiotherapists' },
  { img: IMAGES.whyS, title: 'Scientific and Medically Proven Results' },
  { img: IMAGES.whyGender, title: 'Choice between Male and Female Practitioners' },
  { img: IMAGES.whyLang, title: 'English and Multi-lingual Speaking' },
  { img: IMAGES.whyMap, title: 'Convenient Doncaster Location' },
];
