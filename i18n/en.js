const categories = [
  'home',
  'about',
  'education',
  'skills',
  'experience',
  'projects',
  'contact',
];
const en = {
  header: {
    categories,
    icons: ['github', 'twitter', 'instagram', 'languages', 'darkmode'],
  },
  hero: {
    title: 'home',
    greet: 'Hi, my name is',
    prof: 'Web Developer',
    button: 'Download Resume',
  },
  about: {
    title: 'about',
    description:
      'I am web developer with experience building digital products with different technologies. Currently my Stack of technologies has a JavaScript as main language, I like to develop solutions that meet high quality metrics in terms of performance, accessibility and good practices. I am looking for job opportunities to grow professionally with an innovation team to provide solutions to different problems.',
  },
  education: {
    title: 'education',
    univ: 'Quantity Surveying - FUTA',
    desc_u:
      'I am studying at the federal university of technology Akure, Nigeria and i will be graduating in the year 2025',
    },
  skills: {
    title: 'skills',
    desc: 'In my free time. I was able to train in different technologies, some of them are.',
    tabs: ['front-end', 'back-end', 'data bases', 'design', 'tools'],
  },
  experience: {
    title: 'experience',
    job_a: [
      'worked with a team of developers to rebuild the current e-commerce that made it more elegant and performant',
      'Tested sites in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness',
      'Communicate and collaborate with a team of developers, designer and project managers on daily basics',
    ],
    job_b:[
      'Worked with a team of developers to create a web application that helped the company to transition to paperless for purchase requests and approval process',
      'Write clean, readable and manageable code for our internal projects',
      'Implementation of frontend functionalities and interfaces creation of general reuseable components',
      'Write well tested backend functionalities using NodeJS and ExpressJS',
      'communicate and collaborate with a team of developers, designers and project managers on a daily basics'
    ]
  },
  list_projects: {
    title: 'projects',
    type: 'featured project',
    projects: [
      {
        id: 1,
        title: 'East Clothing',
        links: {
          github: 'https://github.com/prevailayodele2/ecommerce-recent-client.git',
          live: 'https://east-clothing-client.onrender.com/',
        },
        url: '/assets/projects/east.png',
        description:
          'This project is a Single Page App, developed using React Js In order to shop for cloths and acessories, search for better deals and track ordered Products',
        tags: ['ReactJs', 'Javascript', "Redux"],
      },
      {
        id: 2,
        title: 'kindeem Online Shopping',
        links: {
          github: 'https://github.com/prevailayodele2/kindeem-awesome-ecom--client',
          live: 'https://drive.google.com/file/d/1n8Ca4GhME_qQ1D8bFDte8NJ0mnAsvfAK/view?usp=share_link',
        },
        url: '/assets/projects/kindeem.png',
        description:
          'This project is a Single Page Application and its objective is to sell Elctronics like mobile accessories, home apliances and lots more, this project is implemented with Nextjs and also implements a payment and location to calculate delivery charges based on distance.',
        tags: ['Nextjs', 'Javascript', 'ReduxJS', 'Sass'],
      },
      {
        id: 3,
        title: 'Twak(Ongoing)',
        links: {
          github: 'https://github.com/prevailayodele2/chat-app-latest.git',
          live: 'https://twak.onrender.com',
        },
        url: '/assets/projects/twak.png',
        description:
          'This project is a chat app with socket io and Restful Api as a server side rendering that supports image sharing , link sharing, video and audio call and group chat NOTE: TO ACCESS APP LOGIN WITH DEFAULT VALUE',
        tags: ['ReactJS', 'Material ui', 'Socket io', 'Node js','MongoDB'],
      },
      {
        id: 4,
        title: 'Anon Ecommerce',
        links: {
          github: 'https://github.com/prevailayodele2/anon-ecommerce',
          live: 'https://jolly-moxie-11da3b.netlify.app/',
        },
        url: '/assets/projects/anon.png',
        description:
          'This project is a site with a complete ecommece application design with a multiple user friendly page and pure carousel ',
        tags: ['Javascript', 'Css', 'Html'],
      },
      {
        id: 5,
        title: 'Digitic Ecommerce(Ongoing)',
        links: {
          github: 'https://github.com/prevailayodele2/digitic',
          live: 'https://digitic-client.onrender.com',
        },
        url: '/assets/projects/digitic.png',
        description:
          'This project is a SPA made with react that user can shop for electronics and cloth, share product, and add product to wishlist as well as review a product  ',
        tags: ['React', 'Css', 'Redux', "React image zoom", "Node js"],
      },
      {
        id: 6,
        title: 'Dress Shop',
        links: {
          github: 'https://github.com/prevailayodele2/dress-shop',
          live: 'https://dress-shop.vercel.app',
        },
        url: '/assets/projects/dress.png',
        description:
          'This project is a SPA made with react that user can shop for electronics and cloth, share product, and add product to wishlist as well as review a product  ',
        tags: ['React', 'Framer motion', 'Redux', "Stripe", "Node js", "Cloudinary", "passport", "Typescript"],
      },
    ],
  },
  contact: {
    title: 'contact',
    desc: 'Hello again, If you want to build incredible things or want to contact me with any suggestions or questions you can send me an email, or an internal message on my social networks.',
  },
  footer: {
    desc: 'Designed & Built by Owoade Prevail',
  },
};

export default en;
