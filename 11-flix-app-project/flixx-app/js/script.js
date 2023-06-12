const global = {
  currentPage: window.location.pathname,
};
console.log(global);

function init() {
  switch (global.currentPage) {
    case '/':
      console.log('home');
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);
