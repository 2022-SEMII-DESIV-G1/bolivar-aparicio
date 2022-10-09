var text;
document.getElementById("output").addEventListener("click", clean);

function clean(){
    document.getElementById("text").value = " ";
}

function send(){
    text = document.getElementById("text").value;
   // console.log(text);

    function contarCaracteres(cadena) 
    {
        var cont=[];                                  //inicializar el contador
        ncad=cadena.split('');                        //dividir la cadena en caracteres
            for (var i = 0; i < cadena.length; i++) {     //recorrer la cadena
            letra=ncad[i].charCodeAt();                 //pasar cada letra a código ascii
            //antes de sumarlo verificar si ya existe en cont, de no ser así inicializarlo
            cont[letra]==undefined ? cont[letra]=1 : cont[letra]++  
            };
        total={};                                     //para guardar el resultado
            for (var i in cont)                           //recorrer el contador
            total[String.fromCharCode(i)]=cont[i];      //pasar el caracter de ascii a string y pasarle la cantidad
            return total;
        
    }
    console.log(contarCaracteres(text));
    
}

