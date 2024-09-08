// Zadanie 2.
// Stwórz konstruktor klasy QuestionService przyjmujący na wejściu tablicę fikcyjnych pytań i odpowiedzi
// do ChatGPT (questionsChatGpt), a następnie utwórz w klasie metody:
// 1. getQuestionById – przyjmujący w parametrze id i zwracający pytanie o danym id
// (w przypadku, kiedy pytanie nie zostanie znalezione, powinniśmy mieć zwrócony null)
// 2. createNewQuestion – przyjmujący w parametrze: pytanie (question) i id użytkownika
// tworzącego pytanie. Metoda powinna tworzyć obiekt pytania i nadawać mu id (id ostatniego
// pytania + 1), timestamp (aktualną datę), użytkownika (po danym id) oraz dodawać obiekt do
// listy pytań.
// a. Jeżeli nie podamy treści pytania, wyświetl komunikat „Operacja nie powiodła się”
// 3. updateAnswer – przyjmujący w parametrze id1 pytania i odpowiedź. Funkcja powinna wyszukać
// w liście pytanie o podanym id i zaktualizować pole answer wartością przekazaną w parametrze
// (pole answer może przyjmować również wartości takie jak pusty string czy null.


// 4. updateQuestion – przyjmującą w parametrze nowy obiekt pytania zawierający pola: id (po
// którym znajdziemy pytanie do aktualizacji), question i user). Funkcja wyszukuje po id1 pytanie
// z listy i aktualizuje jedynie pola: question, user i timestamp (na aktualną datę).
// a. Jeżeli nie podamy jakiegokolwiek z wymaganych pól (id, question i/lub user z id),
// wyświetl komunikat: „Operacja nie powiodła się”
// b. Uwaga: przekazany na wejściu obiekt user może być niepełny, ale musi posiadać id
// użytkownika! Jednak ostatecznie pod pole user w obiekcie zostaje dodany pełny obiekt
// (zawierający id, name, age, gender, location)


// 5. deleteQuestion – przyjmująca w parametrze id1 pytania i usuwająca dane pytanie z listy
// 6. getQuestionsByUser – zwracająca pytania (lista obiektów zawierająca id pytania i jego treść)
// autorstwa danego użytkownika (id użytkownika przekazujemy jako parametr)
// // Przykładowe działanie
// Podpowiedź: Aktualną datę możemy ustawić tworząc konstruktor: new Date()

const qAnda = require('./questions-chat-gpt.js').questionsChatGpt;
const usr_data = require('./users.js').users;
const _ = require('lodash');

class QuestionService {
    constructor(tab)
    {
        this.tab = tab
    }

    getQuestionById(id)
    {
        this.tab.reduce
        (
            (acc, element) => {if (element.id == id){acc = element.question} return acc}, null
        )
    }

    createNewQuestion(question, user_id){
        this.tab.push(
            {
                id: this.tab[this.tab.length - 1].id + 1,
                question: question,
                timestamp: new Date(),
                user: usr_data.reduce(
                    (acc, element) => {if (element.id == user_id){acc = element} return acc}, {}
                )
              }
        )
    }

    updateAnswer(q_id, anws){
        const index = this.tab.reduce(
            (acc, elem, index) => {if(elem.id == q_id){acc = index} return acc}, null
            )
        if (index != null){
        this.tab[index]
        .anwser = anws}
    }

    updateQuestion({id, question, user}){
        this.tab[
            this.tab.reduce((acc, elem, index) => {if(elem.id == id){acc = index} return acc}, null
            )
        ]
        .question = question;

        this.tab[
            this.tab.reduce((acc, elem, index) => {if(elem.id == id){acc = index} return acc}, null
            )
        ]
        .user = {
            id: user.id,
            name: user.name? user.name : null,
            age: user.age ? user.age: null,
            gender: user.gender ? user.gender : null,
            location: user.location ? user.location : null
        }

        
    }

    deleteQuestion(id){
        this.tab = this.tab.reduce((acc, element) => {if (element.id = id){return acc}
    else acc.push(element)}, [])
    }

    getQuestionsByUser(user_id){
        console.log(
            this.tab.reduce(
                (acc, element) => {if (element.user.id == user_id) {acc.push({id :
                    element.id, question :element.question})} return acc
                }, []
            )
        )
    }

}

const questionService = new QuestionService(qAnda)

questionService.updateAnswer(31, "Nowa odpowiedź na pytanie"); // Nie ma pytania o id 31
const newQuestion = {
id: 20,
question: "Jakie są sposoby na poprawę koncentracji i efektywności w pracy?",
user: {
id: 1
}
}
questionService.updateQuestion(newQuestion);
questionService.getQuestionById(31); // null
questionService.getQuestionsByUser(1);
// [
// { id: 1, question: 'Jakie są najnowsze trendy w modzie?' },
// { id: 19, question: 'Jakie są najlepsze sposoby na radzenie sobie z trudnymi emocjami?'
// }
// ]
