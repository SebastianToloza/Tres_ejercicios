function busqueda(){
    const inputText=document.getElementById("Input").value.toLowerCase();
    const DatosResultado= document.querySelectorAll(".buscar");
    let count=0;
    
    if(inputText.value==""){
        alert("Escriba algo en el buscador");
    }
    else{
        DatosResultado.forEach((item) => {
            let itemText = item.textContent;

            if (itemText.toLowerCase().includes(inputText)) {
                item.style.display = "";
                count++;
            } else {
                item.style.display = "none"; 
            }
        });

    }
}