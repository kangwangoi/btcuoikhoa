var click = document.getElementById("xacn")
click.addEventListener("click",getvalue)
function getvalue(event){
    event.preventDefault()
    var tg=document.getElementById("tg").value
    console.log(tg)
    if(tg == ""){
        alert("xin vui lòng nhập vấn đề bạn cần trợ giúp vào khung");
    } else{
        window.location.href = "ok.html"
    }
}