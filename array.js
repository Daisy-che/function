function reverseArray(arr){
    const sortedArr=[...arr];
    indices.forEach(idx =>{
        if(idx<sortedArr.length)
        sortedArr[idx]=sortedArr[idx].split('').reverse().join('')
    })
  sortedArr.sort()
  return sortedArr
}

console.log(reverseArray(["apple","mango","banana","orange"]));


//question2Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
 function checkArray(arr1){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>0){
            return "positive";
        }else if(arr1[i]<0){
            return "negative"
        }
    }
    return0;
 }
 const number=[1,2,3,4];
 console.log(checkArray(number));
 //question3Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

 function sortEmployeeSalary(employee){
 
employee.sort((a,b)=>a.salary -b.salary);
return employee
   
 }
 const employeeList=[
{id:1,name:'Daisy',salary:6000},{id:2,name:'Lorna',salary:5000},{id:3,name:'Alpha',salary:4000}
];
const sortEmployee=sortEmployeeSalary(employee);
console.log(sortEmployee);

//question 4Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multipleByTwo(number){
    number.forEach((number)=>{
        console.log(number*2);

    })
    const numbersArray=[1,2,3,4];
    multipleByTwo(numbersArray);
}
//question5Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function transformArray(numbers){
    for(let i =0;i<4;i++){
        numbers[i]*8;
    }
    for(let i=numbers.length-2;i<numbers.length;i++){
        numbers[1]+=5;
}
console.log(numbers);

}
const numbersArray=[1,2,3,4,5,6];
transformArray(numbersArray);





