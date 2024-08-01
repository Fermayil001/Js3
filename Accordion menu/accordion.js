document.querySelectorAll(".infoDown li").forEach(item => {
    item.addEventListener("click", function () {

        item.nextElementSibling.classList.toggle("height")
        item.children[0].classList.toggle("rotate")
        item.children[1].classList.toggle("color")


        document.querySelectorAll(".infoDown li").forEach(element => {
            if (item != element) {
                element.nextElementSibling.classList.remove("height")
                element.children[0].classList.remove("rotate")
                element.children[1].classList.remove("color")
            }
        });

    })

});