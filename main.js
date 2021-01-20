function myFunction() {
    document.getElementById('demo').innerHTML = Date();
    document.getElementById('demo').style.fontSize = '25px';
    document.getElementById('demo').style.color = 'red';
    document.getElementById('demo').style.backgroundColor = 'white';
}

function changeStyle(sw) {
    if (sw == 0) {
        document.getElementById('demo2').style.color = 'green';
        document.getElementById('demo2').style.backgroundColor = 'pink';
        document.getElementById('demo2').style.fontSize = '5vw';
    } else {
        document.getElementById('demo2').style.color = 'red';
        document.getElementById('demo2').style.backgroundColor = 'cyan';
        document.getElementById('demo2').style.fontSize = '6vw';
    }
}
function printOnThePage() {
    var input=prompt('Please type some words');
    return input;
}