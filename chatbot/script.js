const bot = {
  questions: {
    "what is the weather like?": "sunny",
    "what will be the min temperature today?": "-2degC",
    "What is the max temperature?": "4degC",
    "what is the humidity level?": "30%",
    "what is the wind speed?": "5mph"
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

document.getElementById("chatbot").addEventListener("submit", myFunction);

function myFunction() {
  var question = document.getElementById("question").value;
  var ans = bot.checkAnswer(question);

  var x = document.createElement("div"); // Creates a new <div> node
  x.textContent = ans; // Sets the text content
  document.body.appendChild(x);

  event.preventDefault();
}
