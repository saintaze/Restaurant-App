import vanilla from '../images/vanilla-sm.jpg';
import orange from '../images/orange-sm.jpg';
import carrot from '../images/carrot-sm.jpg';

const template = document.createElement('template');
template.innerHTML = `
  <section class="cart-summary">
    <h1 class="cart-summary__heading">shopping cart</h1>
    <p class="cart-summary__text page-text">You have nothing in your shopping cart. Continue Shopping</p>
    <div class="cart-summary-card">

      <div class="cart-summary-card__header-row">
        <span class="cart-summary-card__header-cell cart-summary-card__header-cell--1">item</span>
        <span class="cart-summary-card__header-cell cart-summary-card__header-cell--2"></span>
        <span class="cart-summary-card__header-cell cart-summary-card__header-cell--3"></span>
        <span class="cart-summary-card__header-cell cart-summary-card__header-cell--4">qty.</span>
        <span class="cart-summary-card__header-cell cart-summary-card__header-cell--5">price</span>
      </div>

      <div class="cart-summary-card__body-row cart-summary-card__orange">
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--1"><a href="/orange" class="cart-summary-card__cancel">×</a></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--2"><img class="cart-summary-card__img" src="${orange}"></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--3"><a href="/orange" class="cart-summary-card__link">Cold-Pressed Orange Juice</a></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--4"><input value="" type="number" name="" id="" class="cart-summary-card__count"></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--5"><span class="cart-summary-card__amount"></span></span>
      </div>

      <div class="cart-summary-card__body-row cart-summary-card__carrot">
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--1"><a
            href="/carrot" class="cart-summary-card__cancel">×</a></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--2"><img class="cart-summary-card__img"
            src="${carrot}"></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--3"><a href="/carrot"
            class="cart-summary-card__link">Cold-Pressed Carrot Juice</a></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--4"><input value="" type="number" name=""
            id="" class="cart-summary-card__count"></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--5"><span
            class="cart-summary-card__amount"></span></span>
      </div>

      <div class="cart-summary-card__body-row cart-summary-card__vanilla">
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--1"><a
            href="/vanilla" class="cart-summary-card__cancel">×</a></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--2"><img class="cart-summary-card__img"
            src="${vanilla}"></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--3"><a href="/vanilla"
            class="cart-summary-card__link">Cold-Pressed Vanilla Chai</a></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--4"><input value="" type="number" name=""
            id="" class="cart-summary-card__count"></span>
        <span class="cart-summary-card__body-cell cart-summary-card__body-cell--5"><span
            class="cart-summary-card__amount"></span></span>
      </div>
      <div class="cart-summary-card__footer-row">
        <span class="cart-summary-card__subtotal-label">Subtotal</span>
        <span class="cart-summary-card__subtotal-amount"></span>
      </div>
      <div class="cart-summary-card__btn-box">
        <button class="btn cart-summary-card__checkout-btn">checkout</button>
      </div>
    </div>  
  </section>
`

class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this._items = JSON.parse(this.getAttribute('items'));
    this._cartTotalAmount = 0;

    
    this._scrollToPos()
    this._activateNameLinks();
    this._activateCancelLinks();
    this._activateInputChanges();
    this._render();
  }

  _scrollToPos(){
    const posY = this.getAttribute('posY');
    if (posY) {
      window.scrollTo(0, posY)
    }
  }

  _activateNameLinks(){
    const $itemNames = this.querySelectorAll('.cart-summary-card__link');
    $itemNames.forEach(n => {
      n.addEventListener('click', this._handleNameLinkClick.bind(this));
    });
  }

  _activateInputChanges() {
    const $inputs = this.querySelectorAll('.cart-summary-card__count');
    $inputs.forEach(n => {
      n.addEventListener('change', this._handleInputChanges.bind(this));
    });
  }

  _activateCancelLinks(){
    const $cancelLinks = this.querySelectorAll('.cart-summary-card__cancel');
    $cancelLinks.forEach(c => {
      c.addEventListener('click', this._handleCancelLinkClick.bind(this));
    });
  }

  _handleInputChanges(e){
    if (Math.sign(+e.target.value) === -1) return 
    localStorage.setItem('posY', window.scrollY); 
    const juiceType = e.target.parentElement.parentElement.classList[1].split('__')[1]
    const event = this._createNewEvent('cartInputChange', { type: juiceType, count: Math.floor(+e.target.value) });
    this.dispatchEvent(event);
  }

  _sendItemPurchaseEvent() {
    const itemCount = document.querySelector('.shopping-card__input').value;
    const event = this._createNewEvent('itemPurchase', { type: this._juiceType, count: +itemCount });
    this.dispatchEvent(event);
  }

  _handleCancelLinkClick(e){
    e.preventDefault();
    const itemCount = this.querySelector(`.cart-summary-card__${e.target.pathname.slice(1)} .cart-summary-card__count`).value;
    const event = this._createNewEvent('itemCancelClick', { path: e.target.pathname, count: +itemCount });
    this.dispatchEvent(event);
  }

  _handleNameLinkClick(e){
    e.preventDefault();
    const event = this._createNewEvent('itemNameClick', e.target.pathname);
    this.dispatchEvent(event);
  }

  _hideElements(){
    this.querySelector('.cart-summary-card').style.display = 'none';
    this.querySelector('.cart-summary__text').style.display = 'none';
    this.querySelector('.cart-summary-card__vanilla').style.display = 'none';
    this.querySelector('.cart-summary-card__carrot').style.display = 'none';
    this.querySelector('.cart-summary-card__orange').style.display = 'none';
  }

  _render(){
    this._hideElements();
    if(this._items.length === 0){
      this.querySelector('.cart-summary__text').style.display = 'block';
    }else{  
      this.querySelector('.cart-summary-card').style.display = 'block';
      this._items.forEach(i => {
        this._populateItemDetails(i)
        this._cartTotalAmount += i.count * 8;
      });
      this._populateItemsTotal();
    }
  }

  _populateItemsTotal(){
    this.querySelector('.cart-summary-card__subtotal-amount').textContent = `\$${this._cartTotalAmount}.00`;
  }

  _populateItemDetails(i){
    const $el = this.querySelector('.cart-summary-card__' + i.type);
    $el.style.display = 'flex';
    $el.querySelector('.cart-summary-card__count').value = i.count;
    $el.querySelector('.cart-summary-card__amount').textContent = `\$${i.count * 8}.00`;
  }

  _createNewEvent(eventName, payload) {
    const eventOptions = { bubbles: true, composed: true, detail: payload }
    return new CustomEvent(eventName, eventOptions);
  }
}

customElements.define('app-cart', CartComponent);


