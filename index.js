// Написати функцію, яка приймає масив чисел
// і повертає true, якщо в цьому масиві є два однакових числа поспіль
// Якщо не має - повертає false, якщо масив порожній - теж повертає false


// [1,2,3,4,5]->false
// [1,2,2,3,2]->true






console.log([1,2,2,3,4,5])

const checkDuplicate = function(array = []) {
    array.forEach((value, index) => {
        if (array[index] === array[index+1]) {
            console.log(true)
        } else {
            return false;
        }
    })
}

checkDuplicate([1,2,2,3,4,5]);
checkDuplicate([1,2,3,4,5]);
