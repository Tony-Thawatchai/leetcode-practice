/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let answerObj = {};
  for (let i = 0; i < text.length; i++) {
    answerObj[text[i]]
      ? (answerObj[text[i]] = answerObj[text[i]] + 1)
      : (answerObj[text[i]] = 1);
  }

  let counter = 0;

  if (
    !answerObj["b"] &&
    !answerObj["a"] &&
    !answerObj["l"] &&
    !answerObj["o"] &&
    !answerObj["n"]
  ) {
    return 0;
  } else {
    while (
      answerObj["b"] >= 1 &&
      answerObj["a"] >= 1 &&
      answerObj["l"] >= 2 &&
      answerObj["o"] >= 2 &&
      answerObj["n"] >= 1
    ) {
      answerObj["b"]--;
      answerObj["a"]--;
      answerObj["l"] -= 2;
      answerObj["o"] -= 2;
      answerObj["n"]--;

      counter++;
    }
  }

  return counter;
};
