

class headerTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="header">
            <div class="container">
                <div class="flex-row flex-m-end flex-c-center">
                    <a href="/index.html">Home</a>
                    <a href="#about-me" target="">About Me</a>
                    <a href="#portfolio">Projects</a>
                    <a href="#work-history">Work History</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('header-component', headerTemplate);

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.pageYOffset > 125) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});