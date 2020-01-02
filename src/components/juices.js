const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>

  <section class="juices">
    <div class="banner">
      <img class="banner__img" src="https://images.squarespace-cdn.com/content/v1/5794fb301b631bb13257714c/1475248968009-JUSNHNWELSC8N17TT2D8/ke17ZwdGBToddI8pDm48kNL_f0ssoLgHIkKD7JmGQqx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UU3VrmyTOP4T61XLnSutxMGE6-QAkQjd9MkPLK55j40zVMfZ_fU2mqhXiOYZfVnqnQ/image-asset.jpeg?format=1500w" alt="">
    </div>
    <div class="content">
      <h2 class="page-heading">our juice</h2>
      <p class="page-text">
        Fruit juice contains lower levels of free amino acids compared to sugars and organic acids. Although the amount of free amino acids in orange juice is relatively high, typically around 0.3–0.4%, in other juices, such as apple juice, the level may be as low as 10 ppm (Fry, 1990; Lea, 1990). Fruit juices are the most consumed beverages worldwide owing to their rich, natural, healthy nutrients
      </p>
      <p class="page-text">
        Fruit juice is not a major source of dietary vitamins and minerals, although orange juice is rich in vitamin C. Table 13.2 shows the mineral content of some common fruit juices. The major inorganic ion is potassium.The mineral content may change during fruit juice processing and storage. For example, iron content may be higher in canned juice than fresh juice. The mineral content of reconstituted juice may differ from fresh juice, since the water used for juice reconstitution may add some minerals to the product.
      </p>

      <p class="page-text">
        he juice making process may or may not result in a loss of phenolic antioxidants. Biological variability between cultivars of fruit, as well as length of time in storage, cultivation conditions, and extraction methods can all affect the level of bioactive components in juice. New juice based drinks are appearing on the market which have been fortified with calcium, specifically citrus juices. 
      </p>
      </p>
      <a class="btn btn--history" href="/shop">visit our shop</a>
    </div>
  </section>
`

class JuicesComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    const shopBtn = this.querySelector('.btn--history');
    shopBtn.addEventListener('click', this._handleShopBtnClick.bind(this))
  }

  _handleShopBtnClick(e) {
    e.preventDefault();
    const event = this._createNewEvent('shopBtnClick', e.target.pathname)
    this.dispatchEvent(event);
  }

  _createNewEvent(eventName, payload) {
    const eventOptions = { bubbles: true, composed: true, detail: payload }
    return new CustomEvent(eventName, eventOptions);
  }
}

customElements.define('app-juices', JuicesComponent);


