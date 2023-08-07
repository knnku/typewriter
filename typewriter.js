const sentence = "hello there from lighthouse labs";

let count = 0;

function printCharacter() {
  if (count < sentence.length) {
    process.stdout.write(sentence[count]);
    count++;
    setTimeout(printCharacter, 500); 
    if (count >= sentence.length) {
      process.stdout.write("\n")
    }
  }
}
printCharacter();
