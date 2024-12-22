let carrinho = [];
if(localStorage.getItem("carrinho") == null){
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

var jsonData = [{
  "nome": "Frango caprese",
  "img": "./img/frango-caprese.jpg",
  "preco": 5
},
  {
    "nome": "Canelone de ricota",
    "img": "./img/canelone-de-ricota-facil.jpg",
    "preco": 6
  },
  {
    "nome": "Carne seca na moranga",
    "img": "./img/carne-seca-na-moranga.png",
    "preco": 4
  },
  {
    "nome": "Salmão curado",
    "img": "./img/salmao-curado.jpg",
    "preco": 6
  },
  {
    "nome": "Costelinha com molho barbecue",
    "img": "./img/costelinha-com-molho-barbecue.jpg",
    "preco": 5
  },
  {
    "nome": "Carne de cordeiro com molho de vinho",
    "img": "./img/ensopado-de-cordeiro-com-molho-de-vinho.jpg",
    "preco": 8
  },
  {
    "nome": "Lombo assado com legumes",
    "img": "./img/lombo-assado-com-legumes.png",
    "preco": 6
  },
  {
    "nome": "Macarrão caprese",
    "img": "./img/macarrao-caprese-facil.jpg",
    "preco": 7
  },
  {
    "nome": "Peixe assado com legumes",
    "img": "./img/peixe-assado-com-legumes.jpg",
    "preco": 5
  },
  {
    "nome": "Empadinha de brocolis e palmito",
    "img": "./img/empadinha-de-brocolis-e-palmito.jpg",
    "preco": 8
  },
  {
    "nome": "Lasanha de berinjela e abobrinha",
    "img": "./img/lasanha-de-berinjela-e-abobrinha.jpg",
    "preco": 4
  },
  {
    "nome": "Lasanha de frango de frigideira",
    "img": "./img/lasanha-de-frango-de-frigideira.jpg",
    "preco": 4
  },
  {
    "nome": "Panqueca de carne moida",
    "img": "./img/panqueca-de-carne-moida-capa.jpg",
    "preco": 6
  },
  {
    "nome": "Panqueca de frango com requeijão",
    "img": "./img/panqueca-de-frango-com-requeijao.jpg",
    "preco": 7
  },
  {
    "nome": "Salada de lentilha",
    "img": "./img/salada-de-lentilha-facil.jpg",
    "preco": 5
  },
  {
    "nome": "Salada coreana de pepino",
    "img": "./img/salada-coreana-de-pepino.jpg",
    "preco": 8
  },
  {
    "nome": "Risoto de camarão",
    "img": "./img/risoto-de-camarao.jpg",
    "preco": 7
  },
  {
    "nome": "Nhoque recheado com queijo",
    "img": "./img/nhoque-recheado-com-queijo.jpg",
    "preco": 9
  },
  {
    "nome": "Quiche de milho e bacon",
    "img": "./img/quiche-de-milho-e-bacon.jpg",
    "preco": 4
  },
  {
    "nome": "Ravioli sem gluten",
    "img": "./img/ravioli-sem-gluten-pratico.jpg",
    "preco": 7
  },
  {
    "nome": "Canapes de pão de queijo",
    "img": "./img/canapes-de-pao-de-queijo.jpg",
    "preco": 6
  },
  {
    "nome": "Canapes de ricota com azeitona",
    "img": "./img/canapes-de-ricota-com-azeitona.jpg",
    "preco": 9
  },
  {
    "nome": "Bruschetta de tomate",
    "img": "./img/bruschetta-de-tomate.jpg",
    "preco": 5
  },
  {
    "nome": "Antepasto de berinjela picante",
    "img": "./img/antepasto-de-berinjela-picante.jpg",
    "preco": 4
  },
  {
    "nome": "Banoffee",
    "img": "./img/banoffee-facil.jpg",
    "preco": 6
  },
  {
    "nome": "Brigadeirao de nutella",
    "img": "./img/brigadeirao-de-nutella-facil.jpg",
    "preco": 3
  }]

var container = document.querySelector('#container');
var nomes = document.getElementsByClassName("npedido");
var imagens = document.getElementsByClassName("imagemProduto");
var diminuir = document.getElementsByClassName("diminuir");
var quantidade = document.getElementsByClassName("quantidade");
var aumentar = document.getElementsByClassName("aumentar");
var adicionarCarrinho = document.getElementsByClassName("pedir");
var finalizar = document.getElementById("finalizar");
var produtos = JSON.parse(JSON.stringify(jsonData));

document.addEventListener('DOMContentLoaded', function() {
  //console.log(produtos);
  //console.log(produtos[i].nome);
  for (i = 0; i < produtos.length; i++) {
    //imagens[i].setAttribute("src", produto[i].img);
    //nomes[i].innerText = produto[i].nome;
    var index = i;
    criarElemento(index, container, produtos[i].nome, produtos[i].img, produtos[i].preco);
  }
});

function criarElemento(index, container, nome, img, valor) {
  var sectionProdut = document.createElement("section"); //.setAttribute("class", "produto");

  var name = document.createElement("div");
  var image = document.createElement("img");
  var divAction = document.createElement("div");
  var remove = document.createElement("button");
  var quant = document.createElement("button");
  var add = document.createElement("button");
  var price = document.createElement("button");
  var cart = document.createElement("button");

  container.appendChild(sectionProdut);
  sectionProdut.appendChild(image);
  sectionProdut.appendChild(name);
  sectionProdut.appendChild(divAction);
  divAction.appendChild(remove);
  divAction.appendChild(quant);
  divAction.appendChild(add);
  divAction.appendChild(price);
  divAction.appendChild(cart);

  sectionProdut.setAttribute("class", "produto bg-gray-200");
  sectionProdut.setAttribute("data-aos", "fade-right");
  name.setAttribute("class", "nome text-base ml-3 mt-2 mb-4");
  image.setAttribute("class", "imagemProduto");
  divAction.setAttribute("class", "accoes text-gray-600 mb-4");
  remove.setAttribute("class", "diminuir text-gray-600 hover:bg-indigo-500");
  quant.setAttribute("class", "quantidade text-gray-600");
  add.setAttribute("class", "aumentar text-gray-600 hover:bg-indigo-500");
  price.setAttribute("class", "preco_total px-2 text-green-800 font-bold");
  cart.setAttribute("class", "pedir bg-indigo-500 rounded-md px-2 hover:bg-indigo-700 px-4");

  name.textContent = nome;
  image.src = img;
  remove.innerHTML = "<i class='fa-solid fa-minus'></i>";
  quant.textContent = "1";
  add.innerHTML = "<i class='fa-solid fa-plus'></i>";
  price.textContent = "$"+valor;
  cart.innerHTML = "<i class='fa-solid fa-cart-plus'></i>";

  remove.addEventListener("click", function() {
    index;
    valor;
    //alert(index);
    let quantidade = parseInt(document.getElementsByClassName('quantidade')[index].innerHTML);
    if (quantidade > 1) {
      document.getElementsByClassName('quantidade')[index].innerHTML = quantidade-1;
      document.getElementsByClassName('preco_total')[index].innerHTML = "$"+((quantidade-1)*valor);
    } else if (quantidade == 1) {
      document.getElementsByClassName('quantidade')[index].innerHTML = 1;
    } else {
        document.getElementsByClassName('quantidade')[index].innerHTML = 1;
    }
  });

  add.addEventListener("click", function() {
      index;
      valor;
      //alert(index);
      let quantidade = parseInt(document.getElementsByClassName('quantidade')[index].innerHTML);
  if (quantidade < 15) {
    document.getElementsByClassName('preco_total')[index].innerHTML = "$"+((quantidade+1)*valor);
    document.getElementsByClassName('quantidade')[index].innerHTML = (quantidade+1);
  } else if (quantidade == 15) {
    document.getElementById('quantidade')[index].innerHTML = 15;
  } else {
    document.getElementById('quantidade')[index].innerHTML = 15;
  }
      
  });

  cart.addEventListener("click", function() {
      i = index;
      n = parseInt(document.getElementsByClassName("quantidade")[i].innerText);
      //alert(n);
      addItem(produtos[i].nome, produtos[i].img, produtos[i].preco, n);
      //console.log(getLista());
  });
}

function nome() {
  let nome = document.getElementById('nome').value;
  let contacto = document.getElementById('contacto').value;
  v_nome = nome.replace(/\d/ig, "")
  document.getElementById('nome').value = v_nome;

  v_contacto = contacto.replace(/\D/ig, "");
  document.getElementById('contacto').value = v_contacto;
}

finalizar.addEventListener("click", function() {
  
  let lista = getLista();
  let ItensPedido = "*=========Pedidos=========*%0A%0A";
  let valor_total = 0;
  lista.forEach(item => {
    valor = (parseInt(item[2]) * parseInt(item[3]))
    ItensPedido = ItensPedido + "*Item:* " + item[0] + "%0A";
    ItensPedido = ItensPedido + "*Quantidade:* " + item[3] + "%0A";
    ItensPedido = ItensPedido + "*Preco:* $" + valor + "%0A%0A";
    
    valor_total = valor_total + valor;
  });
  //console.log(ItensPedido + "%0A" + valor_total);
  
  nome = document.getElementById('nome').value;
  contacto = document.getElementById('contacto').value;
  pedindo = "*Nome:* " + nome + "%0A*Contacto:* "+contacto + "%0A%0A" + ItensPedido + "%0A*Valor Total:* $" + valor_total;

  if ((nome != "") && (contacto != "")) {
    window.location.href = "https://wa.me/258848556402?text="+pedindo;
  } else if ((nome == "") && (contacto != "")) {
    document.getElementById('nome').focus(); document.getElementById('nome').style.borderColor = "red";
    openPanel();
  } else if ((nome != "") && (contacto == "")) {
    openPanel();
    document.getElementById('contacto').focus();
    document.getElementById('contacto').style.borderColor = "red";
  } else {
    openPanel();
    document.getElementById('nome').focus();
    document.getElementById('nome').style.borderColor = "red";
    document.getElementById('contacto').style.borderColor = "red";
  }
});

function openPanel() {
  let cartPanel = document.getElementById("cartPanel");
  cartPanel.classList.toggle("hidden");
  btnMobileMenu = document.getElementById("btn-mobile-menu");
  svgOpen = document.getElementById("open");
  //console.log(svgOpen.classList[2]);

  if (svgOpen.classList[2] == "hidden") {
    btnMobileMenu.click();
  }
}

function openMenu() {
  let menu = document.getElementById("mobile-menu").classList.toggle("hidden");
  let svgOpen = document.getElementById("open").classList.toggle("hidden");
  let svgClose = document.getElementById("close").classList.toggle("hidden");
}


function getLista() {
  return JSON.parse(localStorage.getItem("carrinho"));
}

function removeItem(i) {
  let lista = getLista();
  lista.splice(i, 1);
  localStorage.setItem("carrinho", JSON.stringify(lista));
  listar();
  
  //removerTodos = document.getElementById("removeAll");
  //removerTodos.addEventListener("click", () => {
  //  localStorage.deleteItem("carrinho");
  //  listar();
  //});
}

function addItem(nome, img, preco, n) {
  let lista = getLista();
  lista.push([nome, img, preco, n]);
  localStorage.setItem("carrinho", JSON.stringify(lista));
  listar()
  document.getElementById("alerta").classList.toggle("hidden");
  setTimeout(function(){
  document.getElementById("alerta").classList.toggle("hidden");
  }, 3000);
}

function listar() {
  let containerCart = document.getElementById("lista");
  let subtotal = document.getElementById("subtotal");
  let lista = getLista();
  let totalItem = 0;
  var elementos = "";
  
  if(lista.length != 0) {
    for (var i = 0; i < lista.length; i++) {
      elementos = elementos+"<li class='flex py-6'><div class='size-24 shrink-0 overflow-hidden rounded-md border border-gray-200' data-aos='fade-in'><img src='"+
      lista[i][1]+"' alt='"+lista[i][1]+"' class='size-full object-cover'></div><div class='ml-4 flex flex-1 flex-col'><div><div class='flex justify-between text-base font-medium text-gray-900'><h3><a href='#'>"+
      lista[i][0]+"</a></h3><p class='ml-4'>$"+
      (parseInt(lista[i][2])*parseInt(lista[i][3]))+".00</p></div><p class='mt-1 text-sm text-gray-500'></p></div><div class='flex flex-1 items-end justify-between text-sm'><p class='text-gray-500'>Qty "+
      lista[i][3]+"</p><div class='flex'><button type='button' class='font-medium text-red-600 hover:text-indigo-500' onclick='removeItem("+i+")'><i class='fa-solid fa-trash-can'></i></button></div></div></div></li>" ;
      //lista[i][0];lista[i][1];lista[i][2];lista[i][3];
      totalItem = (totalItem + (parseInt(lista[i][2])*parseInt(lista[i][3])));
    }
    containerCart.innerHTML = elementos;
    subtotal.textContent = "$"+totalItem+".00";
    
  }else{
    containerCart.textContent = "SEM NENHUM ITEM";
    subtotal.textContent = "$0.00";
    containerCart.className = "text-center";
  }
}

listar();