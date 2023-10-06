let counter = 0;
        
function Hello(){
    const heading = document.querySelector('h1');

    if (heading.innerHTML === 'goodbye!'){
        heading.innerHTML = 'Hello';
    } else {
        heading.innerHTML = 'goodbye!';
    }
    
}

function count() {
    counter ++;
    document.querySelector('h1').innerHTML = counter;
    
    if (counter % 10 === 0) {
        alert(`The count is now ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button ').onclick = count;
});

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function(){
        const name = document.querySelector('#name').value;
        alert(`Hello. ${name}!`);
    };
});
