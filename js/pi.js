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


function slider_auto(){
    
    
    btn_slider.forEach(bnt => bnt.style.background = "");
    btn_slider[btn_status].click();
    btn_slider[btn_status].style.background = "#F39C12";
    
    if(btn_status === 0){
        titulo.innerHTML = "FUCIONALIDADES DO SISTEMA";
        paragrafo.innerHTML = "O sistema de automação de processos empresariais foi desenvolvido pensando em aumentar a eficiência organizacional, otimizar tarefas repetitivas, a plataforma oferece integração com diversas ferramentas, garantindo uma gestão centralizada e ágil. ";
        list.innerHTML = "Visão Geral em Tempo Real\n Personalização do Sistema\n Automação Robótica de Processos\n Modelagem de Processos\n Relatórios Personalizados";
    }else if(btn_status === 1){
        titulo.innerHTML = "CONSULTORIA ESPECIALIZADA";
        paragrafo.innerHTML = "Com foco voltado em otimizar a eficiência, reduzir custos e melhorar a qualidade das operações dentro de uma empresa, oferecemos todo o suporte necessário para o crescimento junto ao nosso sistema. ";
        list.innerHTML = "Análise de Necessidades\n Seleção de Ferramentas\n Desenho de Soluções\n Implementação e Integração\n Treinamento e Capacitação\n Monitoramento  e Suporte\n Otimização Contínua";
    }else if(btn_status === 2){
        titulo.innerHTML = "Garantindo Eficiência e Segurança Operacional";
        paragrafo.innerHTML = "O sistema foi desenvolvido buscando altas taxas de disponibilidade, assegurando a precisão na execução dos processos e oferece robustez contra falhas. Com a capacidade de ser escalável, ou seja, acompanha todo o crescimento da empresa.";
        list.innerHTML = "Disponibilidade\n Precisão e consistência\n Tolerância a falhas\n Estabilidade\n Segurança\n Auditoria e monitoramento";
    }


    btn_status++;
    if(btn_status === 3){
        btn_status = 0;
    }
}
setInterval(slider_auto,4000);