const menu = [
  {
    id: 1,
    title: "Pancake - Simple",
    category: "lunch",
    price: 980,
    img: "./assets/pancake.jpg",
    description:
      "ふしぎもゴーシュの身動きおしまいどもが鳥になるひとりうた。それからとても普通ましでにおいて子でまし。だめましまし方たはんまた狩の気の毒汁のうちがはどうも大丈夫たまして、誰まで手を入っれんました。",
  },
  {
    id: 2,
    title: "Pancake - Simple",
    category: "breakfast",
    price: 980,
    img: "./assets/pancake.jpg",
    description:
      "ふしぎもゴーシュの身動きおしまいどもが鳥になるひとりうた。それからとても普通ましでにおいて子でまし。だめましまし方たはんまた狩の気の毒汁のうちがはどうも大丈夫たまして、誰まで手を入っれんました。",
  },
  {
    id: 3,
    title: "Pancake - Simple",
    category: "dinner",
    price: 980,
    img: "./assets/pancake.jpg",
    description:
      "ふしぎもゴーシュの身動きおしまいどもが鳥になるひとりうた。それからとても普通ましでにおいて子でまし。だめましまし方たはんまた狩の気の毒汁のうちがはどうも大丈夫たまして、誰まで手を入っれんました。",
  },
  {
    id: 4,
    title: "Pancake - Simple",
    category: "lunch",
    price: 980,
    img: "./assets/pancake.jpg",
    description:
      "ふしぎもゴーシュの身動きおしまいどもが鳥になるひとりうた。それからとても普通ましでにおいて子でまし。だめましまし方たはんまた狩の気の毒汁のうちがはどうも大丈夫たまして、誰まで手を入っれんました。",
  },
  {
    id: 5,
    title: "Pancake - Simple",
    category: "TeaTime",
    price: 980,
    img: "./assets/pancake.jpg",
    description:
      "ふしぎもゴーシュの身動きおしまいどもが鳥になるひとりうた。それからとても普通ましでにおいて子でまし。だめましまし方たはんまた狩の気の毒汁のうちがはどうも大丈夫たまして、誰まで手を入っれんました。",
  },
];

const sectionCenter = document.querySelector(".section-center");
const containerBtn = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    //console.log(item);
    return `
        <article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <div class="price">${item.price}円</div>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </article>
      `;
  });
  displayMenu = displayMenu.join("");
  //console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtn = categories
    .map((category) => {
      return `
        <button class="filter-btn" type="button" data-id=${category}>
            ${category}
        </button>
      `;
    })
    .join("");
  containerBtn.innerHTML = categoryBtn;
  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
