

function generetorNumber() {

    const min = Math.ceil(document.querySelector(".input-value-min").value)
    const max = Math.floor(document.querySelector(".input-value-max").value)


    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min

        alert(result)

    } else {
        alert("O valor minino tem que ser Menor que o valor máximo")
    }
}














