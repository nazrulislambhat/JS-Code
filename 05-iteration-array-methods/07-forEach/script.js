//High order array methods
const socials = ['Instagram', 'Facebook', 'Youtube', 'Twitter'];

socials.forEach((social) => {
  console.log(social); //will run 4 times in this case becasue we have 4 items in the arrayb for each element it will run once
  console.log(social[0]); //will run everytime time for each element & will display 0th element of all 4 letters
  console.log(social[social.length - 1]); //will run everytime time for each element & will display last element of all 4 items in the array
});
