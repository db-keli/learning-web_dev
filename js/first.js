alert("Hello World!");
document.getElementById("button").onclick = function() {
    document.getElementById("confirm").innerHTML = "Order Placed! Check Email";
    document.getElementById("button").style.display = "none";
}