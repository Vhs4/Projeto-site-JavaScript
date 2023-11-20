import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor (dropdownMenu, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenu);
    this.activeClass = 'active';
    this.events = events || ['touchstart', 'click'];

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, ['touchstart', 'click'], () => {
      element.classList.remove(this.activeClass);
    });
  };

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if(this.dropdownMenus.length) {
    this.addDropdownMenuEvent();
    }
    return this;
  }

}