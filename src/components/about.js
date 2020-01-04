const template = document.createElement('template');
template.innerHTML = `
  <section class="about">
    <div class="banner">
      <img class="banner__img" src="https://images.squarespace-cdn.com/content/v1/5794fb301b631bb13257714c/1475248908348-8W66NBE1C4ORI7S5NHFK/ke17ZwdGBToddI8pDm48kNL_f0ssoLgHIkKD7JmGQqx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UU3VrmyTOP4T61XLnSutxMGE6-QAkQjd9MkPLK55j40zVMfZ_fU2mqhXiOYZfVnqnQ/image-asset.jpeg?format=1500w" alt="">
    </div>
    <div class="content">
      <h2 class="page-heading">our roots</h2>
      <p class="page-text">
        Foster Juice Co. is Bologna's largest chain of fresh juice and smoothie bars, owned and led by Ayaz Levesque,
        President and CEO. The chain specializes in smoothies made of pure juice, fruit sorbet or vanilla frozen yogurt, frozen
        fruit, fresh yogurt and ice. This company was quickly franchised, setting a
        record for opening 50 stores in the first two years. Since then, it has grown to have more than 350 traditional
        and 25 non-traditional locations in Italy, one in Dubai, two in the United States and three in Mexico.
      </p>
      <p class="page-text">
        On November 16, 2015, Foster Juice Co. announced the construction of Juice Innovation Bar, our first concept store.
        Located in the center of Old Pasadena, the Innovation Bar replaced our nineteenth store with one that was roughly
        double the size of a typical Forter Juice store. Alongside the usual serving of smoothies, this location also
        sold many other foods, including quinoa bowls, artisan hummus toast with vegetables, homemade potato chips, and various
        vegan foods.Matt Kafka, who is the Senior Director of Operations at Foster,
        explained it as a "cool and hip place in Southern California". Inside, the customer is greeted with mirrored wall
        art with photographs of various fruits, a set of television screens showing various video greetings.
      </p>
      <p class="page-text">
        Forter Juice Co. created special blends for the arts and entertainment industry including for Warner Brothers' 70th
        anniversary of The Wizard of Oz: The Ruby Slippers Blend, the Joffrey Ballet's performances of The Nutcracker:
        Clara’s Tea Slippers Blend, and a gift sets for the cast and crew of Slumdog Millionaire at the 2009 Academy Awards. Foster Juice Co. won two awards for its Chocolate Almond Allure tea at the AIDS Foundation of Chicago's Annual World of Chocolate
        Event December 2011.
      </p>
      <p class="page-text">
        Foster Jucie Co. drink grew out of an orange juice stand opened in Los Angeles, California in 1926. Sales were
        initially modest, about $20 a day (equivalent to approximately $283 in 2018 dollars).[4] In 1929, Bill Hamlin, Freed's
        real estate broker, developed a mixture that made the acidic orange juice less bothersome to his stomach. Freed's stand
        began serving the drink, which had a frothier, creamier texture. The sales at the stand increased substantially after
        the introduction of the new drink, going up to $100 a day.
      </p>
      <a class="btn btn--history" href="/juices">learn more about our juice</a>
    </div>
  </section>
`

class AboutComponent extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback(){
    this.appendChild(template.content.cloneNode(true));
    const juicesBtn = this.querySelector('.btn--history');
    juicesBtn.addEventListener('click', this._handleJuicesBtnClick.bind(this))
  }

  _handleJuicesBtnClick(e){
    e.preventDefault();
    const event = this._createNewEvent('juicesBtnClick', e.target.pathname)
    this.dispatchEvent(event);
  }

  _createNewEvent(eventName, payload) {
    const eventOptions = { bubbles: true, composed: true, detail: payload }
    return new CustomEvent(eventName, eventOptions);
  }

}

customElements.define('app-about', AboutComponent);


