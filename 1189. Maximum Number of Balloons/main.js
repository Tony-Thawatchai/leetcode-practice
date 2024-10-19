/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  //   let answerObj = {};
  //   for (let i = 0; i < text.length; i++) {
  //     answerObj[text[i]]
  //       ? (answerObj[text[i]] = answerObj[text[i]] + 1)
  //       : (answerObj[text[i]] = 1);
  //   }

  //   let counter = 0;

  //   if (
  //     !answerObj["b"] ||
  //     !answerObj["a"] ||
  //     !answerObj["l"] ||
  //     !answerObj["o"] ||
  //     !answerObj["n"]
  //   ) {
  //     return 0;
  //   } else {
  //     while (
  //       answerObj["b"] >= 1 &&
  //       answerObj["a"] >= 1 &&
  //       answerObj["l"] >= 2 &&
  //       answerObj["o"] >= 2 &&
  //       answerObj["n"] >= 1
  //     ) {
  //       answerObj["b"]--;
  //       answerObj["a"]--;
  //       answerObj["l"] -= 2;
  //       answerObj["o"] -= 2;
  //       answerObj["n"]--;

  //       counter++;
  //     }
  //   }

  //   return counter;

  //   ==========================================

  //   let answerObj = {};
  //   for (let i = 0; i < text.length; i++) {
  //     answerObj[text[i]]
  //       ? (answerObj[text[i]] = answerObj[text[i]] + 1)
  //       : (answerObj[text[i]] = 1);
  //   }


  //   if (
  //     !answerObj["b"] ||
  //     !answerObj["a"] ||
  //     !answerObj["l"] ||
  //     !answerObj["o"] ||
  //     !answerObj["n"]
  //   ) {
  //     return 0;
  //   } else {
  //     return Math.min(
  //       answerObj["b"],
  //       answerObj["a"],
  //       Math.floor(answerObj["l"] / 2),
  //       Math.floor(answerObj["o"] / 2),
  //       answerObj["n"]
  //     );
  //   }

  //   ==========================================
  let answerObj = {};
  for (let i = 0; i < text.length; i++) {
      if (
          text[i] == "b" ||
          text[i] == "a" ||
          text[i] == "l" ||
          text[i] == "o" ||
          text[i] == "n"
      ) {
          answerObj[text[i]]
              ? (answerObj[text[i]] = answerObj[text[i]] + 1)
              : (answerObj[text[i]] = 1);
      }
  }

  if (
      !answerObj["b"] ||
      !answerObj["a"] ||
      !answerObj["l"] ||
      !answerObj["o"] ||
      !answerObj["n"]
  ) {
      return 0;
  } else {
      return Math.min(
          answerObj["b"],
          answerObj["a"],
          Math.floor(answerObj["l"] / 2),
          Math.floor(answerObj["o"] / 2),
          answerObj["n"]
      );
  }
};
