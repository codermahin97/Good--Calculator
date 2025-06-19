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

function cleardisplay() {
    document.querySelector('#display').value = '';
}
