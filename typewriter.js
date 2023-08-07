const sentence = "hello there from lighthouse labs\n";

let count = 0;

function printCharacter() {
  if (count < sentence.length) {
    process.stdout.write(sentence[count]);
    count++;
    setTimeout(printCharacter, 200); 
  }
}
printCharacter();
