const clog = (str = '') => {
  console.log(str);
};

const ctime = () => {
  console.time();
};

const cend = () => {
  console.timeEnd();
};

const ctable = () => {
  console.table();
};

module.exports.default = module.exports = {
  clog,
  ctime,
  cend,
  ctable
}