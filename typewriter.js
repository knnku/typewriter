const sentence = "hello there from lighthouse labs";


let timer;
let count = 0;

function printCount(){
  process.stdout.write(sentence[count]);
  count++;


  //Stop interval when reaching sentence max length and print new line.
  if (count >= sentence.length) {
    console.log("\n");
    clearInterval(timer);
  }
}

timer = setInterval(printCount, 100);

