const qAnda = require('./questions-chat-gpt.js').questionsChatGpt;
const _ = require('lodash');

// Napisz funkcję przyjmującą w parametrze tablicę pytań i odpowiedzi (obiekt questionsChatGpt), która
// policzy, ile pytań zostało zadanych przez każdego użytkownika i wypisze zadane pytania (jako tablicę).
// Wynikiem powinien być obiekt z kluczami będącymi nazwami użytkowników i wartościami – obiekt z
// kluczem count odpowiadający ilości zadanych przez nich pytań oraz questions zawierający zadane
// pytania. Wszystkie nazwy użytkowników powinny być zapisane z małych liter, a wynik powinien być
// posortowany alfabetycznie po nazwach użytkowników.
// Wywołaj funkcję bez przypisywania jej do nowej zmiennej!

function funk(tablica){
    const pytania = tablica.reduce((acc, element) => {
        const{user: {name}, question: question, ...rest } = element
        if (typeof name === 'undefined') {name = 'undefined'}

        const lower_name = name.toLowerCase()
        if (!acc[lower_name.toLowerCase()]) {acc[lower_name] = {count: 0,
            questions: []
        }}
        
        acc[lower_name].count++
        acc[lower_name].questions.push(question)
        return acc


    },{})

    console.log(pytania)
}

funk(qAnda)


// {
//     adam: {
//     count: 2,
//     questions: [
//     'Jakie są najlepsze sposoby na oszczędzanie pieniędzy?',
//     'Czy warto uczyć się programowania w 2023 roku?'
//     ]
//     },
//     aleksandra: {
//     count: 1,
//     questions: [
//     'Jakie są najlepsze sposoby na poprawę skupienia i koncentracji?'
//     ]
//     },
//     anna: {
//     count: 2,
//     questions: [...]
//     },
//     bartosz: { count: 1, questions: [...] },
//     karolina: { count: 1, questions: [...] },
//     kasia: { count: 1, questions: [...] },
//     magda: { count: 3, questions: [...] },
//     marcin: { count: 4, questions: [...] },
//     monika: { count: 1, questions: [...] },
//     piotr: { count: 2, questions: [...] },
//     tomasz: { count: 2, questions: [...] }
//     }