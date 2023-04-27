const post = {
  id: 1,
  title: 'website post one',
  body: 'this is the post body',
};
//convert to JSON
const str = JSON.stringify(post);
//Parse that JSON
const obj = JSON.parse(str);

console.log(str);
console.log(obj);
