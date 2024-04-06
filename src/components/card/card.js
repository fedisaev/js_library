import {DivComponent} from "../../common/div-component.js";
import './card.css';

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    render() {
        this.element.classList.add('card');
        const existInFavorites = this.appState.favorites.find(
            b => b.key === this.cardState.key
        );
        this.element.innerHTML = `
            <div class="card__image">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="cover">
            </div>
            <div class="card__info">
                <div class="card__tag">
                    ${this.cardState.subject ? this.cardState.subject[0] : 'Not specified'}
                </div>
                <div class="card__name">
                    ${this.cardState.title}
                </div>
                <div class="card__author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : 'Not specified'}
                </div>
                <div class="card__footer">
                    <button class="button_add ${existInFavorites ? 'button__active' : ''}">
                        ${existInFavorites
                            ? '<img src="/static/favorites.svg"  alt="favorites"/>'
                            : '<img src="/static/favorite-white.svg"  alt="favorites"/>'
                        }
                    </button>
                </div>
            </div>
        `;
        return this.element;
    }
}