const inputTimes = process.argv.slice(2).map(el => Number(el));

const sorter = (a, b) => {
  return a - b;
}; // to sort the given time.
const timer = function(inputTimes) {
  const times = inputTimes.sort(sorter);
  
  for (let time of times) {
    if (isNaN(time) || time < 0) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');// ('\x07') beep works in my Mac Terminal, not in VSCODE.
      }, time * 1000);
    }
  }
};

timer(inputTimes);