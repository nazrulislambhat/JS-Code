//construction function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle('Rectangle1', 100, 200);

console.log(rect1);

console.log(rect1.constructor);
//once we use the new keyword

/*
1:new empty object is created
2:construction function is call with the arguments we passed in
3:the 'this' keyword is set to new empty object
4:the new object is returned from thew construction function
*/
