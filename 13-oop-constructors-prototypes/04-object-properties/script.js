function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}
const rect1 = new Rectangle('Rect1', 50, 50);

const rect2 = new Rectangle('Rect2', 150, 150);

console.log(rect1.area());
