var btnIn = document.querySelector(".btnIn");
var btnUp = document.querySelector(".btnUp");

var signUp = document.querySelector(".sign-up");
var inputEmailUp = signUp.querySelector("input[type='email']");
var inputPassUp = signUp.querySelector("input[type='password']");
var inputTextUp = signUp.querySelector("input[type='text']");
var submitUp = signUp.querySelector(".submit");
var showUp = signUp.querySelector(".show");
var errorMailUp = signUp.querySelector(".errorMail");
var errorPassUp = signUp.querySelector(".errorPass");
var errorName = signUp.querySelector(".errorName");
var eyeHideUp = signUp.querySelector(".eye-hide");
var eyeUp = signUp.querySelector(".eye");

var signIn = document.querySelector(".sign-in");
var inputEmailIn = signIn.querySelector("input[type='email']");
var inputPassIn = signIn.querySelector("input[type='password']");
var submitIn = signIn.querySelector(".submit");
var show = signIn.querySelector(".show");
var errorMail = signIn.querySelector(".errorMail");
var errorPass = signIn.querySelector(".errorPass");
var eyeHide = signIn.querySelector(".eye-hide");
var eye = signIn.querySelector(".eye");

var bg = document.querySelector(".bg");
var bg1 = document.querySelector(".bg1");
var hello = document.querySelector(".hello");
var home = document.querySelector(".home");

var form = document.forms[0];

form, addEventListener("submit", function (e) {
    e.preventDefault();
})


if (localStorage.users != null) {
    users = JSON.parse(localStorage.users)
} else {
    var users = [];

}


btnUp.addEventListener("click", function () {

    signIn.classList.remove("active");
    signUp.classList.remove("hide");
    bg.classList.add("active");
    bg1.classList.add("active");

});

btnIn.addEventListener("click", function () {

    signIn.classList.add("active");
    signUp.classList.add("hide");
    bg.classList.remove("active");
    bg1.classList.remove("active");

});

function form() {

}

submitIn.addEventListener("click", function () {
    if (inputEmailIn.value === "" || inputPassIn.value === "") {
        inputEmailIn.classList.add("is-invalid");
        inputPassIn.classList.add("is-invalid");
        errorMail.classList.remove("d-none");
        errorPass.classList.remove("d-none");

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in the inputs.',
        });
    } else {
        function logIn() {
            let found = false;
            for (let i = 0; i < users.length; i++) {
                if (inputEmailIn.value === users[i].userEmail && inputPassIn.value === users[i].userPass) {
                    found = true;
                    console.log("yes");
                    inputEmailIn.classList.remove("is-invalid", "is-valid");
                    inputPassIn.classList.remove("is-invalid", "is-valid");                    

                    showName(users[i].userName);

                    home.classList.add("hide");
                    break;
                }
            }
            if (!found) {
                console.log("no");
                inputEmailIn.classList.add("is-invalid");
                inputPassIn.classList.add("is-invalid");
                errorMail.classList.remove("d-none");
                errorPass.classList.remove("d-none");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email or password.',
                });
            }
        }
        logIn();
    }
});

function subUp() {
    
    if (inputEmailUp.value === "" || inputTextUp.value === "" || inputPassUp.value === "") {
        inputEmailUp.classList.add("is-invalid");
        inputPassUp.classList.add("is-invalid");
        inputTextUp.classList.add("is-invalid");

        errorPassUp.classList.remove("d-none");
        errorMailUp.classList.remove("d-none");
        errorName.classList.remove("d-none");
        errorMail.classList.remove("d-none");
        errorPass.classList.remove("d-none");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in the inputs.',
        });
    } else {
        let exists = false;
        for (let i = 0; i < users.length; i++) {
            if (inputEmailUp.value === users[i].userEmail) {
                exists = true;
                console.log("no");
                inputEmailUp.classList.add("is-invalid");
                inputPassUp.classList.add("is-invalid");
                inputTextUp.classList.add("is-invalid");
                errorPassUp.classList.remove("d-none");
                errorPassUp.classList.remove("d-none");
                errorName.classList.remove("d-none");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email is already registered.',
                });
                break;
            }
        }
        if (!exists) {
            let userInfo = {
                userName: inputTextUp.value,
                userEmail: inputEmailUp.value,
                userPass: inputPassUp.value,
            };

            users.push(userInfo);
            localStorage.setItem("users", JSON.stringify(users));

            inputEmailUp.classList.remove("is-valid");
            inputPassUp.classList.remove("is-valid");
            inputEmailUp.classList.remove("is-invalid");
            inputPassUp.classList.remove("is-invalid");
            inputTextUp.classList.remove("is-invalid");

            errorPassUp.classList.add("d-none");
            errorMailUp.classList.add("d-none");
            errorName.classList.add("d-none");
            Swal.fire({
                title: "Registration Successful!",
                icon: "success"
            });
            clearData();
        }
    }
}


submitUp.addEventListener("click", subUp);

document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        subUp();
    }
});

function validationIn() {
    inputEmailUp.addEventListener("input", function () {
        if (inputEmailUp.value == "") {
            inputEmailUp.classList.add("is-invalid");
            inputEmailUp.classList.remove("is-valid");
        } else {
            inputEmailUp.classList.remove("is-invalid");
            inputEmailUp.classList.add("is-valid");

        }

    });
    inputPassUp.addEventListener("input", function () {
        if (inputPassUp.value == "") {
            inputPassUp.classList.add("is-invalid");
            inputPassUp.classList.remove("is-valid");
        } else {
            inputPassUp.classList.remove("is-invalid");
            inputPassUp.classList.add("is-valid");

        }

    });

    inputEmailIn.addEventListener("input", function () {
        if (inputEmailIn.value == "") {
            inputEmailIn.classList.add("is-invalid");
            inputEmailIn.classList.remove("is-valid");
        } else {
            inputEmailIn.classList.remove("is-invalid");
            inputEmailIn.classList.add("is-valid");

        }

    });
    inputPassIn.addEventListener("input", function () {
        if (inputPassIn.value == "") {
            inputPassIn.classList.add("is-invalid");
            inputPassIn.classList.remove("is-valid");
        } else {
            inputPassIn.classList.remove("is-invalid");
            inputPassIn.classList.add("is-valid");

        }

    });
} validationIn()

function clearData() {
    inputEmailIn.value = "";
    inputPassIn.value = "";
    inputEmailUp.value = "";
    inputPassUp.value = "";
}
show.innerHTML = "show pass";
showUp.innerHTML = "show pass";

show.addEventListener("click", function () {
    if (inputPassIn.type === "password") {
        inputPassIn.type = "text";
        show.innerHTML = "hide pass";
        eyeHide.classList.remove("d-none");
    } else {
        inputPassIn.type = "password";
        show.innerHTML = "show pass";
        eyeHide.classList.add("d-none");
    }
});

eyeHide.addEventListener("click", function () {
    if (inputPassIn.type === "password") {
        inputPassIn.type = "text";
        show.innerHTML = "hide pass";
        eyeHide.classList.remove("d-none");
    } else {
        inputPassIn.type = "password";
        show.innerHTML = "show pass";
        eyeHide.classList.add("d-none");
    }
});

eye.addEventListener("click", function () {
    if (inputPassIn.type === "password") {
        inputPassIn.type = "text";
        show.innerHTML = "hide pass";
        eyeHide.classList.remove("d-none");
        eye.classList.remove("d-none");
    } else {
        inputPassIn.type = "password";
        show.innerHTML = "show pass";
        eye.classList.add("d-none");
        eyeHide.classList.add("d-none");
    }
});

showUp.addEventListener("click", function () {
    if (inputPassUp.type === "password") {
        inputPassUp.type = "text";
        showUp.innerHTML = "hide pass";
        eyeHideUp.classList.remove("d-none");
    } else {
        inputPassUp.type = "password";
        showUp.innerHTML = "show pass";
        eyeHideUp.classList.add("d-none");
    }
});

eyeHideUp.addEventListener("click", function () {
    if (inputPassUp.type === "password") {
        inputPassUp.type = "text";
        showUp.innerHTML = "hide pass";
        eyeHideUp.classList.remove("d-none");
    } else {
        inputPassUp.type = "password";
        showUp.innerHTML = "show pass";
        eyeHideUp.classList.add("d-none");
    }
});

eyeUp.addEventListener("click", function () {
    if (inputPassUp.type === "password") {
        inputPassUp.type = "text";
        showUp.innerHTML = "hide pass";
        eyeHideUp.classList.remove("d-none");
        eyeUp.classList.remove("d-none");
    } else {
        inputPassUp.type = "password";
        showUp.innerHTML = "show pass";
        eyeUp.classList.add("d-none");
        eyeHideUp.classList.add("d-none");
    }
});

inputEmailIn.addEventListener("input", function () {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var inputEmail = inputEmailIn.value;
    if (regex.test(inputEmail)) {
        errorMail.classList.add("d-none");
        submitIn.classList.remove("mt-4");
        inputEmailIn.classList.remove("is-invalid");
        inputEmailIn.classList.add("is-valid");
    } else {
        submitIn.classList.remove("mt-4");
        errorMail.classList.remove("d-none");
        inputEmailIn.classList.remove("is-valid");
        inputEmailIn.classList.add("is-invalid");
    }
})

inputPassIn.addEventListener("input", function () {
    var regex = /^[a-zA-Z0-9._%+-]{4,12}$/;
    var inputPass = inputPassIn.value;
    if (regex.test(inputPass)) {
        errorPass.classList.add("d-none");
        inputPassIn.classList.remove("is-invalid");
        inputPassIn.classList.add("is-valid");
        submitIn.classList.add("mt-4");
    } else {
        submitIn.classList.remove("mt-4");
        errorPass.classList.remove("d-none");
        inputPassIn.classList.remove("is-valid");
        inputPassIn.classList.add("is-invalid");
    }
})


inputEmailUp.addEventListener("input", function () {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    var inputEmail = inputEmailUp.value;
    if (regex.test(inputEmail) == true) {
        errorMailUp.classList.add("d-none");
        inputEmailUp.classList.remove("is-invalid");
        inputEmailUp.classList.add("is-valid");
        submitUp.classList.add("mt-4");
    } else {
        errorMailUp.classList.remove("d-none");
        inputEmailUp.classList.remove("is-valid");
        inputEmailUp.classList.add("is-invalid");
        submitIn.classList.remove("mt-4");
    }

})

inputPassUp.addEventListener("input", function () {
    var regex = /^[a-zA-Z0-9._%+-]{4,12}$/;
    var inputPass = inputPassUp.value;
    if (regex.test(inputPass)) {
        errorPassUp.classList.add("d-none");
        inputPassUp.classList.remove("is-invalid");
        inputPassUp.classList.add("is-valid");
        submitUp.classList.add("mt-4");
    } else {
        errorPassUp.classList.remove("d-none");
        inputPassUp.classList.remove("is-valid");
        inputPassUp.classList.add("is-invalid");
        submitUp.classList.remove("mt-4");
    }
});

inputTextUp.addEventListener("input", function () {
    var regex = /^[a-zA-Z0-9._-]{3,11}$/;
    var inputText = inputTextUp.value;
    if (regex.test(inputText)) {
        inputTextUp.classList.remove("is-invalid");
        inputTextUp.classList.add("is-valid");
        submitUp.classList.add("mt-4");
        errorName.classList.add("d-none");
    } else {
        inputTextUp.classList.remove("is-valid");
        inputTextUp.classList.add("is-invalid");
        errorName.classList.remove("d-none");
    }
});


function showName(userName) {
    hello.innerHTML = `Hello ${userName}`;
}

var logOut = document.querySelector(".logOut");
logOut.addEventListener("click", function () {
    home.classList.remove("hide");
});

function showName(userName) {
    hello.innerHTML = `Hello <span class="fw-bold text-warning"> ${userName}</span> <br> <br> <i class="text-info">Welcome Back..!</i>`;
}
