import vanilla from '../images/vanilla.jpg';
import orange from '../images/orange.jpg';
import carrot from '../images/carrot.jpg';

const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>

  <section class="shopping-card">
    <div class="shopping-card__left">
       <div class="shopping-card-nav">
      <div class="shopping-card-nav__carrot shopping-card-nav__box">
        <a href="/orange">
          <span class="shopping-card-nav__chevron">&lsaquo;</span> <span class="shopping-card-nav__text">previous</span>
        </a>
        <span class="shopping-card-nav__separator">/</span>
        <a href="/vanilla">
          <span class="shopping-card-nav__text">next</span> <span class="shopping-card-nav__chevron">&rsaquo;</span>
        </a>
      </div>

      <div class="shopping-card-nav__orange shopping-card-nav__box">
        <a href="/carrot">
          <span class="shopping-card-nav__text">next</span> <span class="shopping-card-nav__chevron">&rsaquo;</span>
        </a>
      </div>

      <div class="shopping-card-nav__vanilla shopping-card-nav__box">
        <a href="/carrot">
          <span class="shopping-card-nav__chevron">&lsaquo;</span> <span class="shopping-card-nav__text">previous</span>
        </a>
      </div>
    </div>
      <div class="shopping-card__heading">cold-pressed vanilla chai</div>
      <div class="shopping-card__price">$ 8.00</div>
      <div class="shopping-card__text page-text">The following is placeholder text known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus
      egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus.</div>
      <div class="shopping-card__control">
        <div class="shopping-card__label">quantity</div>
        <input type="number" name="" id="" value="1" min="1" max="10" class="shopping-card__input">
      </div>
      <button class="btn shopping-card__btn">add to cart</button>
    </div>
    <div class="shopping-card__right">
      <img alt="" class="shopping-card__img">
    </div>
</section>
`

class ShoppingComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this._juiceType = this.getAttribute('juice');
    this._activateNavLinks();

    const $img = this.querySelector('.shopping-card__img');
    $img.src = this._getJuiceImg(this._juiceType);

    this.$addBtn = document.querySelector('.shopping-card__btn');
    this.$addBtn.addEventListener('click', this._handleItemPurchase.bind(this));

    this._renderJuiceNav()
  }

  _handleItemPurchase(e) {
    this._activateBtnPhases()
  }

  _sendItemPurchaseEvent() {
    const itemCount = document.querySelector('.shopping-card__input').value;
    const event = this._createNewEvent('itemPurchase', { type: this._juiceType, count: itemCount });
    this.dispatchEvent(event);
  }

  _setBtnText(text){
    this.$addBtn.textContent = text;
  }

  _toggleBtnDisable(){
    this.$addBtn.disabled = !this.$addBtn.disabled
  }

  _activateBtnPhases(){
    setTimeout(()=>{
      this._setBtnText('adding...');
    }, 200)
    this._toggleBtnDisable();
    setTimeout(()=>{
      this._setBtnText('added!');
      this._sendItemPurchaseEvent();
    }, 2000);
    setTimeout(() => {
      this._setBtnText('add to cart');
      this._toggleBtnDisable();
    }, 3500);
  }

  _getJuiceImg(juiceType){
    if(juiceType === 'orange') return orange;
    if(juiceType === 'carrot') return carrot;
    if(juiceType === 'vanilla') return vanilla;
  }

  _renderJuiceNav(){
    const $juiceNavs = this.querySelectorAll('.shopping-card-nav__box');
    $juiceNavs.forEach(jNav => {
      if (this._juiceType === jNav.classList[0].split('__')[1]){
        jNav.style.display = 'block';
      }else{
        jNav.style.display = 'none';
      }
    });
  }

  _activateNavLinks() {
    const $navLinks = this.querySelectorAll('.shopping-card-nav a')
    $navLinks.forEach(link => {
      link.addEventListener('click', this._handleJuiceNav.bind(this));
    });
  }

  _handleJuiceNav(e){
    e.preventDefault();
    console.log(e.target.parentNode.pathname)
    const event = this._createNewEvent('itemBrowse', e.target.parentNode.pathname );
    this.dispatchEvent(event);
  }

  _createNewEvent(eventName, payload) {
    const eventOptions = { bubbles: true, composed: true, detail: payload }
    return new CustomEvent(eventName, eventOptions);
  }
}

customElements.define('app-shopping', ShoppingComponent);


