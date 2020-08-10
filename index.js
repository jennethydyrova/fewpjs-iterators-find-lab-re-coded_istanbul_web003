const testVar = {};

function testFunc() {
  return "hi";
}
const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];

const superbowlWin = (arr) => {
  let win = arr.find((e) => e.result === "W");
  return win ? win.year : undefined;
};
console.log(superbowlWin(record));
