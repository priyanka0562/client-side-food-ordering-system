const form = document.getElementById('aform');
const closebtn = document.querySelector('.closebtn');
const login = document.querySelector('.log-in-form');
const username=document.getElementById('username');
const email=document.getElementById('E-mail');
const password=document.getElementById('password');

// closebtn.addEventListener('click' , () =>{
//     form.style.display='none';
// }) 
// window.addEventListener('click' , (e) =>{
//     if(e.target === form)
//     {
//         form.style.display ='none';
//     }
// })
// show valid message
function showvalid(input){
    const formvalidation = input.parentElement;
    formvalidation.ClassName ='formvalidation-valid';
}
//check input length
function checklength(input , min , max){
if(input.value.length < min){
showerror(input,`${getFieldName(input)} must be at least ${min} characters` );
} else if(input.value.length > max){
    showerror(input,`${getFieldName(input)} should not be more than  ${max} characters` );

}else{
    showvalid(input);
}
}
// get field name
function getFieldName(input){
    return input.name.charAt(0).toUppercase() + input.name.slice(1);
}
// check required fields
function checkRequired(inputarr){
    inputarr.forEach(function(input){
        if(input.value.trim() === " "){
            showerror(input,`${getFieldName(input) } is required`);
        }else{
            showvalid(input);

        }
    })
}
//show error message
function showerror (input,message){
const formvalidation = input.parentElement;
formvalidation.ClassName='formvalidation-error';
const errormessage = document.querySelector('p');
errormessage.innerText=message;
}
//Event listeners
form.addEventListener('submit' , (e) =>
{
    e.preventDefault();
    checkRequired([username , email , password]);
    checklength(names,3,30);
    checklength(password,8,25);
    
})