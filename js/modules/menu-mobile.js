import outsideClick from './outsideclick.js'

export default class MenuMobile {
  constructor(menuButton, menuList, events)  {

  this.menuButton = document.querySelector(menuButton);
  this.menuList = document.querySelector(menuList);
  this.events = events || ['click', 'touchstart'];
  this.activeClass = 'active';

  this.openMenu = this.openMenu.bind(this);
  }

   openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    })
  }

  addMenuMobileEvents () {
      this.events.forEach((userEvent) => {
        this.menuButton.addEventListener(userEvent, this.openMenu);
      })
  }

  init() {
    if(this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }

}