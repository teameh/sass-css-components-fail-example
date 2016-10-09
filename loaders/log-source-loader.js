module.exports = function (source) {
  console.log('source for ' + this.resourcePath + ':');
  console.log(source);
  return source;
}
