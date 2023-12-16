var click = document.getElementById("xn")
click.addEventListener("click",getvalue)

function getvalue(event){
    event.preventDefault()
    var tuoi=document.getElementById("tuoi").value
    var ten=document.getElementById("ten").value
    var sdt=document.getElementById("sdt").value
    var gt=document.getElementById("gioi tinh").value
    var pas=document.getElementById("pas").value    
    console.log(ten)
console.log(tuoi)
console.log(sdt)
console.log(gt)
console.log(pas)
if(ten == ""  ||tuoi == "" || sdt == "" || pas ==""|| gt ==""){
    alert("Bạn đã nhập thiếu, xin hãy nhập lại!");
}else if(isNaN(tuoi)||isNaN(sdt)){
    alert("Sai thông tin về tuổi / sdt, xin hãy nhập lại!");
} else if(tuoi>100){
    alert("Hệ thống không xác định được tuổi của bạn")
}
else{ 
    window.location.href = "tth.html"

}
}
