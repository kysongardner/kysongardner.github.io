window.addEventListener('load', (event)=> {
    const lastUpdate = document.querySelector('#lastupdate');
    lastUpdate.textContent = document.lastModified;

    const year = document.querySelector("#year");
    year.textContent = new Date().getFullYear();
})