const elementos = [
    { nombre: "Elemento A", color: "Rojo", tamaño: "Grande", forma: "Circular" },
    { nombre: "Elemento B", color: "Azul", tamaño: "Mediano", forma: "Cuadrada" },
    { nombre: "Elemento C", color: "Verde", tamaño: "Pequeño", forma: "Triangular" },
    { nombre: "Elemento D", color: "Amarillo", tamaño: "Grande", forma: "Ovalada" },
    { nombre: "Elemento E", color: "Naranja", tamaño: "Mediano", forma: "Rectangular" },
    { nombre: "Elemento F", color: "Rosa", tamaño: "Pequeño", forma: "Estrella" },
    { nombre: "Elemento G", color: "Gris", tamaño: "Grande", forma: "Rombo" },
    { nombre: "Elemento H", color: "Celeste", tamaño: "Mediano", forma: "Trapecio" },
    { nombre: "Elemento I", color: "Negro", tamaño: "Pequeño", forma: "Hexágono" }
  ];
  
  const contenedor = document.getElementById("contenedor");
  
  elementos.map((el) => {
    const div = document.createElement("div");
    div.className = "elemento";
    div.innerHTML = `
      <h3>${el.nombre}</h3>
      <p>Color: ${el.color}</p>
      <p>Tamaño: ${el.tamaño}</p>
      <p>Forma: ${el.forma}</p>
    `;
    contenedor.appendChild(div);
  });
  