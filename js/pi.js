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


// função para trocar os slides automaticamente
let btn_status = 0;


function slider_auto(){
    const btn_slider = document.querySelectorAll(".manual-btn");
    
    btn_slider.forEach(bnt => bnt.style.background = "");
    btn_slider[btn_status].click();
    btn_slider[btn_status].style.background = "#F39C12";


    btn_status++;
    if(btn_status === 3){
        btn_status = 0;
    }
}
setInterval(slider_auto,4000);