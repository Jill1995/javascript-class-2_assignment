const findMatch = function(string, pattern, changeWith, changeText) {
  if (pattern.test(string) == true) {
    console.log(changeText(string, pattern, changeWith));
  } else {
    console.log("no match found");
  }
};

function changeText(string, sampleText, word) {
  return string.replace(sampleText, word);
}

const p =
  "As Michael Harvey writes, paragraphs are “in essence—a form of punctuation, and like other forms of punctuation they are meant to make written material easy to read.”[1] Effective paragraphs are the fundamental units of academic writing; consequently, the thoughtful, multifaceted arguments that your professors expect depend on them. Without good paragraphs, you simply cannot clearly convey sequential points and their relationships to one another. ";

const regex = /para/gi;
let newtext = " *** ";

findMatch(p, regex, newtext, changeText);
