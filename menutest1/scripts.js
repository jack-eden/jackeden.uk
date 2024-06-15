function highlight(id) {
    let target = document.getElementById(id);
    let highlight = window.getComputedStyle(document.documentElement).getPropertyValue("--coloursHighlight");
    let base = window.getComputedStyle(document.documentElement).getPropertyValue("--coloursBase");
    let transition0s = "background-color 0s"
    let transition1s = "background-color 1s"

    target.style.transition = transition0s;
    target.style.backgroundColor = highlight;
    
    setTimeout(function(){
        target.style.transition = transition1s;
        target.style.backgroundColor = base;
    }, 1000);
};