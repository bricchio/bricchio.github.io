const template = document.createElement("template");
template.innerHTML = `
    <style>
        h3 { color: green }
    </style>
    <h3>
        <slot></slot>
        <span class="description">
            <slot name="description"></slot>
        </span>
    </h3>
`;

class headerTemplate extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open "});
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define('header-compontent', headerTemplate);