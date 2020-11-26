let salario = 4000;
let salInss = 0;
let salFinal = 0;

switch (true) {
  case salario < 1556.94:
    salInss = salario - (salario * 0.08)
    break;
  case salario > 1556.94 && salario <= 2594.92:
    salInss = salario - (salario * 0.09)
    break;
  case salario > 2594.92 && salario <= 5189.82:
    salInss = salario - (salario * 0.11)
    break;
  case salario > 5189.82:
    salInss = salario - 570.88; 
    break;
}

switch (true) {
  case salInss < 1903.98:
    salFinal = salInss;
    break;
  case salInss > 1903.98 && salInss <= 2826.65:
    salFinal = (salInss - ((salInss * 0.075) - 142.80));
    break;
  case salInss > 2826.65 && salInss <= 3751.05:
    salFinal = (salInss - ((salInss * 0.15) - 354.80));
    break;
  case salInss > 3751.05 && salInss <= 4664.68:
    salFinal = (salInss - ((salInss * 0.225) - 636.13));
    break;
  case salInss > 4664.68:
    salFinal = (salInss - ((salInss * 0.275) - 869.36));
    break;
}
console.log(salFinal);
