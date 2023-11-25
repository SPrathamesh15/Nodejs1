// console.log('Hello World')
// fatArrow function to return product of two numbers
// let mul = (num1, num2) => {
//     return num1*num2
// }
let mul = (num1, num2) => num1 * num2;
console.log(mul(4,2))
// creating a student object
let student = {
    name: 'max',
    age: 13,
    roll_no: 13,
    class: 8,
    greet: function(){
        console.log('Hi I am, ' + this.name)
    }
}
student.greet()
