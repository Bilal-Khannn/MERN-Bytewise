let btn = document.querySelector("#new-qoute");
let qoute = document.querySelector(".qoute");
let person = document.querySelector(".person");

const qoutes = [
  {
    qoute: "First qoute",
    person: "Bilal",
  },
  {
    qoute: "Second qoute",
    person: "shoaib",
  },
  {
    qoute: "Third qoute",
    person: "hamza",
  },
  {
    qoute: "Fourth qoute",
    person: "ali",
  },
  {
    qoute: "Third qoute",
    person: "usman",
  },
  {
    qoute: "Second qoute",
    person: "haris",
  },
  {
    qoute: "First qoute",
    person: "Bilal",
  },
];

btn.addEventListener("click", (e) => {
  // get a random qoute from the array
  let randomQoute = Math.floor(Math.random() * qoutes.length);
  // grab a random qoute
  let q = qoutes[randomQoute];

  qoute.innerHTML = q.qoute;
  person.innerHTML = q.person;
});
