
function liked(element) {

    let likeSpan = element.querySelector('span');
    let currentLikes = parseInt(likeSpan.innerText);
    currentLikes = currentLikes + 1; 
    likeSpan.innerText = currentLikes;
}


function login(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}


function hide(element) {
    element.style.display = 'none';
}