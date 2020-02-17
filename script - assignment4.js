//assignment 1

let numOfSides = 6;

const dice = {
  sides: numOfSides,

  rollDice: function() {
    let x = Math.ceil(Math.random() * numOfSides);
    console.log(x);
    document.write(x);
  }
};

const newDice = Object.create(dice);

newDice.sides = 12;
newDice.rollDice();

console.log(newDice.rollDice());
console.log(newDice);

//assignment 2
var request = new XMLHttpRequest();

request.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/weather?q=London&appid=035dccab676fd6969de8caafaade8400",
  true
);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  const bot = {
    questions: {
      "what is the weather like?": data.weather[0].description,
      "what will be the min temperature today?": data.main.temp_min,
      "What is the max temperature?": data.main.temp_max,
      "what is the humidity level?": data.main.humidity,
      "what is the wind speed?": data.wind.speed
    },

    //define patterns to search for in question string
    checkAnswer: function(question) {
      for (let q in this.questions) {
        if (q === question) return this.questions[q];
        if (/weather/g.test(question) == true)
          return this.questions["what is the weather like?"];
        if (/min/g.test(question) == true)
          return this.questions["what will be the min temperature today?"];
        if (/max/g.test(question) == true)
          return this.questions["What is the max temperature?"];
        if (/humidity/g.test(question) == true)
          return this.questions["what is the humidity level?"];
        if (/wind/g.test(question) == true)
          return this.questions["what is the wind speed?"];
      }
    }
  };
  var question = prompt("ask weather details");
  var ans = bot.checkAnswer(question);
  console.log(ans);
};

request.send();
