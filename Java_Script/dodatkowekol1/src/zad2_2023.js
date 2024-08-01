const questions = require("./questions-chat-gpt.js").questionsChatGpt;

class QuestionService {
  constructor(id, question, anwser, timestamp, user) {
    this.id = id
    this.question = question
    this.answer = anwser
    this.timestamp = timestamp,
    this.user = user
  }

  getQuestionById() {}
}

questions.forEach(
  (obj) =>
    new QuestionService(
      obj.id,
      obj.question,
      obj.answer,
      obj.timestamp,
      obj.user
    )
);
