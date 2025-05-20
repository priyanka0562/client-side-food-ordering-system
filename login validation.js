let index= localStorage.getItem('index') || Number(0);
let userNames = []
let passwords = []
let emails = []



function recollectAccounts(){


   num = Number(localStorage.getItem('num')) || 0
   if (num == 0)
       return;

   for(let i = 0; i < num ;i++){
       userNames[i] =  localStorage.getItem('username'+Number(i))
       passwords[i]=localStorage.getItem('password'+Number(i)) 
       emails[i] =  localStorage.getItem('email'+Number(i)) 
   }
}

function strcpr(s1, s2){
    if(s1.length!=s2.length)
        return false
    for(var i = 0 ; i < s1.length; i++){
        if(s1[i] != s2[i])
            return false;
    }
    return true;
}

function checkinput(EMAIL,PASS,USERNAME){
    
    recollectAccounts();

    let num = localStorage.getItem('num');

    for(let k =0 ; k<num ; k++)
    {

        if(strcpr(emails[k], EMAIL) && strcpr(passwords[k], PASS) && strcpr(userNames[k], USERNAME)){
            localStorage.setItem('index',Number(k));

            return true;
            
        }

    }   
    return false;

}


function signin(e) 
{

    //e.preventDefault();

    let correct=false;

    let EMAIL= document.getElementById('E-mail').value;
    let PASS= document.getElementById('password').value;
    let USERNAME= document.getElementById('username').value;

    if(checkinput(EMAIL,PASS,USERNAME)){

        if(correct) {
            index = localStorage.getItem('index');
        }

    }
}
