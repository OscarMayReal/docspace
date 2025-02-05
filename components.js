class sidebaritem extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        console.log("ran")
        this.innerHTML += '<div class="sidebar-pageitem-icon-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>'
    }
}

customElements.define("ds-sidebar-pageitem", sidebaritem)