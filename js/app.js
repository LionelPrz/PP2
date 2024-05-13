const cardValue = document.querySelectorAll('button a[id]');


document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');

    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
        }
    });
});
//Funcion para determinar que oferta es seleccionada

    cardValue.forEach(promocion=>{
        promocion.addEventListener('click',function(e){
            let card_id;
                card_id =  e.target.id;
                 localStorage.setItem('promos',card_id);
                 console.log(card_id);
        })
    })
