const xhr = new XMLHttpRequest();

// need to set up the event listener first, before the event happens
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();