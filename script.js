const quotes = [
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        quote: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },
    {
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    }
];

function newQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent =
        `"${quotes[randomIndex].quote}"`;

    document.getElementById("author").textContent =
        `— ${quotes[randomIndex].author}`;
}

window.onload = newQuote;