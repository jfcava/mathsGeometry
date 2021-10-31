function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputValor");
    const resultado = document.getElementById("resultadoFinalCuadrado");
    const ladoCuadrado = input.value;
        
    const perimetroCuadrado = ladoCuadrado * 4;
    resultado.innerHTML = perimetroCuadrado;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputValor");
    const resultado = document.getElementById("resultadoFinalCuadrado");
    const ladoCuadrado = input.value;
        
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    resultado.innerHTML = areaCuadrado;
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("ladoATriangulo");
    const lado2 = document.getElementById("ladoBTriangulo");
    const base = document.getElementById("baseTriangulo");
    const resultadoTriangulo = document.getElementById("resultadoFinalTriangulo");
   
    const perimetroTriangulo = Number(lado1.value) + Number(lado2.value) + Number(base.value);
    resultadoTriangulo.innerHTML = perimetroTriangulo;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("baseTriangulo");
    const altura = document.getElementById("alturaTriangulo");
    const resultadoTriangulo = document.getElementById("resultadoFinalTriangulo");
   
    const areaTriangulo = (Number(base.value) * Number(altura.value)) / 2;
    resultadoTriangulo.innerHTML = areaTriangulo;
}