//fetching a JSON file
fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));


//fetching a txt file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

//fetching from an API
