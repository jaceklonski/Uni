const questions = require("./questions-chat-gpt.js").questionsChatGpt;

function funkcja(arr) {
  const que = arr.sort((a, b) => {
    if (a.user.name > b.user.name) return 1;
    if (a.user.name < b.user.name) return -1;
  });

  const lista = que.reduce((acc, curr) => {
    const { user, question } = curr;

    if (!acc[user.name]) {
      acc[user.name] = {};
      acc[user.name].questions = [];
      acc[user.name].count = 0;
    }

    acc[user.name].questions.push(question);
    acc[user.name].count++;
    return acc;
  }, {});

  return lista;
}

console.log(funkcja(questions));
