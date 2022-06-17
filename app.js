let texto=document.getElementsByClassName("texto")

titulo.innerText="Tienda oficial de la F1 2022"

let parrafo= document.createElement(`p`)

parrafo.innerText="A continuacion se muestran los 4 productos a elegir"


let deposito = [
  {
    sku: 1,
    name: "Gorra de Red Bull",
    price: 2500,
    img: "./fotos/gorra.jpg"  
  },
  {
    sku: 2,
    name: "Remera de Ferrari",
    price: 8000,
    img: "./fotos/gorra.jpg" 
  },
  {
    sku: 3,
    name: "Campera de Mclaren",
    price: 25000,
    img:"./fotos/gorra.jpg" 
  },
  {
    sku: 4,
    name: "Zapatillas de Mercedes Benz",
    price: 18500,
    img:"./fotos/gorra.jpg" 
  },
];

const productsContainer=document.querySelector("#products-container")

deposito.forEach((element) => {
  
  const div = document.createElement(`div`)

  div.innerHTML= `<h3>${deposito.sku}</h3>
                 <p> ${deposito.name}</p>
                 <img src=${deposito.img}/>
                 <hr>
                 `  
  productsContainer.append(div)
});













