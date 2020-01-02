const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
`

class RootComponent extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
    this._initialPath = '/about';

    this._activateLinks();    
    this.addEventListener('juicesBtnClick', this._childBtnClick.bind(this)); 
    this.addEventListener('shopBtnClick', this._childBtnClick.bind(this));
    this.addEventListener('buyJuiceClick', this._buyJuiceClick.bind(this));
    
    // const initialView = document.createElement('app-about');
    // this._render(initialView);
  }

  _activateLinks() {
    const $navLinks = document.querySelectorAll('nav');
    $navLinks.forEach(link => {
      link.addEventListener('click', this._getActivatedPath.bind(this));
    });
  }

  _initView(path){
    return document.createElement('app-' + path.slice(1));
  }

  _childBtnClick(e){
    const path = e.detail;
    const view = this._initView(path);
    this._render(view);
  }

  _buyJuiceClick(e){
   const view =  document.createElement('app-shopping');
   view.setAttribute('juice', e.detail.slice(1));
   this._render(view)
  }

  _getActivatedPath(e){
    e.preventDefault();
    const path = e.target.pathname;
    const view = this._initView(path);
    view.style.opacity = '0';
    this._render(view);
  }

  _render(view){
    window.scrollTo(0, 0);
    this.innerHTML = '';
    this.appendChild(view);
  }

}

customElements.define('app-root', RootComponent);



// render must only take the component el and mount to teh dom
// init must only create the relevant component el and mount set props if necessary
// grab active path 

