const quotes = [
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
  {
    quote: "떨어지는 빗물을 파도로 바꿔 올라타라",
    author: "riot노래 ",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //floor 숫자 내려주는 역활 1.7676 는 1.0으로 1.1도  1.0으로

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
