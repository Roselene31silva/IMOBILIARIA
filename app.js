function fnIdiomaPortuges(){
    document.getElementById("menu1").innerText = "Inicial";
    document.getElementById("menu2").innerText = "Imóveis";
    document.getElementById("menu3").innerText = "Sobre nós";
    document.getElementById("menu4").innerText = "Contato";
}

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "Home";
    document.getElementById("menu2").innerText = "";
    document.getElementById("menu3").innerText = "";
    document.getElementById("menu4").innerText = "Contact";
}

function fnBanner(){
    document.getElementById("banner").src="imagens/banner.jpg"
}

function fnMostrarHoraAtual(){
    let agora = new Date()
    let horaFormatada = agora.toLocaleTimeString()
    alert("Hora atual: " + horaFormatada)
}

function fnRegistrarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    let informaçõesCompleta = nome + "-" = email + "br" + mensagem
    document.getElementById("informações"). innerHTML = informaçõesCompleta

    Document.getElementById("nome").value = ""
    Document.getElementById("email").value = ""
    Document.getElementById("mensagem").value = ""
    Document.getElementById("").value = ""
}
