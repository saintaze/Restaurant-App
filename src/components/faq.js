const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
    <section class="faqs">
    <div class="content">
      <div class="center">
        <h2 class="page-heading">faq</h2>
      </div>
      <div class="faq-box">
        <div class="faq">
          <div class="faq__question">Are Your Cold Pressed Juices Kosher?</div>
          <p class="faq__answer page-text">The ingredients of Foster Juices are organic, cold pressed juices are completely kosher, however
            we have not yet received our kosher certification so our finished products, at this time, are not certified kosher</p>
        </div>
        <div class="faq">
          <div class="faq__question">Why 100% Organic?</div>
          <p class="faq__answer page-text">We believe that certified organic produce is the best choice for the health and safety of you and our planet. Our organic produce touts between 30 - 40% higher nutrient density than conventional produce.
          Non GMO, Pesticide and Chemical free - you drink more that 15 pounds of produce each day of the Cleanse.
          Consuming the same amount of conventional produce would expose you to a toxic level of pesticides, making for a very ineffective cleanse. The philosophy of our organic food production maintains principles of biodiversity, ecological balance,
          sustainability, natural plant fertilization, natural pest management, and soil integrity.
          </p>
        </div>
        <div class="faq">
          <div class="faq__question">Am I Getting Enough Fiber?</div>
          <p class="faq__answer page-text">Our cleanses are designed to give your digestive system a rest as a way to facilitate an expedited cleansing process.
          With this in mind, the juices intentionally do not contain large amounts of fiber in order to avoid the need for your
          body to break down fiber, which in turn conserves energy to be used in the cleansing process itself.
          </p>
        </div>
        <div class="faq">
          <div class="faq__question">How Does The Project Juice Cleanse Work?</div>
          <p class="faq__answer page-text">While the human body is well equipped with detoxifying and fat-burning organs like the liver, kidney and skin, the
          modern-day diet contains so many chemicals, artificial ingredients and manufactured items, which push your body to
          constantly work in overdrive in order to keep up. The Project Juice Cleanse pauses the influx of pollutants long enough
          to give your cells a chance to finally mobilize and release it's toxins so your body may return to optimal health
          </p>
        </div>
        <div class="faq">
          <div class="faq__question">How Long Do Your Juices Last?</div>
          <p class="faq__answer page-text">Our juices are living food. We recommend you drink your juice within 5 days of receipt for maximum freshness and
          nutritional value. Juice must be consumed within three days of opening.
          </p>
        </div>
        <div class="faq">
          <div class="faq__question">Where Does Your Produce Come From?</div>
          <p class="faq__answer page-text">We source most of our produce from local farmers who practice sustainable ORGANIC farming methods. Sourcing locally and
          organic not only ensures the freshest, most flavorful product, but also supports the environment (fewer miles traveled)
          and our neighboring communities.
          </p>
        </div>
        <div class="faq">
          <div class="faq__question">How Many Calories Are In A Juice?</div>
          <p class="faq__answer page-text">For a 14.5 oz. serving, our juices range from approximately 40 calories for an all-green juice to 340 calories for a nut
          mylk or shake.
          </p>
        </div>
        <div class="faq">
          <div class="faq__question">How Do I Store My Juices?</div>
          <p class="faq__answer page-text">Juices need to be refrigerated immediately upon receipt to remain properly temperature controlled. If juices do not
          remain cold (and are left out), they will begin to ferment and rapidly lose nutritional value as well as taste!
          </p>
        </div>
      </div>
    </div>
  </section>
`

class FAQComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));

  }
}

customElements.define('app-faq', FAQComponent);


