window.onload = function() {

    /*variaveis*/
    var fb = document.getElementsByClassName("LinkRedesSociais")[0];
    var tt = document.getElementsByClassName("LinkRedesSociais")[1];
    var insta = document.getElementsByClassName("LinkRedesSociais")[2];

    /*muda os icones de redes sociais quando mouse passa por cima deles*/
    function trocaIcone(qualIcone){
        let detetive = qualIcone;
        if(detetive == fb){
            qualIcone.innerHTML = "<img class='iconRedesSociais' src='imagens/facebookIconAlternative.png' alt='Facebook'>";
        }else if(detetive == tt){
            qualIcone.innerHTML = "<img class='iconRedesSociais' src='imagens/twitterIconAlternative.png' alt='Twitter'>"
        }else{
            qualIcone.innerHTML = "<img class='iconRedesSociais' src='imagens/instagramIconAlternative.png' alt='Instagram'>"
        }
    }

    function IconeCorOriginal(){
        if(fb){
            console.log("sai do fb");
            qualIcone.innerHTML = "<img class='iconRedesSociais' src='imagens/facebookIcon.png' alt='Facebook'>";
        }else if(tt){
            console.log("sai do tt");
            qualIcone.innerHTML = "<img class='iconRedesSociais' src='imagens/twitterIcon.png' alt='Twitter'>"
        }else{
            console.log("sai do insta");
            qualIcone.innerHTML = "<img class='iconRedesSociais' src='imagens/instagramIcon.png' alt='Instagram'>"
        }
    }

                                                                        /*Escutador de eventos*/

    /*Evento de hover do mouse para trocar a cor do incone*/
    fb.addEventListener("mouseover", function(){trocaIcone(fb)},false);  
    tt.addEventListener("mouseover", function(){trocaIcone(tt)},false);
    insta.addEventListener("mouseover", function(){trocaIcone(insta)},false); 
}