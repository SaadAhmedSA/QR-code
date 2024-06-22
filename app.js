let image = document.getElementById("image")
let input = document.getElementById("input")
function generate(){
    if(input.value.length>0){
      image.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value 
      image.style.display="inline"
      image.style.paddingLeft= "15%"
      input.value= " " 
    }else{
        Swal.fire({
            icon: "error",
            title: "Enter text or URL"
          });
    }
}