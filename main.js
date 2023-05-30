// mobile menu
// import ScrollReveal from "scrollreveal";

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('show-links');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('show-links');
  });
});

// feature speakers
const speakersList = [
  {
    id: 1,
    name: 'yohai benkler',
    title: 'Professor at Harvard Law School',
    img: './images/speaker_01.png',
    desc: 'He developed co-production, emphasizing collaboration in a networked setting, exemplified by open-source software and Wikipedia.',
  },
  {
    id: 2,
    name: 'Noh So-young',
    title: 'Art Center Nabi Director, CC Korea Director',
    img: './images/speaker_02.png',
    desc: 'As the author of <Digital Art Art of Our Time>, he opened Art Center Nabi, Korea first digital art institution in 2000, and is currently serving.',
  },
  {
    id: 3,
    name: 'Layla Trettikov',
    title: 'Secretary General of the Wikimedia Foundation',
    img: 'images/speaker_03.png',
    desc: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia.',
  },
  {
    id: 4,
    name: 'Jeon Gil-nam',
    title: 'Emeritus Professor',
    img: './images/speaker_04.png',
    desc: 'Developed Asias first Internet protocol network SDN and led Koreas first private line Internet connection in 1990, ushering in a full-fledged',
  },
  {
    id: 5,
    name: 'Julia Leda',
    title: 'Head of the Young Pirates of Europe',
    img: './images/speaker_05.png',
    desc: 'European integration and online youth participation in politics and democracy are major concerns',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    title: 'Creative Commons CEO',
    img: './images/speaker_06.png',
    desc: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014.',
  },
];

const selectSpeakers = document.querySelector('.speakers');

function createSpeakerElement(speaker) {
  const article = document.createElement('article');
  article.classList.add('speaker-item');

  const img = document.createElement('img');
  img.src = speaker.img;
  img.alt = 'speaker image';
  img.classList.add('photo');
  article.appendChild(img);

  const speakerInfo = document.createElement('div');
  speakerInfo.classList.add('speaker-info');
  article.appendChild(speakerInfo);

  const header = document.createElement('header');
  speakerInfo.appendChild(header);

  const name = document.createElement('h4');
  name.classList.add('name');
  name.textContent = speaker.name;
  header.appendChild(name);

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = speaker.title;
  header.appendChild(title);

  const desc = document.createElement('p');
  desc.classList.add('desc');
  desc.textContent = speaker.desc;
  speakerInfo.appendChild(desc);

  return article;
}

function speakersShow(speakerItems) {
  speakerItems.forEach((item) => {
    const speakerElement = createSpeakerElement(item);
    selectSpeakers.appendChild(speakerElement);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  speakersShow(speakersList);
  // const ScrollReveal = 'scrollreveal';
  /* eslint-disable */
  const scrollBar = ScrollReveal({
    distance: "0px",
    duration: 1000,
    opacity: 0.5,
    easing: "ease-in-out",
    reset: true,
  });
  scrollBar.reveal(".speaker-item", {
    origin: "bottom",
    scale: 0.5,
    delay: 100,
  });
});
