const fs = require("fs");

// 1 -What floor does santa enter upon?
// (= Santa goes up 1
// )= Santa goes down 1

function question1() {
  console.time("question1");
  fs.readFile("./santa.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.log("no. of floors", answer);
  });
  console.timeEnd("question1");
}

question1();

// 2- when does santa first enter the basement i.e. (-1)

function question2() {
  console.time("question2");
  fs.readFile("./santa.txt", (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentValue) => {
      if (currentValue === "(") {
        accumulator += 1;
      } else if (currentValue === ")") {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });
    console.log("basement entered at : ", counter);
  });
  console.timeEnd("question2");
}

question2();
