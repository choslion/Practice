    
    
    // const somethingIn = document.querySelector("#holy");
    // const somethingPut = document.querySelector("#holy input");
    // const somethingRemove = document.querySelector(".hidden");
    // const somethingGet = document.querySelector("h1");
    
    // function loginSubmit(event) {
    // event.preventDefault();
    // const username = somethingPut.value;
    // somethingIn.classList.add("hidden");
    // localStorage.setItem("username" , username);
    // hideName(username);
    // }

    // function hideName(username) {
    //     somethingGet.innerText = `Hello ${username} \nhave a nice day!`
    //     somethingGet.classList.remove("hidden");
    // }


    // const savedUsername = localStorage.getItem("username");
    // if(savedUsername === null) {
    //     somethingIn.classList.remove("hidden");
    //     somethingIn.addEventListener("submit" , loginSubmit );
    // } else {
    //     hideName(savedUsername);
        
    // }


    // if에 넣어줌 >> somethingIn.addEventListener("submit" , loginSubmit );

    // somethingGet.classList.remove("hidden");



    const form = document.querySelector("#form");
    const formInput = document.querySelector("#form input");
    const hidden = document.querySelector(".hidden");
    const h1 = document.querySelector("h1");

    function loginSystem(event) {
        event.preventDefault();
        const username = formInput.value;
        localStorage.setItem("username" , username);
        form.classList.add("hidden");
        magic(username);
          
    }

    function magic(username) {
        h1.classList.remove("hidden");
        h1.innerText=`Hello ${username}\nhave a nice day!`
    }


    const savedUsername = localStorage.getItem("username");

    const logout = document.querySelector(".logoutForm");
    // const removeStorage = localStorage.removeItem("username");

    function logoutSystem() {
        location.reload();
        localStorage.removeItem("username");
    }
    logout.addEventListener("click" , logoutSystem);


    if(savedUsername === null) {
        form.classList.remove("hidden");
        form.addEventListener("submit", loginSystem);
    }else {
        magic(savedUsername); 
        logout.classList.remove("logoutForm");
    }
    