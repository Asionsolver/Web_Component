class MyButton extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const button =`
            <style>
            button{
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                }
            </style>
            <button>${this.innerHTML}</button>
        `;
        this.innerHTML = button;
    }

    attributeChangedCallback(){
        
    }

    disconnectedCallback(){}
}