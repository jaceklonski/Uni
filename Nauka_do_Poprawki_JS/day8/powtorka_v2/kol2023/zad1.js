// Zadanie 1.
// Napisz funkcję przyjmującą w parametrze tablicę pytań i odpowiedzi (obiekt questionsChatGpt), która
// policzy, ile pytań zostało zadanych przez każdego użytkownika i wypisze zadane pytania (jako tablicę).
// Wynikiem powinien być obiekt z kluczami będącymi nazwami użytkowników i wartościami – obiekt z
// kluczem count odpowiadający ilości zadanych przez nich pytań oraz questions zawierający zadane
// pytania. Wszystkie nazwy użytkowników powinny być zapisane z małych liter, a wynik powinien być
// posortowany alfabetycznie po nazwach użytkowników.
// Wywołaj funkcję bez przypisywania jej do nowej zmiennej!
// // Output
// {
// adam: {
// count: 2,
// questions: [
// 'Jakie są najlepsze sposoby na oszczędzanie pieniędzy?',
// 'Czy warto uczyć się programowania w 2023 roku?'
// ]
// },
// aleksandra: {
// count: 1,
// questions: [
// 'Jakie są najlepsze sposoby na poprawę skupienia i koncentracji?'
// ]
// },
// anna: {
// count: 2,
// questions: [...]
// },
// bartosz: { count: 1, questions: [...] },
// karolina: { count: 1, questions: [...] },
// kasia: { count: 1, questions: [...] },
// magda: { count: 3, questions: [...] },
// marcin: { count: 4, questions: [...] },
// monika: { count: 1, questions: [...] },
// piotr: { count: 2, questions: [...] },
// tomasz: { count: 2, questions: [...] }
// }
// Podpowiedź: aby zapisać słowo z małych liter, należy użyć funkcji wbudowanej klasy String
// toLowerCase()

const pytania = require("./questions-chat-gpt(1)").questionsChatGpt

function byUser(tab){
    const obj = 
        tab.sort(
            (a,b) => {
                if (a.user.name > b.user.name) return 1
                if (a.user.name < b.user.name) return -1
                else return 0
            }
        )
        .reduce(
            (acc, elem) => {
                const {user : user, question: question, ...rest} = elem

                if(!acc[user.name]) acc[user.name] = {count : 0, questions : []}

                acc[user.name].count++
                acc[user.name].questions.push(question)
                return acc
            }
            ,{}
        )
    console.log(obj)
}

byUser(pytania)

// Stwórz konstruktor klasy QuestionService przyjmujący na wejściu tablicę fikcyjnych pytań i odpowiedzi
// do ChatGPT (questionsChatGpt), a następnie utwórz w klasie metody:



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
const users = require('./users(1).js').users;

class QuestionService {
    constructor(tab){
        this.tab = tab
    }

    // 1. getQuestionById – przyjmujący w parametrze id i zwracający pytanie o danym id
    // (w przypadku, kiedy pytanie nie zostanie znalezione, powinniśmy mieć zwrócony null)

    getQuestionById(id){
        console.log(
            this.tab.reduce((a,b) => {if(b.id == id) return b
                return a
            }, null)
        )
    }

    // 2. createNewQuestion – przyjmujący w parametrze: pytanie (question) i id użytkownika
    // tworzącego pytanie. Metoda powinna tworzyć obiekt pytania i nadawać mu id (id ostatniego
    // pytania + 1), timestamp (aktualną datę), użytkownika (po danym id) oraz dodawać obiekt do
    // listy pytań.
    // a. Jeżeli nie podamy treści pytania, wyświetl komunikat „Operacja nie powiodła się”

    createNewQuestion(question, user_id){
        const id = this.tab[this.tab.length - 1].id + 1
        this.tab.push({
            id: id,
            question: question,
            timestamp: new Date(),
            user: users.reduce((a,b) => {if (b.id === user_id) return b
                else return a
            }, {})
        })
    }

    // 3. updateAnswer – przyjmujący w parametrze id1 pytania i odpowiedź. Funkcja powinna wyszukać
    // w liście pytanie o podanym id i zaktualizować pole answer wartością przekazaną w parametrze
    // (pole answer może przyjmować również wartości takie jak pusty string czy null.

    updateAnswer(id, anws){
        this.tab = this.tab.reduce(
            (a,b) => {
                if(b.id == id){b.anwser = anws}
                a.push(b)
                return a
            }, []
        )
    }

    // 4. updateQuestion – przyjmującą w parametrze nowy obiekt pytania zawierający pola: id (po
    // którym znajdziemy pytanie do aktualizacji), question i user). Funkcja wyszukuje po id1 pytanie
    // z listy i aktualizuje jedynie pola: question, user i timestamp (na aktualną datę).
    // a. Jeżeli nie podamy jakiegokolwiek z wymaganych pól (id, question i/lub user z id),
    // wyświetl komunikat: „Operacja nie powiodła się”
    // b. Uwaga: przekazany na wejściu obiekt user może być niepełny, ale musi posiadać id
    // użytkownika! Jednak ostatecznie pod pole user w obiekcie zostaje dodany pełny obiekt
    // (zawierający id, name, age, gender, location)

    updateQuestion({id, question, user}){
        this.tab = this.tab.reduce(
            (a,b) => {
                if(b.id == id){
                    a.push({
                        id: id,
                        question: question,
                        timestamp: new Date(),
                        user: {
                            id: user.id,
                            name: user.name ? user.name : null,
                            age: user.age ? user.age : null,
                            gender: user.gender ? user.gender : null,
                            location: user.location ? user.location : null
                        }
                    })
                    return a
                }
                else {a.push(b)
                return a}
            }, []
        )
    }

    // 5. deleteQuestion – przyjmująca w parametrze id1 pytania i usuwająca dane pytanie z listy

    deleteQuestion(id){this.tab = this.tab.reduce((a,b) => {if(b.id == id){return a}
        a.push(b)
        return a
    }, [])}

    // 6. getQuestionsByUser – zwracająca pytania (lista obiektów zawierająca id pytania i jego treść)
    // autorstwa danego użytkownika (id użytkownika przekazujemy jako parametr)

    getQuestionsByUser(id){console.log(
        this.tab.reduce((a,b) => {if(b.user.id === id){ 
            const {id: id, question: question} = b
            a.push({id: id, question: question})}
            return a
        }, [])
    )}
}


questionService = new QuestionService(pytania)

// // Przykładowe działanie
questionService.updateAnswer(31, "Nowa odpowiedź na pytanie");
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
// // [
// // { id: 1, question: 'Jakie są najnowsze trendy w modzie?' },
// // { id: 19, question: 'Jakie są najlepsze sposoby na radzenie sobie z trudnymi emocjami?'
// // }
// // ]
// Podpowiedź: Aktualną datę możemy ustawić tworząc konstruktor: new Date()