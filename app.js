const products = [
  {
    id: 1,
    name: "Blazer Siena",
    category: "Mujer",
    style: "Formal",
    price: 74.99,
    description: "Blazer estructurado con caida ligera y acabado elegante para oficina o eventos.",
    label: "SIENA",
    image: "https://images.pexels.com/photos/9197350/pexels-photo-9197350.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Hoodie Atlas",
    category: "Unisex",
    style: "Urbano",
    price: 49.99,
    description: "Sudadera gruesa con interior suave, capucha amplia y silueta relajada.",
    label: "ATLAS",
    image: "https://images.pexels.com/photos/20248582/pexels-photo-20248582.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Vestido Marea",
    category: "Mujer",
    style: "Casual",
    price: 58.5,
    description: "Vestido midi fresco y versatil para planes de dia con un look natural.",
    label: "MAREA",
    image: "https://images.pexels.com/photos/15367484/pexels-photo-15367484.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name: "Camisa Lino Norte",
    category: "Hombre",
    style: "Formal",
    price: 42.75,
    description: "Camisa de lino transpirable con cuello limpio y botonadura discreta.",
    label: "LINO",
    image: "https://images.pexels.com/photos/19189082/pexels-photo-19189082.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    name: "Jogger Delta",
    category: "Unisex",
    style: "Deportivo",
    price: 36.9,
    description: "Jogger elastico con ajuste comodo, ideal para entrenar o salir ligero.",
    label: "DELTA",
    image: "https://images.pexels.com/photos/7325561/pexels-photo-7325561.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    name: "Chaqueta Terra",
    category: "Hombre",
    style: "Urbano",
    price: 69.4,
    description: "Chaqueta ligera con bolsillos frontales y tonos tierra de alta combinacion.",
    label: "TERRA",
    image: "https://images.pexels.com/photos/12480665/pexels-photo-12480665.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 7,
    name: "Top Aura",
    category: "Mujer",
    style: "Casual",
    price: 27.99,
    description: "Top suave de ajuste moderno para combinar con jeans, faldas o sastreria.",
    label: "AURA",
    image: "https://images.pexels.com/photos/13733519/pexels-photo-13733519.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 8,
    name: "Pantalon Frame",
    category: "Hombre",
    style: "Casual",
    price: 44.2,
    description: "Pantalon recto con textura suave y corte contemporaneo para diario.",
    label: "FRAME",
    image: "https://images.pexels.com/photos/14437343/pexels-photo-14437343.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 9,
    name: "Bomber Eclipse",
    category: "Unisex",
    style: "Urbano",
    price: 81.3,
    description: "Bomber con silueta marcada y presencia fuerte para elevar cualquier outfit.",
    label: "ECLIPSE",
    image: "https://images.pexels.com/photos/20421517/pexels-photo-20421517.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 10,
    name: "Falda Nova",
    category: "Mujer",
    style: "Casual",
    price: 35.5,
    description: "Falda de caida suave con movimiento ligero para looks frescos y faciles de combinar.",
    label: "NOVA",
    image: "https://images.pexels.com/photos/6236052/pexels-photo-6236052.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 11,
    name: "Abrigo Boreal",
    category: "Mujer",
    style: "Formal",
    price: 92.4,
    description: "Abrigo largo con presencia elegante y estructura limpia para dias frios con estilo.",
    label: "BOREAL",
    image: "https://images.pexels.com/photos/8879678/pexels-photo-8879678.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 12,
    name: "Crop Top Luna",
    category: "Mujer",
    style: "Urbano",
    price: 24.8,
    description: "Crop top moderno con silueta limpia para combinar con jeans, joggers o faldas.",
    label: "LUNA",
    image: "https://images.pexels.com/photos/20694291/pexels-photo-20694291.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 13,
    name: "Gabardina Alba",
    category: "Mujer",
    style: "Formal",
    price: 88.2,
    description: "Gabardina ligera de corte elegante que aporta presencia sin perder comodidad.",
    label: "ALBA",
    image: "https://images.pexels.com/photos/14686958/pexels-photo-14686958.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 14,
    name: "Jeans Costa",
    category: "Mujer",
    style: "Casual",
    price: 39.9,
    description: "Jeans rectos de tiro medio con acabado versatil para looks de diario.",
    label: "COSTA",
    image: "https://images.pexels.com/photos/4723149/pexels-photo-4723149.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 15,
    name: "Sudadera Pulse",
    category: "Hombre",
    style: "Deportivo",
    price: 41.6,
    description: "Sudadera comoda y funcional para entrenamiento ligero o salidas informales.",
    label: "PULSE",
    image: "https://images.pexels.com/photos/16955157/pexels-photo-16955157.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 16,
    name: "Polo Meridian",
    category: "Hombre",
    style: "Casual",
    price: 33.7,
    description: "Polo de textura suave con ajuste moderno para una apariencia relajada y limpia.",
    label: "MERIDIAN",
    image: "https://images.pexels.com/photos/8114138/pexels-photo-8114138.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 17,
    name: "Blazer Origen",
    category: "Hombre",
    style: "Formal",
    price: 86.5,
    description: "Blazer masculino con lineas definidas y caracter sofisticado para eventos o trabajo.",
    label: "ORIGEN",
    image: "https://images.pexels.com/photos/18031036/pexels-photo-18031036.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 18,
    name: "Chaleco Axis",
    category: "Hombre",
    style: "Formal",
    price: 46.9,
    description: "Chaleco estructurado ideal para elevar conjuntos de camisa, pantalon o traje ligero.",
    label: "AXIS",
    image: "https://images.pexels.com/photos/14437343/pexels-photo-14437343.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 19,
    name: "Parka Grisall",
    category: "Hombre",
    style: "Urbano",
    price: 78.3,
    description: "Parka urbana con actitud contemporanea y proteccion ligera para clima variable.",
    label: "GRISALL",
    image: "https://images.pexels.com/photos/14149235/pexels-photo-14149235.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 20,
    name: "Set Comfy Air",
    category: "Unisex",
    style: "Deportivo",
    price: 57.2,
    description: "Conjunto athleisure suave y flexible para moverte con comodidad durante todo el dia.",
    label: "AIR",
    image: "https://images.pexels.com/photos/7325561/pexels-photo-7325561.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 21,
    name: "Camiseta Base One",
    category: "Unisex",
    style: "Casual",
    price: 19.9,
    description: "Camiseta esencial de algodon con corte limpio para usar sola o en capas.",
    label: "BASE",
    image: "https://images.pexels.com/photos/35259721/pexels-photo-35259721.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 22,
    name: "Conjunto Metro",
    category: "Unisex",
    style: "Urbano",
    price: 64.4,
    description: "Set de prendas urbanas pensado para destacar en la ciudad con comodidad visual.",
    label: "METRO",
    image: "https://images.pexels.com/photos/7325252/pexels-photo-7325252.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 23,
    name: "Pantalon Move",
    category: "Unisex",
    style: "Deportivo",
    price: 37.8,
    description: "Pantalon deportivo flexible con ajuste ligero para caminatas, gym o uso diario.",
    label: "MOVE",
    image: "https://images.pexels.com/photos/10438438/pexels-photo-10438438.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 24,
    name: "Sobrecamisa Ruta",
    category: "Unisex",
    style: "Casual",
    price: 48.6,
    description: "Sobrecamisa relajada para llevar abierta sobre camisetas o tops basicos.",
    label: "RUTA",
    image: "https://images.pexels.com/photos/10438452/pexels-photo-10438452.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 25,
    name: "Vestido Aura Nocturna",
    category: "Mujer",
    style: "Formal",
    price: 95.9,
    description: "Vestido elegante para noches especiales con silueta refinada y gran presencia.",
    label: "NOCTURNA",
    image: "https://images.pexels.com/photos/13364876/pexels-photo-13364876.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 26,
    name: "Campera Nexo",
    category: "Unisex",
    style: "Urbano",
    price: 73.5,
    description: "Campera moderna con caracter street y un acabado pensado para uso diario.",
    label: "NEXO",
    image: "https://images.pexels.com/photos/7759856/pexels-photo-7759856.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 27,
    name: "Pantalon Sastrero Line",
    category: "Mujer",
    style: "Formal",
    price: 52.4,
    description: "Pantalon de vestir de pierna amplia con un perfil elegante y contemporaneo.",
    label: "LINE",
    image: "https://images.pexels.com/photos/8989593/pexels-photo-8989593.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 28,
    name: "Camiseta Active Run",
    category: "Hombre",
    style: "Deportivo",
    price: 26.5,
    description: "Camiseta deportiva transpirable para actividad ligera y uso casual comodo.",
    label: "RUN",
    image: "https://images.pexels.com/photos/8915387/pexels-photo-8915387.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 29,
    name: "Vestido Solstice",
    category: "Mujer",
    style: "Casual",
    price: 54.7,
    description: "Vestido comodo y luminoso para dias relajados, salidas y planes de fin de semana.",
    label: "SOLSTICE",
    image: "https://images.pexels.com/photos/5447905/pexels-photo-5447905.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 30,
    name: "Pantalon Urbis",
    category: "Hombre",
    style: "Urbano",
    price: 47.3,
    description: "Pantalon urbano de presencia fuerte para combinar con chaquetas, polos y tenis.",
    label: "URBIS",
    image: "https://images.pexels.com/photos/15598641/pexels-photo-15598641.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const storageKey = "atelier-norte-cart";
let cart = JSON.parse(localStorage.getItem(storageKey) || "[]");

const productsGrid = document.getElementById("products-grid");
const productTemplate = document.getElementById("product-card-template");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const styleFilter = document.getElementById("style-filter");
const sortFilter = document.getElementById("sort-filter");

const cartToggle = document.getElementById("cart-toggle");
const closeCart = document.getElementById("close-cart");
const cartPanel = document.getElementById("cart-panel");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartShipping = document.getElementById("cart-shipping");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-button");

function formatPrice(value) {
  return new Intl.NumberFormat("es-BO", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function saveCart() {
  localStorage.setItem(storageKey, JSON.stringify(cart));
}

function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const style = styleFilter.value;
  const sort = sortFilter.value;

  const filtered = products.filter((product) => {
    const matchesQuery =
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);
    const matchesCategory = category === "all" || product.category === category;
    const matchesStyle = style === "all" || product.style === style;
    return matchesQuery && matchesCategory && matchesStyle;
  });

  switch (sort) {
    case "low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => a.id - b.id);
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productsGrid.innerHTML = "";

  if (!filtered.length) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No encontramos prendas con esos filtros.</h3>
        <p>Prueba otra categoria, estilo o termino de busqueda.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((product) => {
    const clone = productTemplate.content.cloneNode(true);
    const card = clone.querySelector(".product-card");
    const image = clone.querySelector(".product-image");
    const photo = clone.querySelector(".product-photo");
    const category = clone.querySelector(".product-category");
    const style = clone.querySelector(".product-style");
    const name = clone.querySelector(".product-name");
    const description = clone.querySelector(".product-description");
    const price = clone.querySelector(".product-price");
    const button = clone.querySelector(".add-to-cart");

    image.dataset.label = product.label;
    photo.src = product.image;
    photo.alt = `${product.name} - ${product.category} - ${product.style}`;
    category.textContent = product.category;
    style.textContent = product.style;
    name.textContent = product.name;
    description.textContent = product.description;
    price.textContent = formatPrice(product.price);
    button.dataset.id = String(product.id);

    card.dataset.id = String(product.id);
    productsGrid.appendChild(clone);
  });
}

function updateCartTotals() {
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 8.99 : 0;
  const total = subtotal + shipping;

  cartCount.textContent = String(quantity);
  cartSubtotal.textContent = formatPrice(subtotal);
  cartShipping.textContent = formatPrice(shipping);
  cartTotal.textContent = formatPrice(total);
}

function renderCart() {
  cartItems.innerHTML = "";

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <h3>Tu carrito esta vacio.</h3>
        <p>Agrega productos desde el catalogo para verlos aqui.</p>
      </div>
    `;
    updateCartTotals();
    return;
  }

  cart.forEach((item) => {
    const container = document.createElement("article");
    container.className = "cart-item";
    container.innerHTML = `
      <div class="cart-item-image" aria-hidden="true"></div>
      <div>
        <h3>${item.name}</h3>
        <p>${item.category} - ${item.style}</p>
        <strong>${formatPrice(item.price)}</strong>
        <div class="quantity-controls">
          <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Restar cantidad">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="increase" data-id="${item.id}" aria-label="Sumar cantidad">+</button>
        </div>
        <button class="remove-button" type="button" data-action="remove" data-id="${item.id}">Eliminar</button>
      </div>
      <strong>${formatPrice(item.price * item.quantity)}</strong>
    `;
    cartItems.appendChild(container);
  });

  updateCartTotals();
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  renderCart();
  openCart();
}

function changeQuantity(productId, action) {
  const item = cart.find((product) => product.id === productId);
  if (!item) return;

  if (action === "increase") {
    item.quantity += 1;
  } else if (action === "decrease") {
    item.quantity -= 1;
  } else if (action === "remove") {
    item.quantity = 0;
  }

  cart = cart.filter((product) => product.quantity > 0);
  saveCart();
  renderCart();
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
}

function attachEvents() {
  [searchInput, categoryFilter, styleFilter, sortFilter].forEach((element) => {
    element.addEventListener("input", renderProducts);
    element.addEventListener("change", renderProducts);
  });

  productsGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".add-to-cart");
    if (!button) return;
    addToCart(Number(button.dataset.id));
  });

  cartItems.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    changeQuantity(Number(target.dataset.id), target.dataset.action);
  });

  cartToggle.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartPanel);
  overlay.addEventListener("click", closeCartPanel);

  checkoutButton.addEventListener("click", () => {
    if (!cart.length) {
      window.alert("Tu carrito esta vacio. Agrega al menos un producto.");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 8.99;
    window.alert(`Compra simulada completada por ${formatPrice(total)}. Puedes conectar este boton a tu pasarela de pago.`);
  });
}

renderProducts();
renderCart();
attachEvents();
