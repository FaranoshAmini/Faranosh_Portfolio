const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const links = document.querySelector('.mainmenu');
  const home = document.querySelector('.home-page');
  const divWrap = document.createElement('div');
  const linksChilds = Array.from(links.children);
  body.style.overflow = 'hidden';
  const property = {
    color: '#fff',
    fontSize: '32px',
    fontFamily: 'Poppins sans-serif',
    fontWeight: '600px',
    lineHeight: '44px',
    textDecoration: 'none',
  };

  divWrap.style.backgroundColor = 'rgba(96, 112, 255,0.9)';
  img.src = 'Images/close.png';
  img.style.float = 'right';
  img.style.marginRight = '1rem';
  img.addEventListener('mouseover', () => {
    img.style.cursor = 'pointer';
  });
  links.style.display = 'block';
  links.style.clear = 'both';
  divWrap.style.zIndex = '999';
  divWrap.style.position = 'absolute';
  divWrap.style.top = '0';
  divWrap.style.height = '130vh';
  divWrap.style.width = '100%';
  div.style.marginTop = '20px';
  links.style.listStyle = 'none';
  img.addEventListener('click', () => {
    divWrap.style.display = 'none';
    body.style.overflow = 'auto';
  });

  div.appendChild(img);
  div.appendChild(links);
  divWrap.append(div);
  home.appendChild(divWrap);

  for (let i = 0; i < linksChilds.length; i += 1) {
    const eltChildren = linksChilds[i].children;
    eltChildren[0].addEventListener('click', () => {
      divWrap.style.display = 'none';
      body.style.overflow = 'auto';
    });
    linksChilds[i].style.marginBottom = '22px';
    for (let j = 0; j < Object.keys(property).length; j += 1) {
      eltChildren[0].style[Object.keys(property)[j]] = property[Object.keys(property)[j]];
    }
  }
});

function isLowerCase(input) {
  const str = input.value.trim();
  return str === str.toLowerCase();
}
function showMessage(form, invalidMsg) {
  const target = form.querySelector('span');
  target.innerText = invalidMsg;
}
function validateEmail(form, input, invalidMsg) {
  if (isLowerCase(input)) {
    return true;
  }
  showMessage(form, invalidMsg);
  return false;
}
const form = document.querySelector('form');
const msg = 'The form was not sent, the email text should be in lower case.';
form.addEventListener('submit', (event) => {
  const mail = form.elements.email;
  const emailValid = validateEmail(form, mail, msg);

  if (!emailValid) {
    event.preventDefault();
  }
});

const userName = form.elements.name;
const userEmail = form.elements.email;
const userMessage = form.elements.message;
function populateStorage() {
  const userInput = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
}

function setForm() {
  const storedInput = JSON.parse(localStorage.getItem('userInput'));
  const currentUserName = storedInput.name;
  const currentUserEmail = storedInput.email;
  const currentMessage = storedInput.message;
  form.elements.name.value = currentUserName;
  form.elements.email.value = currentUserEmail;
  form.elements.message.value = currentMessage;
}

if (!localStorage.getItem('userInput')) {
  populateStorage();
} else {
  setForm();
}
userName.onchange = populateStorage;
userEmail.onchange = populateStorage;
userMessage.onchange = populateStorage;
