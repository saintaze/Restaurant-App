const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <section class="shop">
    <div class="banner-shop">
      <div class="banner-shop__left">
        <a href="/orange" class="banner-shop__link">
          <span class="banner-shop__img-name banner-shop__img-name--left">orange juice</span>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5794fb301b631bb13257714c/1475176520968-CN69R78CM7O2W6OL55LX/ke17ZwdGBToddI8pDm48kLPswmMOqQZ9-Q6KHLjvbpZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTcpTqfU-ZEsztPyQLxhSSK-PhJjRDDFQG0l3_ZnmWi1QjT9byXZM3ISxo3y1NRptg/orange.jpg?format=1000w"
            alt="" class="banner-shop__img banner-shop__img--left">
        </a>
      </div>
      <div class="banner-shop__right">
        <a href="/carrot" class="banner-shop__link">
          <span class="banner-shop__img-name banner-shop__img-name--right">carrot juice</span>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5794fb301b631bb13257714c/1475176535639-D7AF7SDE9W2NKGTGX3ZH/ke17ZwdGBToddI8pDm48kLPswmMOqQZ9-Q6KHLjvbpZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTcpTqfU-ZEsztPyQLxhSSK-PhJjRDDFQG0l3_ZnmWi1QjT9byXZM3ISxo3y1NRptg/carrot.jpg?format=500w"
            alt="" class="banner-shop__img banner-shop__img--right">
        </a>
        <a href="/vanilla" class="banner-shop__link">
          <span class="banner-shop__img-name banner-shop__img-name--right">vanilla chai</span>
          <img src="https://images.squarespace-cdn.com/content/v1/5794fb301b631bb13257714c/1475176549236-4ZN5MYZNL09PHU079C59/ke17ZwdGBToddI8pDm48kLPswmMOqQZ9-Q6KHLjvbpZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTcpTqfU-ZEsztPyQLxhSSK-PhJjRDDFQG0l3_ZnmWi1QjT9byXZM3ISxo3y1NRptg/vanilla.jpg?format=500w" alt="" class="banner-shop__img banner-shop__img--right">
        </a>
      </div>
    </div>
  </section>
  
`

class ShopComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this._activeLinks()
  }

  _activeLinks(){
    const juices = this.querySelectorAll('.banner-shop__link');
    juices.forEach(j => {
      j.addEventListener('click', this._handleBuyJuiceClick.bind(this))
    });
  }

  _handleBuyJuiceClick(e){
    e.preventDefault();
    const event = this._createNewEvent('buyJuiceClick', e.target.parentNode.pathname)
    this.dispatchEvent(event);
  }

  _createNewEvent(eventName, payload) {
    const eventOptions = { bubbles: true, composed: true, detail: payload }
    return new CustomEvent(eventName, eventOptions);
  }
}

customElements.define('app-shop', ShopComponent);


