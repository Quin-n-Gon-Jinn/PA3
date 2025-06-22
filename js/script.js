// script.js

// Datos de productos con imagen
const productos = [
  {
    id: 1,
    nombre: "Laptop Gamer",
    precio: 3200,
    imagen: "img/laptop.png"
  },
  {
    id: 2,
    nombre: "Mouse Inalámbrico",
    precio: 120,
    imagen: "img/mouse.png"
  },
  {
    id: 3,
    nombre: "Teclado Mecánico",
    precio: 300,
    imagen: "img/teclado.png"
  },
  {
    id: 4,
    nombre: "Monitor 24\"",
    precio: 750,
    imagen: "img/monitor.png"
  }
];

let carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const total = document.getElementById("total");
const btnVaciar = document.getElementById("vaciar-carrito");
const mensajeVacio = document.getElementById("mensaje-vacio");

function mostrarProductos() {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: S/ ${producto.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    `;

    contenedorProductos.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let totalCarrito = 0;

  if (carrito.length === 0) {
    mensajeVacio.style.display = "block";
  } else {
    mensajeVacio.style.display = "none";
  }

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - S/ ${item.precio.toFixed(2)}`;
    listaCarrito.appendChild(li);
    totalCarrito += item.precio;
  });

  total.textContent = `S/ ${totalCarrito.toFixed(2)}`;
}

btnVaciar.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

mostrarProductos();
