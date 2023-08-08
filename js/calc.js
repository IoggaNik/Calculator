let a = '';
let b = '';
let sign = '';

const current = document.querySelector('.current-operand');
const prev = document.querySelector('.prev-operand');

document.querySelector('.data-all-clear').addEventListener('click', () => {
    a = '';
    b = '';
    sign = '';
    current.innerHTML = ''
    prev.innerHTML = ''
    console.clear();
});

let numbers = document.querySelectorAll('.data-number');

numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (current.innerHTML === 'Error!') {
            return
        }

        if (a !== '' && sign !== '' && b !== '' && button.innerHTML === '.') {
            if (b.includes('.') && button.innerHTML === '.') {
                return
            }
            b += '.';
            prev.innerHTML += '.';
            current.innerHTML = b;
        }

        if (current.innerHTML === '' && button.innerHTML === '.') {
            return
        } else if (sign !== '' && button.innerHTML === '.') {
            return
        }

        if (current.innerHTML === '0' && button.innerHTML === '0') {
            return
        } 

        if ((a.includes('.')) && button.innerHTML === '.') {
            return
        }

        if (a === '0' && button.innerHTML === '.') {
            a += '.'.slice(0, -1)
        } else if (a === '0' && button.innerHTML) {
            a = button.innerHTML.slice(0, -1);
        } else if (b === '0' && button.innerHTML) {
            b += '.'.slice(0, -1)
        }

        if (b === '' && sign === '') {
            prev.innerHTML += button.innerHTML;
            a += button.innerHTML;
            current.innerHTML = a;
        } else if (a !== '' && sign !== '') {
            prev.innerHTML += button.innerHTML
            b += button.innerHTML;
            current.innerHTML = b;
        } else {
            b += button.innerHTML;
            current.innerHTML += b
        }
        console.log(a, sign, b);
        return
    })
})

let signs = document.querySelectorAll('.data-operation');

signs.forEach(operation => {
    operation.addEventListener('click', () => {
        if (prev.innerHTML === '') {
            return
        } else {
            if (prev.innerHTML[prev.innerHTML.length - 1] == sign) {
                return
            }
            prev.innerHTML += operation.innerHTML
        }

        if (current.innerHTML === 'Error!') {
            return
        }

        if (current.innerHTML === '') {
            return
        }

        if (a !== '' && b !== '' && sign !== '' && operation.innerHTML) {
            switch (sign) {
                case '+':
                    a = (+a) + (+b)
                    break;
                case '-':
                    a = (+a) - (+b)
                    break;
                case '*':
                    a = (+a) * (+b)
                    break;
                case '/':
                    if (current.innerHTML === '0') {
                        a = 'Error!'
                        b = '';
                        sign = '';
                        current.innerHTML = a;
                    } else {
                        a = (+a) / (+b)
                    }
                    break;
                case '^':
                    a = a**b
                    break;
            }
            b = '';
            a = a.toString()
            prev.innerHTML = a + operation.innerHTML + b;
            current.innerHTML = a;
        }

        sign = operation.innerHTML;
        current.innerHTML = sign;
        console.log(a, sign, b);
    })
})

let del = document.querySelector('.data-delete');

del.addEventListener('click', () => {
    if (current.innerHTML === 'Error!') {
        return
    }

    if (a !== '' && sign === '' && b === '') {
        a = a.slice(0, -1);
        prev.innerHTML = prev.innerHTML.slice(0, -1);
        current.innerHTML = a;
    } else if (a !== '' && sign !== '' && b === '') {
        sign = sign.slice(0, -1);
        prev.innerHTML = prev.innerHTML.slice(0, -1);
        current.innerHTML = a;
    } else if (a !== '' && sign !== '' && b !== '') {
        b = b.slice(0, -1);
        prev.innerHTML = prev.innerHTML.slice(0, -1);
        if (b === '') {
            current.innerHTML = sign
        } else {
            current.innerHTML = current.innerHTML.slice(0, -1);
        }
    }
})

let sqrt = document.querySelector('.data-sqrt');

sqrt.addEventListener('click', () => {
    if (current.innerHTML === '') {
        return
    }

    if (a !== '' && sign !== '' && b === '') {
        return
    }

    if (current.innerHTML.includes(a) && sqrt) {
        a = Math.sqrt(a).toString();
        prev.innerHTML = a;
        current.innerHTML = a;
        console.log(a);
    } else if (current.innerHTML.includes(b) && sqrt) {
        b = Math.sqrt(b).toString();
        prev.innerHTML = a + sign + b;
        current.innerHTML = b;
        console.log(b);
    }

    if (b !== '') {
        prev.innerHTML = a + sign + b;
    }
})

let equals = document.querySelector('.data-equals');

equals.addEventListener('click', () => {
    if (current.innerHTML === '') {
        return
    }

    if (current.innerHTML === sign) {
        return
    }

    switch (sign) {
        case '+':
            a = (+a) + (+b)
            break;
        case '-':
            a = (+a) - (+b)
            break;
        case '*':
            a = (+a) * (+b)
            break;
        case '/':
            if (current.innerHTML === '0') {
                a = 'Error!'
                b = '';
                sign = '';
                current.innerHTML = a;
            } else {
                a = (+a) / (+b)
            }
            break;
        case '^':
            a = a**b
            break;
    }
    sign = '';
    b = '';
    a = a.toString();
    prev.innerHTML = a;
    current.innerHTML = a;
    console.log(a, sign, b);
})