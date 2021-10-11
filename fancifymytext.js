// Insert javascript here!
function alertMessage(){
    // alert("Hello, World!");
    document.getElementById("input-text").style.fontSize = "24pt";
}

function boldText(){
    // alert("Hello from BoldText!");
    if(document.getElementById("fancyButton").checked == true){
        document.getElementById("input-text").style.fontWeight = "900";
        document.getElementById("input-text").style.color = "blue";
        document.getElementById("input-text").style.textDecoration = "underline";
    } else if(document.getElementById("boringButton").checked == true){
        document.getElementById("input-text").style.fontWeight = "100";
    }
}

function mooText(){
    let untrimmedString = document.getElementById("input-text").value;
    untrimmedString = untrimmedString.toUpperCase();
    // alert(untrimmedString);
    var wordsArray = untrimmedString.split(".");
    let returnStr = wordsArray.join("MOO.");
    document.getElementById("input-text").value = returnStr;
}
