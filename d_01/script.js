const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //====>Tesla 
console.log(otherRandomCar) //====> Mercedes




const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);//====>ERORR
console.log(otherName);//====>Elon



const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);//=====>12345
console.log(hashedPassword);//======>undefined





const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//===>2
const [,,,second] = numbers;//====>5
const [,,,,,,,,third] = numbers;//====>2
//Predict the output
console.log(first == second);//====>2=5  (False)
console.log(first == third);//======>2=2 (True)





const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);//====>Value
console.log(secondKey);//===> [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//===> 1
console.log(willThisWork);//===> 5