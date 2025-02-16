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
const btn_slider = document.querySelectorAll(".manual-btn");
const titulo = document.querySelector(".titulo");
const paragrafo = document.querySelector(".paragrafo");
const list = document.querySelector(".list");
const textContainer = document.querySelectorAll(".text-container");


function slider_auto(){
    btn_slider.forEach(bnt => bnt.style.background = "");
    btn_slider[btn_status].click();
    btn_slider[btn_status].style.background = "#F39C12";
    textContainer.forEach(textContainer => textContainer.style.display = "none");

    if(btn_status === 0){
        textContainer[btn_status].style.display = "block";

    }else if(btn_status === 1){
        textContainer[btn_status].style.display = "block";
    }else if(btn_status === 2){
        textContainer[btn_status].style.display = "block";
    }

    
    btn_status++;
    if(btn_status === 3){
        btn_status = 0;
    }
}
setInterval(slider_auto,4000);

const close_register = document.getElementById("close_register");
const register = document.querySelector(".register");
const btn_acessar = document.getElementById("btn_acessar");
const fundo = document.querySelector(".fundo");

close_register.addEventListener("click",()=>{
    register.classList.remove("box_open");
    fundo.style.display = "none";
    console.log("testte fechar");
})

btn_acessar.addEventListener("click", ()=>{
    register.classList.add("box_open")
    fundo.style.display = "block";
    console.log("abrir box");

})

// janela de download

const btn_cancel = document.querySelector(".btn_cancel");
const btn_cancelpage1 = document.querySelector(".btn_cancelpage1");
const btn_cancel_download = document.querySelector(".btn_cancel_download")
const update = document.querySelector(".update");
const btn_atu = document.querySelector(".btn_atu");
const update_page1 = document.querySelector(".update_page1");
const update_download = document.querySelector(".update_download");
const btn_avan = document.querySelector(".btn_avan");
const bnt_down = document.querySelector(".bnt_down");
const downloding = document.querySelector(".downloding");
let txt_title =  document.querySelector(".txt_title");
const btn_np = document.querySelector(".btn_np");

const btn_doc = document.querySelector(".btn_doc");


const downin = document.querySelector(".downin");

let barra_down = 0;




btn_cancel.addEventListener("click", ()=>{
    update.style.display = "none";
    update_page1.style.display = "none";
    update_download.style.display = "none";
    barra_down = 0;
})
btn_cancelpage1.addEventListener("click", ()=>{
    update.style.display = "none";
    update_page1.style.display = "none";
    update_download.style.display = "none";
    barra_down = 0;
})
btn_cancel_download.addEventListener("click",()=>{
    update.style.display = "none";
    update_page1.style.display = "none";
    update_download.style.display = "none";
    barra_down = 0;

})
btn_avan.addEventListener("click",()=>{
    update_page1.style.display = "block";
    


})
btn_atu.addEventListener("click",()=>{
    update.style.display = "block";
    txt_title.innerHTML = "Atualização"
    console.log("teste atu")

})
bnt_down.addEventListener("click", ()=>{
    update_download.style.display = "block"
    let interval = setInterval(()=>{
        barra_donwload();
        if(barra_down >= 100){
            clearInterval(interval);
            downloding.innerHTML = "Download Realizado Com Sucesso"

        }

    },100);
    
    
})

function barra_donwload(){

    barra_down++;
    
    downin.style.width = barra_down + "%";
}


btn_doc.addEventListener("click",()=>{
    update.style.display = "block";
    txt_title.innerHTML = "Documentos"
    
})
btn_np.addEventListener("click",()=>{
    update.style.display = "block";
    txt_title.innerHTML = "Nosso APP"
    
})

