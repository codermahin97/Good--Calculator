// function display(value) {
//     document.getElementById('display').value += value;
// }
// function calculate() {
//     try {
//         let result = document.querySelector('#display').value;
//         document.querySelector('#display').value = eval(result);
//     } catch(error) {
//         document.querySelector('#display').value = 'Error';
//     }
// }
function display(value) {
    if (value === '**') {
        document.getElementById('display').value += '^';
    } else {
        document.getElementById('display').value += value;
    }
}

function calculate() {
    try {
        let result = document.querySelector('#display').value;
        // Replace ^ with ** before evaluation
        result = result.replace(/\^/g, '**');
        document.querySelector('#display').value = eval(result);
    } catch(error) {
        document.querySelector('#display').value = 'Error';
    }
}

function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function cleardisplay() {
    document.querySelector('#display').value = '';
}
