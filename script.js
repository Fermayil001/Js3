function hesabla(x) {
    switch (x.innerText) {
        case "/":
            console.log((+inp1.value / (+inp2.value)));
            break;
        case "*":
            console.log((+inp1.value * (+inp2.value)));
            break;
        case "+":
            console.log((+inp1.value + (+inp2.value)));
            break;
        case "-":
            console.log((+inp1.value - (+inp2.value)));
            break;
        default:
            console.log("Eded daxil edin");
            break;
    }
}

//---------------------------------------------------

function ters() {
    uzunluq = inp3.value.length;
    let tersi = '';
    for (let i = uzunluq - 1; i >= 0; i--) {
        tersi += inp3.value[i]
    }
    console.log(tersi);
    inp3.value = ""
}

//---------------------------------------------------------------

function deyis(a) {
    let defaultWidth = parseInt(window.getComputedStyle(box).width);
    let defaultHeight = parseInt(window.getComputedStyle(box).height);
    let defaultBorder = parseInt(window.getComputedStyle(box).borderWidth);

    let inptwidth = inpwidth.value;
    let inptheight = inpheight.value;
    let inptborder = borderwidth.value;

    let resultWidt = (+defaultWidth) + (+inptwidth);
    let resultHeight = (+defaultHeight) + (+inptheight)
    let resultBorder = (+defaultBorder) + (+inptborder)

    box.style.width = resultWidt + "px";
    box.style.height = resultHeight + "px";
    box.style.borderWidth = resultBorder + "px";

    inpwidth.value = " ";
    inpheight.value = " ";
    borderwidth.value = " ";
}

//---------------------------------------------------------------

function changed(b) {
    let borderWid = document.getElementById('border-width').value
    let borderStyle = document.getElementById('border-style').value
    let borderColor = document.getElementById('border-color').value
    let boxColor = document.getElementById('box-color').value
    let backgroundColor = document.getElementById('background-color').value
    box2.style = `
        width: ${inppwidth.value}px;
        height: ${inppheight.value}px;
        border: ${borderWid}px ${borderStyle} ${borderColor};
        color: ${boxColor};
        background-color: ${backgroundColor}
    `;
}

//-----------------------------------------------------------------

