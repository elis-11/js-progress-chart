const listGoods = [
  {
    name: "Simone Pahl",
    cost: 748,
    rated: 7.2,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop1.jpg?raw=true'
    img: "img/jarritos-mexican-soda-DPbemOrlS6A-unsplash.jpg",
  },
  {
    name: "Jennyfer Hartmann",
    cost: 236,
    rated: 4.6,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop3.jpg?raw=true'
    img: "img/freestocks-yqBKaF1KecM-unsplash.jpg",
  },
  {
    name: "Cornelia Oladunmade",
    cost: 153,
    rated: 4.5,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop2.jpg?raw=true'
    img: "img/jerry-wang-nYyCWnGdzk8-unsplash.jpg",
  },
  {
    name: "Phillip Wagner",
    cost: 705,
    rated: 4.1,
    img: "img/j-balla-photography-oMzfu2sXkrE-unsplash.jpg",
  },
  {
    name: "Ida Müllenberg",
    cost: 362,
    rated: 8.4,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop8.jpg?raw=true'
    img: "img/hu-jiarui-6nz8asjBssw-unsplash.jpg",
  },
  {
    name: "Silke Fischer",
    cost: 383,
    rated: 3.8,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop6.jpg?raw=true'
    img: "img/katie-polansky-TsHSW89wjGU-unsplash.jpg",
  },
  {
    name: "Ricci Schmidt",
    cost: 1763,
    rated: 3.5,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop7.jpg?raw=true'
    img: "img/sami-jms--wey-hCgW6g-unsplash.jpg",
  },
  {
    name: "Sahra Weber",
    cost: 919,
    rated: 3.9,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop5.jpg?raw=true'
    img: "img/jarritos-mexican-soda-PPu_8q2zs2U-unsplash .jpg",
  },
  {
    name: "Jörg Müller",
    cost: 674,
    rated: 3.4,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop8.jpg?raw=true'
    img: "img/danilo-borges-rxKuz0NWoXk-unsplash.jpg",
  },
  {
    name: "Alex Wolf",
    cost: 327,
    rated: 8.6,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop8.jpg?raw=true'
    img: "img/danilo-borges-rxKuz0NWoXk-unsplash.jpg",
  },
  {
    name: "Ella Heller",
    cost: 835,
    rated: 3.1,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop8.jpg?raw=true'
    img: "img/danilo-borges-rxKuz0NWoXk-unsplash.jpg",
  },
  {
    name: "Elisa Göbel",
    cost: 926,
    rated: 7.4,
    // img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop8.jpg?raw=true'
    img: "img/danilo-borges-rxKuz0NWoXk-unsplash.jpg",
  },

];

const dropDownList = document.querySelector(".drop-down-list"),
  dropSownListOption = document.querySelectorAll(".drop-down-list__option"),
  showcaseGoods = document.querySelector(".showcase-goods");

const addGoods = () => {
  showcaseGoods.innerHTML = "";
  listGoods.forEach((el) => {
    showcaseGoods.innerHTML += `<div class="goods">
                <img src="${el.img}" alt="">
                <h3 class="goods-text">${el.name}</h3>
                <p class="goods-text">${el.cost} POINTS</p>
            </div>`;
  });

  noResults.classList.add("hide");
};

addGoods();
//drop down list
const dropDown = () => {
  const dropDownListOptions = document.querySelector(
      ".drop-down-list__options"
    ),
    arrowButton = document.querySelector(".arrow-button");
  dropDownListOptions.classList.toggle("hide");
  arrowButton.classList.toggle("arrow-bottom");
  arrowButton.classList.toggle("arrow-top");
};

//sorting goods
const sortGoods = (event) => {
  listGoods.sort((a, b) => {
    switch (event.target.innerHTML) {
      case "Price (high-low)":
        return b.cost - a.cost;
      case "Price (low-high)":
        return a.cost - b.cost;
      case "Top Rated":
        return b.rated - a.rated;
    }
  });

  addGoods();
};
dropDownList.addEventListener("click", dropDown);
dropSownListOption.forEach((el) => el.addEventListener("click", sortGoods));

//search
search.oninput = () => {
  const value = search.value.trim().toLowerCase(),
    headlineGoods = document.querySelectorAll(".goods h3");

  switch (value) {
    case "":
      headlineGoods.forEach((el) => {
        el.parentNode.classList.remove("hide");
      });
      break;
    default:
      headlineGoods.forEach((el) => {
        el.innerText.toLowerCase().search(value) == -1
          ? el.parentNode.classList.add("hide")
          : el.parentNode.classList.remove("hide");
      });
      break;
  }

  //check if search results are left
  const resultСheck = Array.from(document.querySelectorAll(".goods")).every(
    (el) => el.classList.contains("hide")
  );

  if (resultСheck) {
    if (noResults.classList.contains("hide")) {
      noResults.classList.remove("hide");
    }
  } else if (!noResults.classList.contains("hide")) {
    noResults.classList.add("hide");
  }
};
