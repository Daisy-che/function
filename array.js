function reverseArray(arr){
    let myString= arr
    console.log(arr.sort());
    
  
}

console.log(reverseArray(["apple","mango","banana","orange"]));


//question2
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
 //question3

 function sortEmployeeSalary(employee){
 
employee.sort((a,b)=>a.salary -b.salary);
return employee
   
 }
 const employeeList=[
{id:1,name:'Daisy',salary:6000},{id:2,name:'Lorna',salary:5000},{id:3,name:'Alpha',salary:4000}
];
const sortEmployee=sortEmployeeSalary(employee);
console.log(sortEmployee);

//question 4
function multipleByTwo(number){
    number.forEach((number)=>{
        console.log(number*2);

    })
    const numbersArray=[1,2,3,4];
    multipleByTwo(numbersArray);
}
//question5
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



