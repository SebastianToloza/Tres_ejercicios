console.log("hola")




function aplicar(){

    let agregar=document.createElement("li");   
    let Lista=document.getElementById("lista");

    let agregar_button=document.createElement("button");
    agregar_button.textContent="Eliminar";

    let agregar_button2=document.createElement("button");
    agregar_button2.textContent="completar";


    
    let inputText=document.getElementById("Nombre");
    let texto=document.createTextNode(inputText.value);
    
    

    if(inputText.value==""){
        alert("Agrege alguan tarea")

    }
    else{
        agregar.appendChild(agregar_button2);

        Lista.appendChild(agregar);
        agregar.appendChild(texto);
        agregar.setAttribute("class","atributo");
        agregar_button.setAttribute("class","Eliminar");
        agregar_button2.setAttribute("class","completar");



        agregar.appendChild(agregar_button);

        
        inputText.value="";
        verficar=false


        
        agregar_button.addEventListener("click",function() {
            
            Lista.removeChild(agregar);


        })
        agregar_button2.addEventListener("click",function(){
            if(verficar==false){
                agregar.style.border="2px solid"
                agregar.style.backgroundColor="rgba(91, 246, 119, 0.353)"
                verficar=true

            }
            else{
                agregar.style.border = "";
                agregar.style.backgroundColor = "";
                verficar = false;
            }
            
        })
        inputTarea.addEventListener("keydown", function (event) {
            if (event.key == "Enter") { 
                event.preventDefault();   
                aplicar();           
            }
        });

        
    }   
    
}



