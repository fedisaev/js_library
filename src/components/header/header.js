import {DivComponent} from "../../common/div-component.js";
import './header.css';
export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.element.classList.add('header');
        this.element.innerHTML = `
            <div>
                <img src="/static/logo.svg" alt="Logo">
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="/static/search.svg" alt="Search icon">
                    Book search
                </a>
                <a class="menu__item" href="#favorites">
                    <img src="/static/favorites.svg" alt="Favorites icon">
                    Favorites
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
       `;
        return this.element;
    }
}