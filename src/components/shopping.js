const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>

  
`

class ShoppingComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    console.log('this is inisde', this.getAttribute('juice'))
    // const shopBtn = this.querySelector('.btn--history');
    // shopBtn.addEventListener('click', this._handleShopBtnClick.bind(this))
  }

  // _handleShopBtnClick(e) {
  //   e.preventDefault();
  //   const event = this._createNewEvent('shopBtnClick', e.target.pathname)
  //   this.dispatchEvent(event);
  // }

  _createNewEvent(eventName, payload) {
    const eventOptions = { bubbles: true, composed: true, detail: payload }
    return new CustomEvent(eventName, eventOptions);
  }
}

customElements.define('app-shopping', ShoppingComponent);


