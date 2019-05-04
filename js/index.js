// Your code goes here
const logo = document.querySelector('.logo-heading');
console.log(logo);
logo.addEventListener('click', (event) => {
  logo.style.color = 'red';
  logo.style.fontSize = '60px';
  });

  //On click buttons change
  const btn = document.querySelectorAll('.btn');
    console.log(btn);
  btn.forEach((button) => {
    button.addEventListener('click', (event) => {
    button.style.backgroundColor = 'yellow';
    button.style.color = 'black';
    alert('Thank you for choosing FunBus!');
    });
  });

  //nav links
  const navLink = document.querySelectorAll('.nav-link');
  console.log(navLink);
  navLink.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
    link.style.color = 'yellow';
    });
    link.addEventListener('mouseout', (event) => {
      link.style.color = 'black';
    });
  });

