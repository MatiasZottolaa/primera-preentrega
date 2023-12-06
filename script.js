const productos = {
    1: { nombre: "Vanitory", precio: 220000 },
    2: { nombre: "Mesa Comedor", precio: 350000 },
    3: { nombre: "Escritorio", precio: 28000 },
    4: { nombre: "sillas", precio: 50000 },
    5: { nombre: "Placard", precio: 150000 },
  };
  
  const seleccionados = [];
  do {
    const seleccion = prompt(
      "Ingrese el número del producto que desea comprar (0 para finalizar): \n [1] Polo = $22 \n [2] Jersey = $35 \n [3] Pantalon = $28 \n [4] Zapatos = $40 \n [5] Gorra = $15");
    if (seleccion === "0") {
      break;
    }
    const seleccionInt = parseInt(seleccion);
    if (seleccionInt in productos) {
      seleccionados.push(seleccionInt);
    } else {
      alert("Producto inválido.");
    }
  } while (true);

  let total = 0;
  for (const seleccion of seleccionados) {
    total += productos[seleccion].precio;
  }
  alert(`El total de su compra es: $${total}`);
  1;