let cards = document.querySelectorAll(".card");
let my_array_cards = [...cards];
let p = document.createElement("p");
let div = document.createElement("div");
div.classList.add("card", "field-none");
div.appendChild(p);
const clearField = div;

//random generator to fields values TODO: add other values on letter game
function random_gen() {
  const random_card = Math.floor(Math.random() * 100);
  if (random_card <= 30 && random_card >= 0) return "none";
  if (random_card <= 50 && random_card > 30) return 2;
  if (random_card <= 70 && random_card > 50) return 4;
  if (random_card <= 90 && random_card > 70) return 8;
  if (random_card <= 95 && random_card > 90) return 16;
  if (random_card <= 98 && random_card > 95) return 32;
  if (random_card <= 100 && random_card > 98) return 64;
}

//add value and classes (generate map)
my_array_cards.forEach((e, i) => {
  const x = random_gen();
  x == "none"
    ? editCart(e, `field-${x}`, `<p></p>`)
    : editCart(e, `field-${x}`, `<p>${x}</p>`);
});

//func add parameters to element
function editCart(e, a, b) {
  e.className = "";
  e.classList.add("card", a);
  e.innerHTML = b;
}
//-----------------------------------------------------//
//--------Script for show new element on click---------//
//-----------------------------------------------------//

//add Cartesian product (map)
let map = my_array_cards.length;
let numOfRows = Math.floor(Math.sqrt(map));
let mapCords = [];

for (let i = 0; i < numOfRows; i++) {
  let a = [];
  for (let x = i * numOfRows; x < i * numOfRows + numOfRows; x++) {
    a.push(my_array_cards[x]);
  }
  mapCords.push(a);
}

let btns = [...document.querySelectorAll(".controlBtn")];
btns.map((e, i) => {
  e.addEventListener("click", () => {
    adding(e.getAttribute("id"));
    sort(e.getAttribute("id"));
  });
});

//petla filtrujaca puste pula
function sort(vector) {
  let filterArr = [];
  for (let y = 0; y < numOfRows; y++) {
    let arr = [];
    for (let x = 0; x < numOfRows; x++) {
      arr.push(mapCords[y][x]);
    }
    //filtrowanie z 5 elementów
    let arrFiltered = arr.filter((e) => {
      return e.classList[1] !== "field-none";
    });

    //ta petla słuzy do dodanie argumentów po filter
    for (let i = 0; i < numOfRows; i++) {
      arrFiltered[i]
        ? filterArr.push(arrFiltered[i])
        : filterArr.push(clearField);
    }
  }
  my_array_cards.map((e, i) => {
    editCart(e, filterArr[i].classList[1], filterArr[i].innerText);
  });
}

function adding(vector) {
  if (vector == "left") {
    for (let x = 0; x < numOfRows; x++) {
      for (let i = 0; i < numOfRows; i++) {
        if (
          mapCords[x][i].innerText == mapCords[x][i + 1]?.innerText &&
          mapCords[x][i].innerText !== ""
        ) {
          editCart(
            mapCords[x][i],
            `field-${Number(mapCords[x][i].innerText) * 2}`,
            `<p>${Number(mapCords[x][i].innerText) * 2}</p>`
          );
          editCart(mapCords[x][i + 1], `field-none`, `<p></p>`);
        }
      }
    }
    // setMapCords();
  }
}
