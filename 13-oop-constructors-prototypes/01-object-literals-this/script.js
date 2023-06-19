const rectangle = {
  name: 'Rect 1',
  width: 10,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};
console.log(rectangle.area());
