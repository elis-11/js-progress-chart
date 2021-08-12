let listMembers = [

  {
    name: 'Simone Pahl',
    skils: {
      html: 95,
      css: 83,
      js: 78,
      react: 105,
    },
    rated: 7.2,
    img: 'img/jarritos-mexican-soda-DPbemOrlS6A-unsplash.jpg',
  },
  {
    name: 'Jennyfer Hartmann',
    skils: {
      html: 105,
      css: 131,
      js: 98,
      react: 122,
    },
    rated: 4.6,

    img: 'img/freestocks-yqBKaF1KecM-unsplash.jpg',
  },
  {
    name: 'Cornelia Oladunmade',
    rated: 4.5,
    skils: {
      html: 118,
      css: 76,
      js: 128,
      react: 97,
    },
    img: 'img/soheb-zaidi-ubD8ZGvJLVg-unsplash.jpg',
  },
  {
    name: 'Phillip Wagner',
    rated: 4.1,
    skils: {
      html: 117,
      css: 61,
      js: 74,
      react: 128,
    },
    img: 'img/j-balla-photography-oMzfu2sXkrE-unsplash.jpg',
  },
  {
    name: 'Ida Busse',
    rated: 8.4,
    skils: {
      html: 82,
      css: 115,
      js: 73,
      react: 89,
    },
    img: 'img/hu-jiarui-6nz8asjBssw-unsplash.jpg',
  },
  {
    name: 'Silke Fischer',
    rated: 3.8,
    skils: {
      html: 97,
      css: 113,
      js: 94,
      react: 127,
    },
    img: 'img/katie-polansky-TsHSW89wjGU-unsplash.jpg',
  },
  {
    name: 'Ricci Schmidt',
    rated: 3.5,
    skils: {
      html: 137,
      css: 78,
      js: 112,
      react: 136,
    },
    img: 'img/sami-jms--wey-hCgW6g-unsplash.jpg',
  },
  {
    name: 'Sahra Weber',
    rated: 3.9,
    skils: {
      html: 124,
      css: 92,
      js: 83,
      react: 119,
    },
    img: 'img/jarritos-mexican-soda-3c5v9BGnMe8-unsplash.jpg',
  },
  {
    name: 'Ella Göbel',
    rated: 7.4,
    skils: {
      html: 76,
      css: 83,
      js: 78,
      react: 92,
    },
    img: 'img/jerry-wang-nYyCWnGdzk8-unsplash.jpg',
  },
  {
    name: 'Jörg Müller',
    rated: 3.4,
    skils: {
      html: 89,
      css: 116,
      js: 79,
      react: 68,
    },
    img: 'img/danilo-borges-rxKuz0NWoXk-unsplash.jpg',
  },
  {
    name: 'Gerda Heller',
    rated: 3.1,
    skils: {
      html: 95,
      css: 83,
      js: 78,
      react: 52,
    },
    img: 'img/xps-dpbXgTh0Lac-unsplash.jpg',
  },
  {
    name: 'Alex Wolf',
    rated: 8.6,
    skils: {
      html: 121,
      css: 78,
      js: 96,
      react: 84,
    },
    img: 'img/rafael-hoyos-weht--_1U2XG7tEY-unsplash.jpg',
  },
];

listMembers = listMembers.map((obj) => {
  obj.skilsTotal = obj.skils.html + obj.skils.css + obj.skils.js + obj.skils.react;
  return obj;
});
// console.log(listMembers);
const dropDownList = document.querySelector('.drop-down-list'),
  dropSownListOption = document.querySelectorAll('.drop-down-list__option'),
  showcaseGoods = document.querySelector('.showcase-goods');

const addMembers = () => {
  showcaseGoods.innerHTML = '';
  listMembers.forEach((el) => {
    showcaseGoods.innerHTML += `<div class="goods">
                <img src="${el.img}" alt="">
                <h3 class="goods-text">${el.name}</h3>
                <div>HTML: ${el.skils ? el.skils.html : ' '}</div>
                <div>CSS: ${el.skils ? el.skils.css : ' '}</div>
                <div>JS: ${el.skils ? el.skils.js : ' '}</div>
                <div>REACT: ${el.skils ? el.skils.react : ' '}</div>
                <p class="goods-text">${
                  el.skils.html + el.skils.css + el.skils.js + el.skils.react
                } POINTS</p>
            </div>`;
  });

  noResults.classList.add('hide');
};

addMembers();
//drop down list
const dropDown = () => {
  const dropDownListOptions = document.querySelector('.drop-down-list__options'),
    arrowButton = document.querySelector('.arrow-button');
  dropDownListOptions.classList.toggle('hide');
  arrowButton.classList.toggle('arrow-bottom');
  arrowButton.classList.toggle('arrow-top');
};

//sorting goods
const sortMembers = (event) => {
  listMembers.sort((a, b) => {
    switch (event.target.innerHTML) {
      case 'Points (high-low)':
        return b.skilsTotal - a.skilsTotal;
      case 'Points (low-high)':
        return a.skilsTotal - b.skilsTotal;
      case 'Top Rated':
        return b.rated - a.rated;
    }
  });

  addMembers();
};
dropDownList.addEventListener('click', dropDown);
dropSownListOption.forEach((el) => el.addEventListener('click', sortMembers));

//search
search.oninput = () => {
  const value = search.value.trim().toLowerCase(),
    headlineGoods = document.querySelectorAll('.goods h3');

  switch (value) {
    case '':
      headlineGoods.forEach((el) => {
        el.parentNode.classList.remove('hide');
      });
      break;
    default:
      headlineGoods.forEach((el) => {
        el.innerText.toLowerCase().search(value) == -1
          ? el.parentNode.classList.add('hide')
          : el.parentNode.classList.remove('hide');
      });
      break;
  }

  //check if search results are left
  const resultСheck = Array.from(document.querySelectorAll('.goods')).every((el) =>
    el.classList.contains('hide'),
  );

  if (resultСheck) {
    if (noResults.classList.contains('hide')) {
      noResults.classList.remove('hide');
    }
  } else if (!noResults.classList.contains('hide')) {
    noResults.classList.add('hide');
  }
};
