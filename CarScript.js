var divcont = document.getElementsByClassName('cover__container');
var createdDiv = document.createElement('div');
createdDiv.innerHTML="<img id=car src='https://svgsilh.com/svg/2387235.svg' usemap=#Map>" 

divcont[0].appendChild(createdDiv)

var imgd = document.getElementById('car')

var imgd2 = document.createElement('map')
imgd2.setAttribute('id','Map')
imgd2.innerHTML = "<area alt=2 id=wheel1 title=Колеса shape=rect coords=232,510,526,815 />\
    <area alt=2  id=wheel2 title=Тразмиссия  shape=rect coords=1223,504,1480,829 />\
    <area alt=2 id=chasis title=Шасси  shape=rect coords=595,586,1134,750 />\
    <area  alt=2 id=engine title=Двигатель  shape=rect coords=34,282,175,701 />\
    <area  alt=2 id=carcass title=Кузов h shape=rect coords=447,78,1644,414 />"

imgd.appendChild(imgd2)

var carWheel1 = document.getElementById('wheel1')
var carWheel2 = document.getElementById('wheel2')
var carChassis = document.getElementById('chasis')
var carEngine = document.getElementById('engine')
var carCarcass = document.getElementById('carcass')

carWheel1.onclick = function()
{
    var productID =371721524
    Ecwid.Cart.addProduct(productID, function(success, product, cart)
        {
            console.log(success); // true or false
            console.log(product.name);
        });
}

carWheel2.onclick = function()
{
  var productID =371649389
  Ecwid.Cart.addProduct(productID, function(success, product, cart)
      {
          console.log(success); // true or false
          console.log(product.name);
      });
}

carChassis.onclick = function()
{
  var productID =371657617
  Ecwid.Cart.addProduct(productID, function(success, product, cart)
      {
          console.log(success); // true or false
          console.log(product.name);
      });
}

carEngine.onclick = function()
{
  var productID =371662644
  Ecwid.Cart.addProduct(productID, function(success, product, cart)
      {
      console.log(success); // true or false
  console.log(product.name)
      });
}

carCarcass.onclick = function()
{
  var productID =371657619
  Ecwid.Cart.addProduct(productID, function(success, product, cart)
      {
          console.log(success); // true or false
          console.log(product.name);
      });
}



Ecwid.OnCartChanged.add(function(cart)
{
    console.log(cart)
    if(cart.items.length == 5)
    {
        var divCar  = document.getElementById('car')
        divCar.remove()
        alert('ВЫ собрали машину')
    }
});
