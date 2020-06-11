const reviews = [
  {
    id: 1,
    name: "Sara Jhones",
    job: "UX DESIGNER",
    img:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatemillo, culpa optio dolores, provident autem veritatis facere error quamperspiciatis doloribus blanditiis sequi commodi neque adipisci fugiatminima suscipit corporis.",
  },
  {
    id: 2,
    name: "Kate Jhones",
    job: "UX DESIGNER",
    img:
      "https://images.unsplash.com/photo-1573496799436-5c34ef41818d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatemillo, culpa optio dolores, provident autem veritatis facere error quamperspiciatis doloribus blanditiis sequi commodi neque adipisci fugiatminima suscipit corporis.",
  },
  {
    id: 3,
    name: "John Smith",
    job: "UX DESIGNER",
    img:
      "https://images.unsplash.com/photo-1573496799436-5c34ef41818d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatemillo, culpa optio dolores, provident autem veritatis facere error quamperspiciatis doloribus blanditiis sequi commodi neque adipisci fugiatminima suscipit corporis.",
  },
  {
    id: 4,
    name: "Tom Jhones",
    job: "UX DESIGNER",
    img:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatemillo, culpa optio dolores, provident autem veritatis facere error quamperspiciatis doloribus blanditiis sequi commodi neque adipisci fugiatminima suscipit corporis.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".surprise");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(reviews.length * 4);
  showPerson(currentItem);
});
