var cadena,acumulado;
document.getElementById("output").addEventListener("click", clean);

function clean(){
    document.getElementById("text").value = " "
    document.getElementById("output").innerHTML = "";
}

function send(){
    cadena = document.getElementById("text").value;
    acumulado=(contarCaracteres(cadena));
    function contarCaracteres() {
        const texto = document.getElementById('text').
        value.trim().toLowerCase().split('');
        const repeticiones = {};
        texto.forEach( ( letra ) => {
          repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
        });
        for( let letra in repeticiones ) {
          const text = `${ letra } = ${ repeticiones[ letra ] }<br>`;
          document.getElementById('output').innerHTML += text;
        }
    
    }
  
  
  }