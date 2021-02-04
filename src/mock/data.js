import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael Stephens', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michael Stephens',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.PNG',
  paragraphOne: 'My name is Michael Stephens, I am a third year Computer Science student at the University of Cincinnati and am a part of the graduating class of 2023. I am prideful for my achievements so far throughout my college experience. I have learned a lot through many extensive and vigorous classes dealing with several different subjects from: programming, algorithms, mathematics, and engineering. ',
  paragraphTwo: 'I feel as though I have developed a strong foundation of skills within my Computer Science studies. I have worked with several programming languages including: C++, Python, Java, HTML, and Matlab. I have also learned what it means to be an Engineer and the problem solving principles that come with doing so. I eagerly look forward to putting the skills and knowledge that I have acquired throughout college to work.',
  paragraphThree: 'Contact me at stephme@mail.uc.edu',
  resume: 'https://drive.google.com/file/d/1ENObhIcrfuulDqFBc7s7MQ18IaO67w5_/view?usp=sharing', // if no resume, the button will not show up
};

// COOP DATA
export const coopData = {
  img: 'profile.jpg',
  paragraphOne: "All of my CO-OP experiences thus far have been through the University of Cincinnati's EEP program. EEP stands for Experiential Exploration Program. Throughout the program I partook in various online courses. I took the ‘IBM Blockchain Practitioner Course’ on the IBM skills platform and earned the corresponding certification. Within the course I learned about the general technology and developmental process behind blockchain technology. I also took the ‘IBM Design Thinking Practitioner’ course and learned how to take a given job and perform it given the design thinking principles and iterative process.",
  paragraphTwo: 'Furthermore, I took several python courses including: Python Certified Associate in Programming, Python Certified Professional in Programming 1, and  Python Certified Professional in Programming 2, in order to further develop my programming skills. All of which were on the python institute website. From this unique experience I further developed and learned new skills from that of which my typical college course work provides.',
  paragraphThree: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: '2048 AI',
    info: 'A program developed to play the game 2048 automatically and achieve a relatively high score.',
    info2: '',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fly2.PNG',
    title: 'Re-Genrefy',
    info: 'A web application that takes movie title reviews from the IMDB database and gives them scores based on several different attributes which are calculated from the movies reviews.',
    info2: '',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  // {
    // id: nanoid(),
    // img: 'project.jpg',
    // title: '',
    // info: '',
    // info2: '',
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CAREER DATA
export const careerData = {
  img: 'profile.jpg',
  paragraphOne: 'I hope to obtain a job opportunity that is both challenging and that of a fundamental learning experience. I hope to be able to use some of the skills that I have already learned and also develop new ones. I would like to work my way up from an entry level position to a much higher level whilst learning and becoming a better person in the process.',
  paragraphTwo: "",
  paragraphThree: '',
  //resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// SUM DATA
export const sumData = {
  img: 'profile.jpg',
  paragraphOne: "Still working on this section, work in progress",
  paragraphTwo: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
  paragraphThree: '',
};

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'stephme@mail.uc.edu',
};

// FOOTER DATA
export const footerData = {
  // networks: [
    // {
      // id: nanoid(),
      // name: 'twitter',
      // url: '',
    // },
    // {
      // id: nanoid(),
      // name: 'codepen',
      // url: '',
    // },
    // {
      // id: nanoid(),
      // name: 'linkedin',
      // url: '',
    // },
    // {
      // id: nanoid(),
      // name: 'github',
      // url: '',
    // },
  // ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
