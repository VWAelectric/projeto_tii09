/**Inicio da programação menu dropdown */

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseover', () => {
    dropdownContent.classList.add('show')
}); 

dropdown.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('show')
}); 

/**Fim para programação menu dropdown */

/**Inicio da mudança da cor do icon whatsapp */

document.addEventListener("scroll", function() {
    const icon = document.getElementById("icon");
    if((window.innerHeight+window.scrollY) >= document.body.offsetHeight) {
        icon.style.color = "white";
    }else{
        icon.style.color = "black";
    }
});

/**Fim da mudança da cor do whatsapp ao fazer o scroll até o fim da página */