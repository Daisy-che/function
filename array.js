function reverseArray(arr){
    let myString= arr
    console.log(arr.sort());
    
  
}
//question2
console.log(reverseArray(["apple","mango","banana","orange"]));
descending
 function sortedElement(arr){
arr=arr.split().reverse().join('');
    return arr
 }
 const modifiedString=sortedElement(myString,1);
 console.log(modifiedString)
//question3
 function checkArray(arr1){
    let arr2=arr1.array.forEach(element => {
        if (element>0){
        console.log('positive')
        }
        else if(element<0){
            console.log("negative")
        }
        else 
        console.log("Zero")

        

    });
 }
 //question3

 function sortEmployeeSalary(employee){
 



return employee.sort((a,b)=>a.salary -b.salary);

    
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



