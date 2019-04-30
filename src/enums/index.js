export const SOCIAL_NETWORK = {
  GITHUB: 'GITHUB',
  INSTAGRAM: 'INSTAGRAM',
}

export const SOCIAL_NETWORK_LINKS = {
  [SOCIAL_NETWORK.GITHUB]: 'https://github.com/{username}',
  [SOCIAL_NETWORK.INSTAGRAM]: 'https://instagram.com/{username}',
}

export const SOCIAL_NETWORK_ICONS = {
  [SOCIAL_NETWORK.GITHUB]: 'github',
  [SOCIAL_NETWORK.INSTAGRAM]: 'instagram',
}

export const RESPONSIVE_SIZES = {
  MOBILE: '30em',
  TABLET: '60em',
}

export const RESUME = {
  IMAGE: 'https://source.unsplash.com/random',
  NAME: 'Christian Russo',
  INTRO: "Howdy!  I'm a developer and writer from Baltimore, Maryland.",
  JOB: 'Developer / Writer',
  ABOUT: 'I love clean code, long hikes, riveting reads, and jamming out on the acoustic guitar.',
  SOCIAL_NETWORKS: {
    [SOCIAL_NETWORK.GITHUB]: 'xianrusso',
    [SOCIAL_NETWORK.INSTAGRAM]: 'fotoxian',
  },
  ACTIONS: [
    {
      icon: 'IoIosAttach',
      title: 'View Resume',
      to: '/resume',
    },
    {
      icon: 'IoIosMail',
      title: 'iamchristianrusso@gmail.com',
      href: 'mailto:iamchristianrusso@gmail.com',
    },
  ],
  DETAIL: {
    EXPERIENCE: {
      'Front-end': 'JavaScript, CSS3, and HTML5 are my bread and butter.  I am adept in React and Vue, and have familiarity with jQuery.',
      'Back-end': 'NodeJS is my steez.  I have experience with both RDBMS (MySQL) and NoSQL (MongoDB).  I can get by with GraphQL as well.  I also have experience with Python and the Flask framework.'
    },
    PORTFOLIO: {
      'OSS': 'Check out my github.',
      'Business Websites': 'I have experience building websites for small businesses spanning multiple industries.',
      'Poetry': 'I am a published poet in WhyNicht, an Austrian literary magazine.',
    },
    OTHER_WORK_EXPERIENCE: {
      'El Diablo Hostel, December 2017 - February 2018': 'Worked in a hostel for 3 months, and returned in the summer to work there again.',
      'English Teacher, September 2016 - May 2017': 'Gave private lessons to young children in Madrid, Spain.',
      'Musician, 2011 - 2014': 'Booked gigs, marketed the band, and sang and played guitar for We The Empire', 
    },
  },
}

export const SOURCES = {
  STYLES: 'https://fonts.googleapis.com/css?family=Bitter:700|Oxygen',
}
