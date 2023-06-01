const xhr = new XMLHttpRequest();

//xhr.open('GET', './github.json');

xhr.open('GET', 'https://api.github.com/users/nazrulislambhat/repos');

/* 
readtState has 5 possible states
0: request not initilized
1: server connection established
2: request recieved
3: processing request
4: request finished and response is ready
*/
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);
//     data.forEach((movie) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };

// xhr.send();


//fetching user info

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);
//     const dataArray = Object.entries(data);
//     dataArray.forEach(([key, value]) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${key}</strong> - ${value}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };

//fetching repos

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      
    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
