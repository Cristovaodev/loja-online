var produto1 = 5
var produto2 = 6
var produto3 = 4
var produto4 = 6
var produto5 = 5
var produto6 = 8
var produto7 = 6
var produto8 = 7
var produto9 = 5
var produto10 = 8
var produto11 = 4
var produto12 = 4
var produto13 = 6
var produto14 = 7
var produto15 = 5
var produto16 = 8
var produto17 = 7
var produto18 = 9
var produto19 = 4
var produto20 = 7
var produto21 = 6
var produto22 = 9
var produto23 = 5
var produto24 = 4
var produto25 = 8
var produto26 = 6

function nome(){
  let nome = document.getElementById('nome').value;
  let contacto = document.getElementById('contacto').value;
  v_nome = nome.replace(/\d/ig, "")
  document.getElementById('nome').value = v_nome;
  
  v_contacto = contacto.replace(/\D/ig,"");
  document.getElementById('contacto').value = v_contacto;
}






function adicionar1() {
  let quantidade = parseInt(document.getElementById('quantidade1').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total1').innerHTML = (quantidade+1)*produto1+"R$";
    document.getElementById('quantidade1').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade1').innerHTML = 15;
  } else {
    document.getElementById('quantidade1').innerHTML = 15;
  }
}

function diminuir1() {
  let quantidade = parseInt(document.getElementById('quantidade1').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade1').innerHTML = quantidade-1;
    var total = (quantidade-1)*produto1;
    document.getElementById('total1').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade1').innerHTML = 1;
  } else {
    document.getElementById('quantidade1').innerHTML = 1;
  }
}

function adicionar2() {
  let quantidade = parseInt(document.getElementById('quantidade2').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total2').innerHTML = (quantidade+1)*produto2+"R$";
    document.getElementById('quantidade2').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade2').innerHTML = 15;
  } else {
    document.getElementById('quantidade2').innerHTML = 15;
  }
}
function diminuir2() {
  let quantidade = parseInt(document.getElementById('quantidade2').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade2').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto2;
    document.getElementById('total2').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade2').innerHTML = 1;
  } else {
    document.getElementById('quantidade2').innerHTML = 1;
  }
}

function adicionar3() {
  let quantidade = parseInt(document.getElementById('quantidade3').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total3').innerHTML = (quantidade+1)*produto3+"R$";
    document.getElementById('quantidade3').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade3').innerHTML = 15;
  } else {
    document.getElementById('quantidade3').innerHTML = 15;
  }
}

function diminuir3() {
  let quantidade = parseInt(document.getElementById('quantidade3').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade3').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto3;
    document.getElementById('total3').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade3').innerHTML = 1;
  } else {
    document.getElementById('quantidade3').innerHTML = 1;
  }
}

function adicionar4() {
  let quantidade = parseInt(document.getElementById('quantidade4').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total4').innerHTML = (quantidade+1)*produto4+"R$";
    document.getElementById('quantidade4').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade4').innerHTML = 15;
  } else {
    document.getElementById('quantidade4').innerHTML = 15;
  }
}
function diminuir4() {
  let quantidade = parseInt(document.getElementById('quantidade4').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade4').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto4;
    document.getElementById('total4').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade4').innerHTML = 1;
  } else {
    document.getElementById('quantidade4').innerHTML = 1;
  }
}

function adicionar5() {
  let quantidade = parseInt(document.getElementById('quantidade5').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total5').innerHTML = (quantidade+1)*produto5+"R$";
    document.getElementById('quantidade5').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade5').innerHTML = 15;
  } else {
    document.getElementById('quantidade5').innerHTML = 15;
  }
}
function diminuir5() {
  let quantidade = parseInt(document.getElementById('quantidade5').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade5').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto5;
    document.getElementById('total5').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade5').innerHTML = 1;
  } else {
    document.getElementById('quantidade5').innerHTML = 1;
  }
}

function adicionar6() {
  let quantidade = parseInt(document.getElementById('quantidade6').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total6').innerHTML = (quantidade+1)*produto6+"R$";
    document.getElementById('quantidade6').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade6').innerHTML = 15;
  } else {
    document.getElementById('quantidade6').innerHTML = 15;
  }
}
function diminuir6() {
  let quantidade = parseInt(document.getElementById('quantidade6').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade6').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto6;
    document.getElementById('total6').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade6').innerHTML = 1;
  } else {
    document.getElementById('quantidade6').innerHTML = 1;
  }
}

function adicionar7() {
  let quantidade = parseInt(document.getElementById('quantidade7').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total7').innerHTML = (quantidade+1)*produto7+"R$";
    document.getElementById('quantidade7').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade7').innerHTML = 15;
  } else {
    document.getElementById('quantidade7').innerHTML = 15;
  }
}
function diminuir7() {
  let quantidade = parseInt(document.getElementById('quantidade7').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade7').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto7;
    document.getElementById('total7').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade7').innerHTML = 1;
  } else {
    document.getElementById('quantidade7').innerHTML = 1;
  }
}

function adicionar8() {
  let quantidade = parseInt(document.getElementById('quantidade8').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total8').innerHTML = (quantidade+1)*produto8+"R$";
    document.getElementById('quantidade8').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade8').innerHTML = 15;
  } else {
    document.getElementById('quantidade8').innerHTML = 15;
  }
}
function diminuir8() {
  let quantidade = parseInt(document.getElementById('quantidade8').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade8').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto8;
    document.getElementById('total8').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade8').innerHTML = 1;
  } else {
    document.getElementById('quantidade8').innerHTML = 1;
  }
}

function adicionar9() {
  let quantidade = parseInt(document.getElementById('quantidade9').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total9').innerHTML = (quantidade+1)*produto9+"R$";
    document.getElementById('quantidade9').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade9').innerHTML = 15;
  } else {
    document.getElementById('quantidade9').innerHTML = 15;
  }
}
function diminuir9() {
  let quantidade = parseInt(document.getElementById('quantidade9').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade9').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto9;
    document.getElementById('total9').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade9').innerHTML = 1;
  } else {
    document.getElementById('quantidade9').innerHTML = 1;
  }
}

function adicionar10() {
  let quantidade = parseInt(document.getElementById('quantidade10').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total10').innerHTML = (quantidade+1)*produto10+"R$";
    document.getElementById('quantidade10').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade10').innerHTML = 15;
  } else {
    document.getElementById('quantidade10').innerHTML = 15;
  }
}
function diminuir10() {
  let quantidade = parseInt(document.getElementById('quantidade10').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade10').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto10;
    document.getElementById('total10').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade10').innerHTML = 1;
  } else {
    document.getElementById('quantidade10').innerHTML = 1;
  }
}

function adicionar11() {
  let quantidade = parseInt(document.getElementById('quantidade11').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total11').innerHTML = (quantidade+1)*produto11+"R$";
    document.getElementById('quantidade11').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade11').innerHTML = 15;
  } else {
    document.getElementById('quantidade11').innerHTML = 15;
  }
}
function diminuir11() {
  let quantidade = parseInt(document.getElementById('quantidade11').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade11').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto11;
    document.getElementById('total11').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade11').innerHTML = 1;
  } else {
    document.getElementById('quantidade11').innerHTML = 1;
  }
}

function adicionar12() {
  let quantidade = parseInt(document.getElementById('quantidade12').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total12').innerHTML = (quantidade+1)*produto12+"R$";
    document.getElementById('quantidade12').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade12').innerHTML = 15;
  } else {
    document.getElementById('quantidade12').innerHTML = 15;
  }
}
function diminuir12() {
  let quantidade = parseInt(document.getElementById('quantidade12').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade12').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto12;
    document.getElementById('total12').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade12').innerHTML = 1;
  } else {
    document.getElementById('quantidade12').innerHTML = 1;
  }
}

function adicionar13() {
  let quantidade = parseInt(document.getElementById('quantidade13').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total13').innerHTML = (quantidade+1)*produto13+"R$";
    document.getElementById('quantidade13').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade13').innerHTML = 15;
  } else {
    document.getElementById('quantidade13').innerHTML = 15;
  }
}
function diminuir13() {
  let quantidade = parseInt(document.getElementById('quantidade13').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade13').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto13;
    document.getElementById('total13').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade13').innerHTML = 1;
  } else {
    document.getElementById('quantidade13').innerHTML = 1;
  }
}

function adicionar14() {
  let quantidade = parseInt(document.getElementById('quantidade14').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total14').innerHTML = (quantidade+1)*produto14+"R$";
    document.getElementById('quantidade14').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade14').innerHTML = 15;
  } else {
    document.getElementById('quantidade14').innerHTML = 15;
  }
}
function diminuir14() {
  let quantidade = parseInt(document.getElementById('quantidade14').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade14').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto14;
    document.getElementById('total14').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade14').innerHTML = 1;
  } else {
    document.getElementById('quantidade14').innerHTML = 1;
  }
}

function adicionar15() {
  let quantidade = parseInt(document.getElementById('quantidade15').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total15').innerHTML = (quantidade+1)*produto15+"R$";
    document.getElementById('quantidade15').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade15').innerHTML = 15;
  } else {
    document.getElementById('quantidade15').innerHTML = 15;
  }
}
function diminuir15() {
  let quantidade = parseInt(document.getElementById('quantidade15').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade15').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto15;
    document.getElementById('total15').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade15').innerHTML = 1;
  } else {
    document.getElementById('quantidade15').innerHTML = 1;
  }
}

function adicionar16() {
  let quantidade = parseInt(document.getElementById('quantidade16').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total16').innerHTML = (quantidade+1)*produto16+"R$";
    document.getElementById('quantidade16').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade16').innerHTML = 15;
  } else {
    document.getElementById('quantidade16').innerHTML = 15;
  }
}
function diminuir16() {
  let quantidade = parseInt(document.getElementById('quantidade16').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade16').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto16;
    document.getElementById('total16').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade16').innerHTML = 1;
  } else {
    document.getElementById('quantidade16').innerHTML = 1;
  }
}

function adicionar17() {
  let quantidade = parseInt(document.getElementById('quantidade17').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total17').innerHTML = (quantidade+1)*produto17+"R$";
    document.getElementById('quantidade17').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade17').innerHTML = 15;
  } else {
    document.getElementById('quantidade17').innerHTML = 15;
  }
}
function diminuir17() {
  let quantidade = parseInt(document.getElementById('quantidade17').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade17').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto17;
    document.getElementById('total17').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade17').innerHTML = 1;
  } else {
    document.getElementById('quantidade17').innerHTML = 1;
  }
}

function adicionar18() {
  let quantidade = parseInt(document.getElementById('quantidade18').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total18').innerHTML = (quantidade+1)*produto18+"R$";
    document.getElementById('quantidade18').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade18').innerHTML = 15;
  } else {
    document.getElementById('quantidade18').innerHTML = 15;
  }
}

function diminuir18() {
  let quantidade = parseInt(document.getElementById('quantidade18').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade18').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto18;
    document.getElementById('total18').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade18').innerHTML = 1;
  } else {
    document.getElementById('quantidade18').innerHTML = 1;
  }
}




function adicionar19() {
  let quantidade = parseInt(document.getElementById('quantidade19').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total19').innerHTML = (quantidade+1)*produto19+"R$";
    document.getElementById('quantidade19').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade19').innerHTML = 15;
  } else {
    document.getElementById('quantidade19').innerHTML = 15;
  }
}
function diminuir19() {
  let quantidade = parseInt(document.getElementById('quantidade19').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade19').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto19;
    document.getElementById('total19').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade19').innerHTML = 1;
  } else {
    document.getElementById('quantidade19').innerHTML = 1;
  }
}

function adicionar20() {
  let quantidade = parseInt(document.getElementById('quantidade20').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total20').innerHTML = (quantidade+1)*produto20+"R$";
    document.getElementById('quantidade20').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade20').innerHTML = 15;
  } else {
    document.getElementById('quantidade20').innerHTML = 15;
  }
}
function diminuir20() {
  let quantidade = parseInt(document.getElementById('quantidade20').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade20').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto20;
    document.getElementById('total20').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade20').innerHTML = 1;
  } else {
    document.getElementById('quantidade20').innerHTML = 1;
  }
}

function adicionar21() {
  let quantidade = parseInt(document.getElementById('quantidade21').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total21').innerHTML = (quantidade+1)*produto21+"R$";
    document.getElementById('quantidade21').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade21').innerHTML = 15;
  } else {
    document.getElementById('quantidade21').innerHTML = 15;
  }
}
function diminuir21() {
  let quantidade = parseInt(document.getElementById('quantidade21').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade21').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto21;
    document.getElementById('total21').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade21').innerHTML = 1;
  } else {
    document.getElementById('quantidade21').innerHTML = 1;
  }
}

function adicionar22() {
  let quantidade = parseInt(document.getElementById('quantidade22').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total22').innerHTML = (quantidade+1)*produto22+"R$";
    document.getElementById('quantidade22').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade22').innerHTML = 15;
  } else {
    document.getElementById('quantidade22').innerHTML = 15;
  }
}
function diminuir22() {
  let quantidade = parseInt(document.getElementById('quantidade22').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade22').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto22;
    document.getElementById('total22').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade22').innerHTML = 1;
  } else {
    document.getElementById('quantidade22').innerHTML = 1;
  }
}

function adicionar23() {
  let quantidade = parseInt(document.getElementById('quantidade23').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total23').innerHTML = (quantidade+1)*produto23+"R$";
    document.getElementById('quantidade23').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade23').innerHTML = 15;
  } else {
    document.getElementById('quantidade23').innerHTML = 15;
  }
}
function diminuir23() {
  let quantidade = parseInt(document.getElementById('quantidade23').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade23').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto23;
    document.getElementById('total23').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade23').innerHTML = 1;
  } else {
    document.getElementById('quantidade23').innerHTML = 1;
  }
}

function adicionar24() {
  let quantidade = parseInt(document.getElementById('quantidade24').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total24').innerHTML = (quantidade+1)*produto24+"R$";
    document.getElementById('quantidade24').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade24').innerHTML = 15;
  } else {
    document.getElementById('quantidade24').innerHTML = 15;
  }
}
function diminuir24() {
  let quantidade = parseInt(document.getElementById('quantidade24').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade24').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto24;
    document.getElementById('total24').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade24').innerHTML = 1;
  } else {
    document.getElementById('quantidade24').innerHTML = 1;
  }
}

function adicionar25() {
  let quantidade = parseInt(document.getElementById('quantidade25').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total25').innerHTML = (quantidade+1)*produto25+"R$";
    document.getElementById('quantidade25').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade25').innerHTML = 15;
  } else {
    document.getElementById('quantidade25').innerHTML = 15;
  }
}
function diminuir25() {
  let quantidade = parseInt(document.getElementById('quantidade25').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade25').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto25;
    document.getElementById('total25').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade25').innerHTML = 1;
  } else {
    document.getElementById('quantidade25').innerHTML = 1;
  }
}

function adicionar26() {
  let quantidade = parseInt(document.getElementById('quantidade26').innerHTML);
  if (quantidade < 15) {
    document.getElementById('total26').innerHTML = (quantidade+1)*produto26+"R$";
    document.getElementById('quantidade26').innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade26').innerHTML = 15;
  } else {
    document.getElementById('quantidade26').innerHTML = 15;
  }
}
function diminuir26() {
  let quantidade = parseInt(document.getElementById('quantidade26').innerHTML);
  if (quantidade > 1) {
    document.getElementById('quantidade26').innerHTML = quantidade-1;
    let total = (quantidade-1)*produto26;
    document.getElementById('total26').innerHTML = total+"R$";
  } else if (quantidade == 1) {
    document.getElementById('quantidade26').innerHTML = 1;
  } else {
    document.getElementById('quantidade26').innerHTML = 1;
  }
}

function pedir(n){
  let quantidade = document.getElementById('quantidade'+n). innerHTML;
  let valor_total = document.getElementById('total'+n). innerHTML;
  
  nome = document.getElementById('nome').value;
  contacto = document.getElementById('contacto').value;
  npedido = document.getElementById('npedido'+n).innerHTML;
  
  pedindo = "Nome: "+nome+";%0AContacto: "+contacto+";%0APedido: "+npedido+";%0AQuantidade: "+quantidade+";%0AValor: "+valor_total;

  if((nome!="") && (contacto!="")){
  window.location.href="https://wa.me/258848556402?text="+pedindo;
  
  }
  else if((nome=="") && (contacto!="")){
    document.getElementById('nome').focus();document.getElementById('nome').style.borderColor = "red";
  }
  else if((nome!="") && (contacto=="")){
    document.getElementById('contacto').focus();
    document.getElementById('contacto').style.borderColor = "red";
  }
  else{
    document.getElementById('nome').focus();
    document.getElementById('nome').style.borderColor = "red";
    
    document.getElementById('contacto').style.borderColor = "red";
  }
}