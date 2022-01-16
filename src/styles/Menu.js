/** Componsante  Menu  de base*/
export default class Menu {
  /**
   * Méthode constructeur
   */
  constructor() {
    this.toggleBtn = Array.from(document.querySelectorAll('.js-toggle'));
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.toggleBtn.forEach((button) => {
      button.addEventListener('click', this.toggleMenu.bind(this));
    });
  }

  toggleMenu(evt) {
    let toggle = false;

    this.toggleBtn.forEach((button) => {
      if (evt.target === button) {
        toggle = true;
      }
    });
    if (toggle) document.documentElement.classList.toggle('menu-open');
  }
}
