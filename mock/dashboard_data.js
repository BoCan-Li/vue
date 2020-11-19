function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [100, 40, 60, 78, 90, 80];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
