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