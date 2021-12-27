class Popup {
  constructor(type, arg) {
    this.arg = arg;
    this.type = type;
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = this.arg;
    div.appendChild(p);
    div.classList.add("popup");
    div.classList.add(this.type);
    div.classList.add("animShow");
    document.body.appendChild(div);
    div.addEventListener("animationend", (e) => {
      div.classList.remove("animShow");
      div.classList.add("animHide");
      div.addEventListener("animationend", (e) => {
        div.remove();
      });
    });
  }
}

export default Popup;
