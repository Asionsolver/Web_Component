class MyButton extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        const button = document.createElement('button');
        button.innerHTML = this.innerHTML;
        this.shadow.append(button);
        this.shadow.append(this.#createStyle());
    }



    attributeChangedCallback(){
        
    }

    disconnectedCallback(){

    }

    #createStyle(){
        const style = document.createElement('style');
        style.innerText = `
            button{
                background-color: #613F75;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 5px;
            }
        `;
        return style;
        }
}

customElements.define('my-button', MyButton);