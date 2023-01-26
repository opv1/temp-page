import big1 from './assets/big1.png'
import big2 from './assets/big2.png'
import small1 from './assets/small1.png'
import small2 from './assets/small2.png'
import slide1 from './assets/slides/slide1.png'
import slide2 from './assets/slides/slide2.png'
import slide3 from './assets/slides/slide3.png'
import slide4 from './assets/slides/slide4.png'
import slide5 from './assets/slides/slide5.png'
import slide6 from './assets/slides/slide6.png'
import slide7 from './assets/slides/slide7.png'
import slide8 from './assets/slides/slide8.png'

export const data = [
  {
    id: 11,
    type: 'block',
    title: 'ut aliquip ex ea commodo consequat',
    first: {
      image: big1,
      block: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        texts: [
          'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        ],
      },
    },
    second: {
      image: small1,
      block: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        texts: [
          'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        ],
      },
    },
  },
  {
    id: 22,
    type: 'slider',
    title: 'Lorem ipsum dolor sit amet',
    slides: [
      { id: 1, slide: slide1 },
      { id: 2, slide: slide2 },
      { id: 3, slide: slide3 },
      { id: 4, slide: slide4 },
      { id: 5, slide: slide5 },
      { id: 6, slide: slide6 },
      { id: 7, slide: slide7 },
      { id: 8, slide: slide8 },
    ],
  },
  {
    id: 33,
    type: 'block',
    title: 'ut aliquip ex ea commodo consequat',
    first: {
      image: big2,
      block: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        texts: [
          'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        ],
      },
    },
    second: {
      image: small2,
      block: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        texts: [
          'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        ],
      },
    },
  },
]
