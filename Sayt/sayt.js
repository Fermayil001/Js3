document.querySelectorAll(".passiv").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".overlay").style.display = "block";
        let url = item.previousElementSibling.getAttribute("src");
        document.getElementById("foto").setAttribute("src", url);
        document.getElementById("client").innerText = item.parentElement.nextElementSibling.children[0].innerText;
        document.getElementById("category").innerText = item.parentElement.nextElementSibling.children[1].innerText;
    });
});

function remove() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}

document.querySelector(".overlay").addEventListener("click", remove);