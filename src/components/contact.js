const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>

  <section class="contact">
    <div class="content">
      <div class="center">
        <h2 class="page-heading page-heading--contact">contact</h2>
      </div>
      
      <div class="center">
        <p class="page-text page-text--contact">
        Fruit Juice Co. is always open to customer inputs. If you have any suggestions, please fill out the form below.
        </p>
      </div>
      
      <div class="form">
        <div class="form__name">
          <div class="form__control">
            <label for="" class="form__label">Name<span class="form__required">*</label>
            <input type="text" class="form__input">
            <small class="form__helper-text">First Name</small>
          </div>
          <div class="form__control">
            <label for="" class="form__label"><span class="form__required"></label>
            <input type="text" class="form__input">
            <small class="form__helper-text">Last Name</small>
          </div>
        </div>
        <div class="form__control">
          <label for="" class="form__label">Email Address<span class="form__required">*</label>
          <input type="text" class="form__input">
        </div>
        <div class="form__control">
          <label for="" class="form__label">Subject<span class="form__required">*</label>
          <input type="text" class="form__input">
        </div>
        <div class="form__control">
          <label for="" class="form__label">Message<span class="form__required">*</label>
          <textarea rows="6" class="form__textarea"></textarea>
        </div>
      </div>
      <div class="center">
        <button class="btn btn--submit">submit</button>
      </div>
    </div>
  </section>
`

class ContactComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-contact', ContactComponent);


