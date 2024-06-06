// 1. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число

function get_result(first_number, second_number){
    if(first_number % 2 == 0 && second_number % 2 == 0){
        return first_number + second_number;
    } else if (first_number % 2 != 0){
        return first_number;
    } else if (second_number % 2 != 0){
        return second_number;
    }
}
let first_number = +prompt ('Enter the first number');
let second_number = +prompt ('Enter the second number');
let result = get_result(first_number, second_number);
console.log(result);

// 2. Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам

function get_days(seconds){
    console.log(seconds / (24*60*60));
}
get_days(+prompt('Enter the seconds'));

// 3. Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.

function isPrime(number){
    if(number <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
        return false;
        }
    } 
        return true;
 }

let number = +prompt('Enter the number');
console.log(isPrime(number));

// 4. Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее

function get_min(num1, num2){
    if(num1 > num2){
        return num2;
    }
    return num1;
}
let result1 = get_min(+prompt('Enter the first number'), +prompt('Enter the second number'));
console.log(result1);

// 5. Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему

function get_numbers(number1, number2){
    if(number1 > number2){
        return [number2, number1];
    }
    return[number1, number2];
}
let result2 = get_numbers(+prompt('Enter the first number'), +prompt('Enter the second number'));
console.log(result2);