let myBook = {
    title: 'Erty Adentures',
    author: 'Hrerj',
    pageCount: 42069
}

let otherBook = {
    title: 'Hrooken realm',
    author: 'Hrerjymoo',
    pageCount: 777
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//challenge area
//Create function - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        f: fahrenheit,
        c: (fahrenheit -32) * 5 / 9,
        k: (fahrenheit + 459.67) * 5 / 9
    }
}

let returnTemps = convertFahrenheit(30)
console.log(`Fahrenheit: ${returnTemps.f}, Celsius: ${returnTemps.c}, Kelvin: ${returnTemps.k}`)