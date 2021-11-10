const orangeColor = "#ED3E0C"
const whiteColor = "#F2F2F2"

const Main={

    init: function(){
        this.cacheSelectors()
        this.bindEvents();

    },

    cacheSelectors: function(){
        this.$emailForm = document.querySelector('#emailForm')
        this.$msgForm = document.querySelector('#mensagemMsg')
        this.$btnForm = document.querySelector('#btn-form')
        this.$spanIncorreto = document.querySelector(".campos-incorretos")
        this.$spanCorreto = document.querySelector(".msg-enviada")
        this.$imagensScrollar = document.querySelectorAll(".box-trabalho")
    },

    bindEvents: function(){

        const selfBindEvents = this

        this.$btnForm.onclick = selfBindEvents.events.verificaCampos  //valida os campos do formulario  

        window.addEventListener('scroll', this.events.ativaNoScroll) //faz a aparição das 4 imagens da section trabalhos
    },

    events:{

        verificaCampos:function(e){
            const selfEvents = Main
            
            let inputEmailValue = selfEvents.$emailForm.value
            let inputMsgValue = selfEvents.$msgForm.value

            inputEmailValue.replace(/\s/g,'')
            inputMsgValue.replace(/\s/g,'')

            if(inputEmailValue == "" && inputMsgValue == ""){
                selfEvents.$emailForm.style.borderColor='red'
                selfEvents.$msgForm.style.borderColor='red'
            }else if(inputEmailValue == ""){
                selfEvents.$emailForm.style.borderColor='red'
                selfEvents.$msgForm.style.borderColor='green'
            }else if(inputMsgValue == ""){
                selfEvents.$msgForm.style.borderColor='red'
                selfEvents.$emailForm.style.borderColor='green'
            }else{
                selfEvents.$emailForm.style.borderColor='green'
                selfEvents.$msgForm.style.borderColor='green'
            }

            selfEvents.events.verificaCampoEmail()

            if(selfEvents.$emailForm.style.borderColor == 'red' || selfEvents.$msgForm.style.borderColor=='red'){
                selfEvents.$spanIncorreto.classList.add('visible')

                setTimeout(function(){
                    selfEvents.$spanIncorreto.classList.remove('visible')
                },5000)
            } else{
                selfEvents.$spanCorreto.classList.add('visible')

                setTimeout(function(){
                    selfEvents.$spanCorreto.classList.remove('visible')
                },5000)
            }
        },

        verificaCampoEmail(){
            const selfEvents = Main

            let strEmail = selfEvents.$emailForm.value.indexOf('@')
            if(strEmail == "-1"){
                selfEvents.$emailForm.style.borderColor='red'
            }else{
                selfEvents.$emailForm.style.borderColor='green'
            }
        },

        ativaNoScroll(){

            const selfEvents = Main
            selfEvents.$imagensScrollar.forEach(img => {
                if(img.getBoundingClientRect().top < window.innerHeight){
                    img.classList.add("visivel")
                }
            })
        }
    }
}

Main.init()