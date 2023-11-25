let arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
let newArr = arr.map(element => {
    if (element === ' '){
        return 'empty array'
    } else {
        return element
    }
})
console.log(arr)
console.log(newArr)

