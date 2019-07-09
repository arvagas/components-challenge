class Modal {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  constructor(toggleElement) {
    console.log("Modal.constructor toggleElement:", toggleElement); //
    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax

    this.toggleElement = toggleElement;
    // this.xBtn = toggleElement.querySelector(".close");
    this.xBtn = document.querySelector(".close");
    // this.closeBtn = toggleElement.querySelector(".btn-secondary");
    this.closeBtn = document.querySelector(".btn-secondary");
    console.log(this.closeBtn);
    // this.saveBtn = toggleElement.querySelector(".btn-primary");
    // this.saveBtn = document.querySelector(".btn-primary");

    // open modal when clicked
    this.toggleElement.addEventListener("click", () => {
      this.toggleContent();
    });

    // close modal when x button clicked
    this.xBtn.addEventListener("click", event => {
      this.hideContent();
    });

    // close modal when close button clicked
    this.closeBtn.addEventListener("click", event => {
      this.hideContent();
    });

    // close modal when save button clicked
    // this.saveBtn.addEventListener("click", event => {
    //   this.hideContent();
    // });

    document.addEventListener("click", event => {
      if (
        event.target.closest(".modal-dialog") ||
        event.target.closest(".btn-primary")
      )
        return;
      this.hideContent();
      event.stopPropagation();
    });
  }
  toggleContent() {
    let popUp = document.querySelector(".modal.fade");
    popUp.classList.toggle("show");
    document.querySelector("body").classList.add("modal-open");
    // popUp.classList.add("modal-backdrop");
    if (popUp.style.display === "block") popUp.style.display = "none";
    else popUp.style.display = "block";
    document.body.appendChild(modOverlay);
    modOverlay.classList.add("modal-backdrop");
    modOverlay.classList.add("fade");
    modOverlay.classList.add("show");
  }
  hideContent() {
    let popUp = document.querySelector(".modal.fade");
    popUp.classList.remove("show");
    popUp.style.display = "none";
    // popUp.classList.add("modal-backdrop.fade");
    document.querySelector("body").classList.remove("modal-open");
    // modOverlay.classList.remove("fade");
    document.body.removeChild(modOverlay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);

  modalToggles.forEach(button => new Modal(button));
});

let modOverlay = document.createElement("div");
