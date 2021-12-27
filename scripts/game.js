window.mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

import Popup from "../scripts/popUp.js";

//add event to edit theme
document.querySelector("#theme").addEventListener("change", (event) => {
  event.target.value == "temp0" && changeColors(temp0);
  event.target.value == "temp1" && changeColors(temp1);
  event.target.value == "temp2" && changeColors(temp2);
  event.target.value == "temp3" && changeColors(temp3);
  event.target.value == "temp4" && changeColors(temp4);
  localStorage.setItem("theme", event.target.value);
});
//change css variables
function changeColors(a) {
  for (const key in a) {
    document.documentElement.style.setProperty(`--${key}`, `${a[key]}`);
  }
  //
}
//add last theme

if (localStorage.getItem("theme")) {
  localStorage.getItem("theme") == "temp0" && changeColors(temp0);
  localStorage.getItem("theme") == "temp1" && changeColors(temp1);
  localStorage.getItem("theme") == "temp2" && changeColors(temp2);
  localStorage.getItem("theme") == "temp3" && changeColors(temp3);
  localStorage.getItem("theme") == "temp4" && changeColors(temp4);
}

// document.documentElement.style.setProperty("--my-variable-name", "pink");

const mobileStatus = window.mobileAndTabletCheck();
document.querySelector("#music").addEventListener("click", (e) => {
  let myAudio = document.querySelector("#playAudio");

  if (myAudio.duration > 0 && !myAudio.paused) {
    document.querySelector("#playAudio").pause();
  } else {
    document.querySelector("#playAudio").play();
  }
});

let cards = document.querySelectorAll(".card");
let my_array_cards = [...cards];
let fG1, fG2;
let map = my_array_cards.length;
let numOfRows = Math.floor(Math.sqrt(map));
let mapCords = [];
let win = localStorage.getItem("win");

//save progress in COOKIES
function saveProgress() {
  const mapSatus = [...document.querySelectorAll(".card")];
  const obj = mapSatus.map((e) => {
    return { class: e.classList[1], value: e.innerText };
  });
  const json = JSON.stringify(obj);
  localStorage.setItem("map", json);
}

let div = document.createElement("div");
div.classList.add("card", "field-none");

const clearField = div.cloneNode(true);

//random generator to fields values
const randomGen = () => {
  const random_card = Math.floor(Math.random() * 100);
  if (random_card < 90 && random_card >= 0) return 2;
  if (random_card <= 100 && random_card >= 90) return 4;
};
//generate first 2 fields
(function firstGen() {
  fG1 = Math.floor(Math.random() * (numOfRows * numOfRows));
  fG2 = Math.floor(Math.random() * (numOfRows * numOfRows));
  fG1 == fG2 && firstGen();
})();

//add value and classes (generate map)

//reset progres
document.querySelector("#reset").addEventListener("click", () => {
  localStorage.removeItem("map");
  localStorage.removeItem("win");
  window.location.reload(true);
});
//add events on btns on end game
document
  .querySelector("#notification > div:nth-child(4) > button:nth-child(2)")
  .addEventListener("click", () => {
    localStorage.removeItem("map");
    window.location.reload(true);
  });
document
  .querySelector("#notification > div:nth-child(4) > button:nth-child(1)")
  .addEventListener("click", () => {
    document.querySelector("#notification").classList.add("displayNone");
    document.body.style.backgroundImage = "url('')";
  });

//add first 2 fields and save progress of game
!localStorage.getItem("map")
  ? my_array_cards.forEach((e, i) => {
      counter();
      const x = randomGen();
      fG1 == i || fG2 == i
        ? editCart(e, `field-${x}`, `${x}`)
        : editCart(e, `field-none`, ``);
    })
  : my_array_cards.forEach((e, i) => {
      const saveMap = JSON.parse(localStorage.getItem("map"));
      editCart(e, `${saveMap[i].class}`, `${saveMap[i].value}`);
      counter();
    });

//add 1 field after click
function nextAdd() {
  let a = my_array_cards.filter((e) => {
    return e.classList[1] == "field-none";
  });
  const x = randomGen();
  if (a.length) {
    editCart(a[Math.floor(Math.random() * a.length)], `field-${x}`, `${x}`);
  } else {
    adding("left", true) ||
    adding("right", true) ||
    adding("top", true) ||
    adding("bottom", true)
      ? undefined
      : notification();
  }
  //search for 2048 field
  let o = my_array_cards.filter((e) => {
    return e.classList[1] == "field-2048";
  });
  if (o.length) {
    //if for once add
    if (!win) {
      notification(true);
      localStorage.setItem("win", true);
      document.body.style.backgroundImage = "url('./media/confetti.gif')";
      win = localStorage.getItem("win");
    }
  }
}

//func add parameters to element
function editCart(e, a, b) {
  e.className = "";
  e.classList.add("card", a);
  e.innerText = b;
}

//add Cartesian product (map)

for (let i = 0; i < numOfRows; i++) {
  let a = [];
  for (let x = i * numOfRows; x < i * numOfRows + numOfRows; x++) {
    a.push(my_array_cards[x]);
  }
  mapCords.push(a);
}

//add keyboard control
document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == "38") {
    list("top");
  } else if (e.keyCode == "40") {
    list("bottom");
  } else if (e.keyCode == "37") {
    list("left");
  } else if (e.keyCode == "39") {
    list("right");
  }
}
function list(a) {
  sort(a);
  adding(a);
  sort(a);
  counter();
  nextAdd();
  counter();
  saveProgress();
}

//add small notification window
function notification(state) {
  let div = document.querySelector("#notification");
  let i = document.querySelector("#notification > div > p > i");
  i.textContent = document.querySelector(".counter").textContent;
  div.className = "notification";
  if (state) {
    div.children[0].textContent = "❤🥇 YOU WIN 🥇❤";
    div.children[3].children[0].textContent = "Graj Dalej";
  }
}

//add click events
let btns = [...document.querySelectorAll(".controlBtn")];
!mobileStatus
  ? btns.map((e, i) => {
      e.addEventListener("click", () => {
        list(e.getAttribute("id"));
      });
    })
  : btns.forEach((e) => e.remove());

//filter clear fields
function sort(vector) {
  if (vector == "left") {
    let filterArr = [];
    for (let y = 0; y < numOfRows; y++) {
      let arr = [];
      for (let x = 0; x < numOfRows; x++) {
        arr.push(mapCords[y][x]);
      }

      let arrFiltered = arr.filter((e) => {
        return e.classList[1] !== "field-none";
      });

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
  if (vector == "right") {
    let filterArr = [];
    let filterArrH = [];
    let filterArrHT = [];
    for (let y = 0; y < numOfRows; y++) {
      let arr = [];
      for (let x = 0; x < numOfRows; x++) {
        arr.push(mapCords[y][x]);
      }
      //filter 5 elements
      let arrFiltered = arr.filter((e) => {
        return e.classList[1] !== "field-none";
      });

      //loops for add ellements to arr
      for (let i = 0; i < numOfRows; i++) {
        arrFiltered[i]
          ? filterArrH.push(arrFiltered[i])
          : filterArrH.unshift(clearField);
        if (i == numOfRows - 1) {
          filterArr.push(...filterArrH);
          filterArrH = [];
        }
      }
    }
    filterArr.map((e, i) => {
      filterArrHT.push(e.cloneNode(true));
    });
    my_array_cards.map((e, i) => {
      editCart(e, filterArrHT[i].classList[1], filterArrHT[i].innerText);
    });
  }
  if (vector == "top") {
    let filterArr = [];
    let filterMap = [];
    let filterArrHT = [];
    for (let y = 0; y < numOfRows; y++) {
      let arr = [];
      for (let x = 0; x < numOfRows; x++) {
        arr.push(mapCords[x][y]);
        //create array of factory elements
        filterMap.push(mapCords[x][y]);
      }

      //filter 5 elements
      let arrFiltered = arr.filter((e) => {
        return e.classList[1] !== "field-none";
      });

      //create new array that are sorted
      for (let i = 0; i < numOfRows; i++) {
        arrFiltered[i]
          ? filterArr.push(arrFiltered[i])
          : filterArr.push(clearField);
      }
    }
    //clone elements for fix bug
    filterArr.map((e, i) => {
      filterArrHT.push(e.cloneNode(true));
    });
    //replace element of facory map for new
    filterMap.map((e, i) => {
      editCart(e, filterArrHT[i].classList[1], filterArrHT[i].innerText);
    });
  }
  if (vector == "bottom") {
    let filterArr = [];
    let filterArrH = [];
    let filterMap = [];
    let filterArrHT = [];
    for (let y = 0; y < numOfRows; y++) {
      let arr = [];
      for (let x = 0; x < numOfRows; x++) {
        arr.push(mapCords[x][y]);
        //create array of factory elements
        filterMap.push(mapCords[x][y]);
      }

      //filter 5 elements
      let arrFiltered = arr.filter((e) => {
        return e.classList[1] !== "field-none";
      });

      //create new array that are sorted
      for (let i = 0; i < numOfRows; i++) {
        arrFiltered[i]
          ? filterArrH.push(arrFiltered[i])
          : filterArrH.unshift(clearField);
        if (i == numOfRows - 1) {
          filterArr.push(...filterArrH);
          filterArrH = [];
        }
      }
    }
    //clone elements for fix bug
    filterArr.map((e, i) => {
      filterArrHT.push(e.cloneNode(true));
    });
    //replace element of facory map for new
    filterMap.map((e, i) => {
      editCart(e, filterArrHT[i].classList[1], filterArrHT[i].innerText);
    });
  }
}

//adding function
function adding(vector, state) {
  //create variables for other vectors
  let a, b, c;

  //2 for loops for grab all game fields
  for (let x = numOfRows - 1; x >= 0; x--) {
    for (let y = numOfRows - 1; y >= 0; y--) {
      //invert cords for change scannning destination and fix bug
      let invertedX = Math.abs(x - (numOfRows - 1));
      let invertedY = Math.abs(y - (numOfRows - 1));
      if (vector == "left") {
        b = mapCords[invertedX][invertedY - 1];
        c = mapCords[invertedX][invertedY];
        a = c.innerText;
      }
      if (vector == "right") {
        b = mapCords[x][y - 1];
        c = mapCords[x][y];
        a = c.innerText;
      }
      if (vector == "top") {
        b = mapCords[invertedY - 1]?.[invertedX];
        c = mapCords[invertedY][invertedX];
        a = c.innerText;
      }
      if (vector == "bottom") {
        b = mapCords[y - 1]?.[x];
        c = mapCords[y][x];
        a = c.innerText;
      }
      if (!state) {
        //if statments thats allow to check and repalce filds
        if (a == b?.innerText && a !== "") {
          editCart(c, `field-${Number(a) * 2}`, `${Number(a) * 2}`);
          editCart(b, `field-none`, ``);
        }
      } else {
        if (a == b?.innerText && a !== "") {
          return true;
        } else {
          if (x == 0 && y == 0) return false;
        }
      }
    }
  }
}

//add counter

function counter() {
  let count = 0;
  document.querySelectorAll(".card").forEach((e) => {
    e.innerText !== "" ? (count += Number(e.innerText)) : undefined;
  });
  document.querySelector(".counter").textContent = count;
}

//add toutch event
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      list("left");
    } else {
      list("right");
    }
  } else {
    if (yDiff > 0) {
      list("top");
    } else {
      list("bottom");
    }
  }
  xDown = null;
  yDown = null;
}

//add setings showup

document.querySelector("#logout").addEventListener("click", (e) => {
  new Popup("warn", "Logout!");
  localStorage.removeItem("token");
  window.location.reload(true);
});
let allUsersFromRanking;
fetch("https://rest-api-thsx.herokuapp.com/api/getscore")
  .then((response) => response.json())
  .then((data) => {
    allUsersFromRanking = data.sort((a, b) =>
      a.score < b.score ? 1 : b.score < a.score ? -1 : 0
    );
  })
  .then(() => {
    for (let i = 0; i < 10; i++) {
      if (!allUsersFromRanking[i]) return;
      document.querySelector(
        "#rankField > table > tbody"
      ).innerHTML += `<tr><td>${i + 1}.</td><td>${
        allUsersFromRanking[i].username
      }</td><td>${allUsersFromRanking[i].score}</td></tr>`;
    }
  })
  .catch((error) => {
    console.error(error);
  });
document.querySelector("#rank").addEventListener("click", (e) => {});
