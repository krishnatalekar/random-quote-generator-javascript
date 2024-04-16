const container = document.querySelector(".container");
const quoteBtn = document.querySelector(".generate-btn");

quoteBtn.addEventListener("click", () => {
    generateRandomQuote();
});

const author = document.createElement("h2");
const quote = document.createElement("p");

async function generateRandomQuote() {
    const output = await fetch("https://api.quotable.io/random");
    const result = await output.json();

    quote.textContent = `"${result.content}"`;
    author.textContent = `- ${result.author}`;

    container.append(quote);
    container.append(author);
}