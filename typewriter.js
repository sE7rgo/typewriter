const sentence = "hello there from lighthouse labs";
let count = 0
for (const char of sentence) { 
  count++;
  setTimeout(() => {
    process.stdout.write(char);
  }, 500 * count);
};

setTimeout(() => {
  process.stdout.write('\n');
}, 500 * count);