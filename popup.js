const projects = {
  p15: {
    name: 'Car Booking',
    description:
      'The project we built for the Final Project capstone is based on an app to book an appointment for a Car in the world.',
    img: './Images/Desktop-version/Capstone.PNG',
    technolgies: ['React', 'Redux', 'Ruby', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://car-booking-frontend.onrender.com',
    linkToSource: 'https://github.com/FaranoshAmini',
    generalInf: ['Car Booking', 'Front End & Back End', 2023],
  },
  p16: {
    name: 'Math Magicians',
    description:
      'Math magicians is a website for all fans of mathematics. It is a single-page app (SPA) that allows users to make simple calculations and read random math-related.',
    img: './Images/Desktop-version/Math.PNG',
    technolgies: ['React', 'Redux', 'HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://faranosh-math-magicians.netlify.app',
    linkToSource: 'https://github.com/FaranoshAmini',
    generalInf: ['Math Magicians', 'Front End Dev', 2023],
  },
  p17: {
    name: 'Microverse Conference',
    description:
      'Microverse is a global school for remote software developers where students learn through remote pair programming and dont pay anything until they get a job.',
    img: './Images/Desktop-version/microverse.PNG',
    technolgies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://faranoshamini.github.io/Microverse-Conference',
    linkToSource: 'https://github.com/FaranoshAmini',
    generalInf: ['Conference', 'Front End', 2022],
  },
};
const myWork = document.querySelector('#work');
function createMobileProjectCard(key) {
  const projectSection = document.createElement('div');
  const img = document.createElement('img');
  const general = document.createElement('div');
  const infGeneral = document.createElement('div');
  const title = document.createElement('h3');
  const inf = document.createElement('p');
  const description = document.createElement('p');
  const techns = document.createElement('ul');
  const btnLoad = document.createElement('a');
  const footer = document.createElement('footer');
  const externalLink = document.createElement('div');
  const descriptionList = projects[key].description.split(' ');
  const descriptionNbrWords = descriptionList.length;
  externalLink.appendChild(btnLoad);
  externalLink.classList.add('external_link');
  footer.appendChild(techns);
  footer.appendChild(externalLink);
  general.appendChild(title);
  general.appendChild(infGeneral);
  general.appendChild(description);
  general.appendChild(footer);
  general.classList.add('general');
  infGeneral.appendChild(inf);
  infGeneral.id = 'general_inf';
  projectSection.appendChild(img);
  img.src = projects[key].img;
  img.alt = 'Image project';
  img.classList.add('project_image');
  projectSection.appendChild(general);
  title.innerHTML = projects[key].name;
  inf.innerHTML = `${projects[key].generalInf[0]}  &bullet;  ${projects[key].generalInf[1]}  &bullet;  ${projects[key].generalInf[2]}`;
  inf.classList.add('title');
  description.innerHTML = descriptionList
    .slice(0, Math.min(17, Math.floor(0.4 * descriptionNbrWords)))
    .join(' ');
  description.innerHTML += '...';
  description.classList.add('project_description');
  projects[key].technolgies.forEach((element) => {
    techns.innerHTML = `${techns.innerHTML}<li>${element} </li>`;
  });
  techns.classList.add('skills');
  btnLoad.innerHTML = 'See Project';
  btnLoad.href = '#';
  projectSection.appendChild(general);
  projectSection.key = key;
  projectSection.className = 'project';
  return projectSection;
}
Object.keys(projects).forEach((key) => {
  myWork.appendChild(createMobileProjectCard(key));
});
const popUpBtn = document.querySelectorAll('.external_link');
const btnSource = document.createElement('a');
const btnLive = document.createElement('a');
const externalButton = document.createElement('div');
const wrapper = document.createElement('div');
const home = document.querySelector('.home-page');
const about = document.querySelector('.headline');
const head = document.querySelector('#nav');
const wwork = document.querySelector('#work');
const cancelBtn = document.createElement('img');
const imgWrapper = document.createElement('div');
const header = document.createElement('div');
const title = document.createElement('h3');
const infos = document.createElement('p');
const image = document.createElement('img');
const description = document.createElement('p');
const skills = document.createElement('ul');
imgWrapper.classList.add('pop-header-div');
cancelBtn.src = './Images/Icon.svg';
imgWrapper.appendChild(cancelBtn);
btnSource.target = '_blank';
btnLive.target = '_blank';
description.classList.add('project_description');
infos.classList.add('inf');
const bottom = document.createElement('div');
const mobilePart = document.createElement('div');
title.classList.add('pop-header-h3');
header.appendChild(title);
header.appendChild(imgWrapper);
header.classList.add('pop-header');
btnSource.innerHTML = '<img src="Images/gitbutton.png" alt="Live version"> ';
btnLive.innerHTML = '<img src="Images/livebutton.png" alt="Live version"> ';
externalButton.appendChild(btnLive);
externalButton.appendChild(btnSource);
bottom.appendChild(skills);
bottom.appendChild(externalButton);
mobilePart.appendChild(description);
mobilePart.appendChild(bottom);
mobilePart.classList.add('mobile-part-class');
mobilePart.querySelector('p').classList.add('pop-header-description');
image.classList.add('project_image');
image.classList.add('pop-header-img');
wrapper.appendChild(header);
wrapper.appendChild(infos);
wrapper.appendChild(image);
wrapper.appendChild(mobilePart);
wrapper.style.zIndex = '999';
wrapper.style.position = 'absolute';
wrapper.style.top = '0';
wrapper.classList.add('pop-window');
wrapper.style.visibility = 'hidden';
home.appendChild(wrapper);
popUpBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const parentId = btn.parentElement.parentElement.parentElement.key;
    title.innerHTML = projects[parentId].name;
    infos.innerHTML = `${projects[parentId].generalInf[0]}  &bullet;  ${projects[parentId].generalInf[1]}  &bullet;  ${projects[parentId].generalInf[2]}`;
    image.src = projects[parentId].img;
    description.innerHTML = projects[parentId].description;
    skills.innerHTML = '';
    projects[parentId].technolgies.forEach((element) => {
      skills.innerHTML = `${skills.innerHTML}<li>${element} </li>`;
    });
    btnSource.href = projects[parentId].linkToSource;
    btnLive.href = projects[parentId].linkToLiveVersion;
    skills.classList.add('skills');
    skills.classList.add('techns');
    home.style.backgroundColor = 'rgba(193, 199, 208, 0.7)';
    about.style.backgroundColor = 'rgba(193, 199, 208, 0.7)';
    head.style.backgroundColor = 'rgba(193, 199, 208, 0.7)';
    wwork.style.backgroundColor = 'rgba(193, 199, 208, 0.7)';
    wrapper.style.visibility = 'visible';
    wrapper.style.position = 'fixed';
    wrapper.style.overflow = 'scroll';
  });
});
const cancel = document.querySelector('.pop-header-div');
cancel.addEventListener('click', () => {
  document.querySelector('.pop-window').style.visibility = 'hidden';
  home.style.backgroundColor = '#fff';
  about.style.backgroundColor = '#fff';
  head.style.backgroundColor = '#fff';
  wwork.style.backgroundColor = '#E5E5E5';
  wrapper.style.position = 'hidden';
});
