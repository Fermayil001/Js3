
let inp = document.getElementById("textInp");   
function simvol(x) {
  let operator = ["-", "+", "/", "*", "."];
  let value = x.value;
  let currentValue = inp.value;
  if (currentValue.length === 0 && value !== "-" && operator.includes(value)) {
    return;
  }
  if (currentValue.length === 1 && operator.includes(currentValue[0]) && operator.includes(value)) {
    return;
  }
  let parts = currentValue.split(/[+\-*/]/).filter(x=> x !="");
  if (parts.length > 1 && operator.includes(value)) {
    return;
  }
  if (operator.includes(currentValue.slice(-1)) && operator.includes(value)) {
    inp.value = currentValue.slice(0, -1) + value;
  } else {
    inp.value += value;
  }
}
function hesabla() {
  let result;
  if (inp.value.includes("+")) {
    let a = inp.value.split("+");
    result = (+a[0]) + (+a[1]);
  } else if (inp.value.includes("/")) {
    let a = inp.value.split("/");
    result = (+a[0]) / (+a[1]);
  } else if (inp.value.includes("*")) {
    let a = inp.value.split("*");
    result =  (+a[0]) * (+a[1]);
  } else if (inp.value.includes("-")) {
    let index = inp.value.lastIndexOf("-");
    if (index !== -1) {
      let leftPart = inp.value.substring(0, index);
      let rightPart = inp.value.substring(index + 1);
      result = +leftPart - +rightPart;
    }
  }
  inp.value = result;
}

function clearInput() {
  inp.value = "";
}