const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <section class="stockists">
      <div class="content">
        <div class="center">
          <h2 class="page-heading">stockists</h2>
          <div class="stockists-list">
            <div class="stockists-list__row">
              <div class="stockist">
                <h2 class="stockist__heading">Moonee Ponds, Victoria</h2>
                <p class="stockist__address">Bottlemart Moonee Ponds
                254/256 Union Rd</p>
                <p class="stockist__contact">714-912-2187</p>
              </div>
              <div class="stockist">
                <h2 class="stockist__heading">Albany, New York</h2>
                <p class="stockist__address">Cellarbrations Sunshine
                263 Hampshire Rd</p>
                <p class="stockist__contact">909-865-3044</p>
              </div>
            </div>
            <div class="stockists-list__row">
              <div class="stockist">
                <h2 class="stockist__heading">Delaware Texas</h2>
                <p class="stockist__address">1291 Sleepy Hollow Rd, Woodlawn, VA, 24381</p>
                <p class="stockist__contact">931-954-4858</p>
              </div>
              <div class="stockist">
                <h2 class="stockist__heading">Syracruse, Carolina</h2>
                <p class="stockist__address">10 Hartley Cir, Owings Mills, MD, 21117</p>
                <p class="stockist__contact">410-902-6282</p>
              </div>
            </div>
            <div class="stockists-list__row">
              <div class="stockist">
                <h2 class="stockist__heading">Kingston Rhode Island</h2>
                <p class="stockist__address">9898 E Colfax Ave, Aurora, CO, 80010</p>
                <p class="stockist__contact">865-203-2798</p>
              </div>
              <div class="stockist">
                <h2 class="stockist__heading">North Harmony, Alabama</h2>
                <p class="stockist__address">503 La Vista Rd, Pueblo, CO, 81005</p>
                <p class="stockist__contact">314-226-8463</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>

`

class StockistsComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));

  }
}

customElements.define('app-stockists', StockistsComponent);


