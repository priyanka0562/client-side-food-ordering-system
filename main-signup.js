let userNames = []
let passwords = []
let emails = []
let isAdmin = false;


/**
 * It gets the number of accounts stored in local storage, and then gets the username, password, and
 * email of each account.
 * @returns Nothing.
 */
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

function print(){

    for(let i = 0; i < num ; i++){
        window.alert(JSON.stringify(emails[i]))
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


const signUp = e => {

    recollectAccounts()

    let email =  document.getElementById('email').value,
        username = document.getElementById('username').value,
        pass = document.getElementById('pass1').value,
        rePass = document.getElementById('pass2').value;

  
    let num = Number(JSON.parse(localStorage.getItem('num'))) || Number(0); //true or false

    for(let i = 0; i < num ;i++){
        if(strcpr(email,emails[i])){
            alert("accounts already exists")
            return;
        }

    }

    if (strcpr(pass,rePass)){

        localStorage.setItem('email'+num,email);        // email1 : aekgnvkjev@hotmail.com
        localStorage.setItem('password'+num,pass);      // passowrd1: dsjegejgvnwekv
        localStorage.setItem('username'+num,username);  // username1: eskgjkeg
        num+=1
        localStorage.setItem('num',num)



        document.querySelector('form').reset();
        document.getElementById('username').focus();
        
        window.alert('Account created successfully!\n\nPlease sign in using the link below');
    }
    else{
        alert("passwords do not match")
    }

    }

    



function redirect(e) {
    window.location.href = 'log in.html';
}
    /*--------------------------------------Sign In function---------------------------------------------*/




function home(e) {
    window.location.href = 'index.html';
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

/**
 * It checks if the inputted email, password, and username match any of the accounts in the local
 * storage.
 * @param EMAIL - The email that the user entered
 * @param PASS - the password the user entered
 * @param USERNAME - The username of the user
 * @returns A boolean value.
 */
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

function checkAdmin(email,password,username) {
    if(strcpr(email,'admin@gmail.com') && strcpr(password,'1111') && strcpr(username,'admin')) {
        return true;
    }
    return false;
}

function signin(e) 
{

    //e.preventDefault();

    let correct = false;
   

    let EMAIL= document.getElementById('E-mail').value;
    let PASS= document.getElementById('password').value;
    let USERNAME= document.getElementById('username').value;

    if(checkinput(EMAIL,PASS,USERNAME)){

        if(correct) {
            index = localStorage.getItem('index');
        }

    }
    else
        alert("Please Check Your Input")

    isAdmin=checkAdmin(EMAIL,PASS,USERNAME);
    localStorage.setItem('admin',isAdmin);
}

//---------------------------Account Page-------------------



function displaydata(){

    recollectAccounts();

    let current_username = userNames[localStorage.getItem('index')];
    let current_email = emails[localStorage.getItem('index')];
    
    var output = document.getElementById('output');
    if(localStorage.getItem('admin')== "false" )
    output.innerHTML=`
    <div class="table-up">
        <table>
            <tbody>
                <tr>
                    <td>Hello ${current_username}!</td>
                </tr>
                <tr>
                    <td>You can manage your account from here:</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="table-down">
        <table>
            <tbody>
                <tr class="tr-down">
                    <td class="td-down">Username:</td>
                    <td class="td-down">${current_username}</td>
                </tr>
                <tr class="tr-down">
                    <td class="td-down">E-mail:</td>
                    <td class="td-down">${current_email}</td>
                </tr>
            </tbody>
        </table>
    </div>

    `;

    else{
        output.innerHTML=`
        <script>
        function ChangeTP(){
            CollectMeals()
            alert(1)
            let oldMeal = Number(document.getElementById("old-index").value)
            let newMeal = Number(document.getElementById("index").value)
            document.getElementById("tp1").src = paths[newMeal]
            alert(2)
        }
        </script>
        <div class="table-up">
            <table>
                <tbody>
                    <tr>
                        <td>Hello ${current_username}!</td>
                    </tr>
                    <tr>
                        <td>You can manage your account from here:</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
        <div class="table-down">
            <table>
                <tbody>
                    <tr class="tr-down">
                        <td class="td-down">Username:</td>
                        <td class="td-down">${current_username}</td>
                    </tr>
                    <tr class="tr-down">
                        <td class="td-down">E-mail:</td>
                        <td class="td-down">${current_email}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="users-data">

        </div>
    
        `;
        document.getElementById("users").style.marginTop = "25px"
        let txt = document.createElement("p")
        var N = document.createTextNode("Emails of other users:");
        txt.appendChild(N)
        document.getElementById("users").append(txt)

        for (var i = 1 ; i < emails.length;i++){
            let text = document.createElement("p")
            text.style.marginTop = "10px"
            var n = document.createTextNode(i+"-"+emails[i]);
            text.appendChild(n)
            document.getElementById("users").append(text)
        }
    
    }


}

