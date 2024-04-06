import {DivComponent} from "../../common/div-component.js";
import './search.css';

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    search() {
        this.state.searchQuery = this.element.querySelector('input').value;
    }

    render() {
        this.element.classList.add('search');
        this.element.innerHTML = `
           <div class="search__wrapper">
                <input type="text" 
                       placeholder="Find a book or an author...."
                       class="search__input"
                       value="${this.state?.searchQuery ? this.state.searchQuery : ''}"
                />
                <img src="/static/search.svg" alt="Search icon">
           </div>
           <button aria-label="Search"><img src="/static/search-white.svg" alt="Search icon"></button>
       `;
        this.element.querySelector('button').addEventListener('click', this.search.bind(this));
        this.element.querySelector('input').addEventListener('keydown', e=>{
            if (e.code === 'Enter'){
                this.search();
            }
        })
        return this.element;
    }
}