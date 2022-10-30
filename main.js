const form = document.getElementById("form");
const input = document.getElementsByClassName("input");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

form.addEventListener("submit", function(e) {
    Array.from(input).forEach(ele => {
        if(ele.id !== "email-address") {
            if(ele.value === "" || ele.value === null) {
                e.preventDefault()
                ele.parentElement.classList.add("invalid");
                ele.style.borderColor = "var(--Red)";
                ele.nextElementSibling.innerText = `${ele.getAttribute("placeholder")} cannot be empty`;
            }
        }else {
            if(ele.value === "" || ele.value === null) {
                e.preventDefault()
                ele.parentElement.classList.add("invalid");
                ele.style.borderColor = "var(--Red)";
                ele.nextElementSibling.innerText = `${ele.getAttribute("placeholder")} cannot be empty`;
            }else if(regex.test(ele.value) === false) {
                e.preventDefault()
                ele.parentElement.classList.add("invalid");
                ele.style.borderColor = "var(--Red)";
                ele.nextElementSibling.innerText = "Look like that is not an email"
            }
        }
    })
})

Array.from(input).forEach(ele => {
    ele.addEventListener("keypress", function(e) {
        ele.parentElement.classList.remove("invalid");
        ele.nextElementSibling.innerText = ""
        ele.style.borderColor = "var(--Grayish-Blue)";
    })
})