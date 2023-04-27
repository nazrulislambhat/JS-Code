const library = [
  {
    title: 'Subtle Art of not giving a F',
    author: 'Mark',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Walking Flame',
    author: 'Natasha',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[1].status.read = true;

// console.log(library);

const { title: firstBook } = library[0];
// console.log(firstBook);

const libraryJson = JSON.stringify(library);
console.log(libraryJson);
