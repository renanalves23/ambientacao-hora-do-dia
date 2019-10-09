function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  //var hora = 10
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora <12) {
    //Bom dia
    img.src = '../img/fotomanha.png'
    document.body.style.background = '#b0e986'
  }else if (hora >= 12 && hora <= 18) {
    //BOa tarde
    img.src = '../img/fototarde.png'
    document.body.style.background = '#366e0783'
  }else {
    //boa noite
    img.src = '../img/fotonoite.png'
    document.body.style.background = '#362727'
  }
}