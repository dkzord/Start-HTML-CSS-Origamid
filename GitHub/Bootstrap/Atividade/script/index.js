//No evento de foco modifique o background do input para amarelo.

function modificaFoco(){
    document.getElementById('caixa').style.background = 'yellow'
}

// Pega 

function perdeFoco(){

    var totalCampo = document.getElementById('caixa').value

    if( totalCampo.length < 3 && totalCampo.length != ""){
        document.getElementById('caixa').style.background = 'red'
    } else if(totalCampo.length > 3) {
        document.getElementById('caixa').style.background = 'green'
    } else{
        document.getElementById('caixa').style.background = 'none'
    }

}