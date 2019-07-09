class Collapse {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  constructor(toggleElement) {
    console.log("Collapse.constructor toggleElement:", toggleElement); //
    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax
    this.toggleElement = toggleElement;
    this.expand = this.toggleElement.getAttribute("aria-expanded");

    this.toggleElement.addEventListener("click", () => {
      // console.log(this);
      this.toggleContent();
    });
  }

  toggleContent() {
    // console.log("method called");
    // console.log(this.expand);
    let panel = document.querySelector("div.collapse");
    // console.log(panel);
    // if (this.expand === false) {
    //   this.toggleElement.setAttribute("aria-expanded", true);
    //   console.log("omg statement ran");
    //   console.log(document.querySelector("div.collapse"));
    //   document.querySelector("div.collapse").classList.toggle("show");
    // } else {
    panel.classList.toggle("show");
    // this.toggleElement.setAttribute("aria-expanded", false);
    // console.log("this statement ran");
    // }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const collapseToggles = document.querySelectorAll(`[data-toggle="collapse"]`);

  collapseToggles.forEach(button => new Collapse(button));
});
