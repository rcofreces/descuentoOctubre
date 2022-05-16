let precioUnitario: number = Number(prompt("Ingrese precio unitario"));
let cantidad: number = Number(prompt("Ingrese la cantidad"));
let mes: string = prompt("Ingrese el mes en que efectuó la compra");
let precioTotal: number = precioUnitario * cantidad;
let porcentajeDescuento: number = 0.15;
let descuento: number = precioTotal * porcentajeDescuento;
let precioConDescuento: number = precioTotal - descuento;

let octubre: string;

if (mes === "octubre") {
  console.log("El precio de su compra es:", precioConDescuento);
} else {
  console.log("El precio de su compra es:", precioTotal);
}
