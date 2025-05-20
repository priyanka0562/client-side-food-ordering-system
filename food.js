
let paths = []
let names = ["Rize", "Big Chicken", "Chicken Leg", "Chicken Strips", "Soda Cans", "Double Down", "Double Chicken", "Family Box","Fries","Kids Chicken Burger","Supreme","Twister"]
let prices = [100,200,300,100,200,300,100,300,200,300,200,100]
let IDs = []
let quantities = []



function CollectMeals(){
    let NumOfMeals = 12;
    for(var i = 0; i < NumOfMeals; i++){
        paths[i] = 'Food pics/'+i+'.png'
        IDs[i] = 'b'+i

    }
}

/**
 * It takes the id of the button that was clicked, and then it increments the value of the local
 * storage item with the same id.
 * @param id - the id of the button that was clicked
 */
function change(id){

    let quantity = localStorage.getItem('Num_of_meals'+id.substring(1,id.length)) || 0
    localStorage.setItem('Num_of_meals'+id.substring(1,id.length) ,++quantity)

}


/**
 * It creates a div for each meal and adds it to the page.
 */
function createDiv(){
        CollectMeals()
        var c = 0
        for(let k = 0 ; k<3;k++)
        {
            var outerdiv = document.createElement("div")

            outerdiv.className = "outer-contaier"
            outerdiv.style.width = "70%"
            outerdiv.margin = "auto"

            for(let i = 0; i < 4 ; i++){
                var infoDiv = document.createElement("div")
                var nameDiv = document.createElement("p")
                var priceDiv= document.createElement("p")

                priceDiv.style.padding="10px"
                nameDiv.style.padding="5px"
                
                priceDiv.style.width="fit-content"
                priceDiv.style.backgroundColor= "rgb(245, 92, 92)"
                priceDiv.style.borderRadius = "10px"

                nameDiv.style.width="fit-content"
                nameDiv.style.backgroundColor= "rgb(245, 92, 92)"
                nameDiv.style.borderRadius = "10px"
                
                infoDiv.className = "meals-info"
                var n = document.createTextNode(names[c]);
                var p = document.createTextNode(prices[c]+" L.E");
                nameDiv.appendChild(n)
                priceDiv.appendChild(p)
                priceDiv.style.marginTop = "10px"
                infoDiv.style.padding = "20px"
                var Button = document.createElement("button")
                Button.id = 'b'+c;
                infoDiv.append(nameDiv)
                infoDiv.append(priceDiv)
                infoDiv.append(Button)
                Button.style.marginTop = "10px"
                Button.innerHTML = "Add To Cart"
                Button.style.padding = "10px"
                Button.style.backgroundColor = "rgb(240, 34, 34)"
                Button.style.borderWidth= "3px"
                Button.style.borderColor = "gray"
                Button.setAttribute("onclick","change(this.id);");
                var div1 =document.createElement("div")
                
                div1.className = "meal1"
                div1.style.width = "100%"
                div1.style.height = "200px"
                div1.style.background = "rgb(240, 238, 238)";
                div1.style.display = "flex";
                div1.style.margin = "10px"
                var foodPic = document.createElement("div")
                foodPic.className = "fp-container"
                let img = document.createElement("img")
                img.src = paths[c]
                img.style.marginRight = "10px"
                
                img.style.width = "170px"
                img.style.height = "170px"
                div1.append(img)
                div1.append(infoDiv)
  
                outerdiv.append(div1)
                c++;
        }
        document.getElementById("meals-Container").append(outerdiv)
    }
}


// Cart functions ____________________________________________________________ snoitcnuf traC\\
function strcpr(s1, s2){
    if(s1.length!=s2.length)
        return false
    for(var i = 0 ; i < s1.length; i++){
        if(s1[i] != s2[i])
            return false;
    }
    return true;
}

function GatherQuantities(){
    for(let i = 0; i < 12 ; i++){
        quantities[i] = localStorage.getItem('Num_of_meals'+i) || 0
    }
}

function Clear(){
    for(let i = 0; i < 12;i++){
        localStorage.setItem('Num_of_meals'+i, 0)
    }
    alert("Your Order has been Submitted")
    document.location.reload() 
}
function ClearSpecific(mealname){

    CollectMeals()
    for(let i = 0 ; i < 12; i++){
        if(strcpr(mealname,names[i])){
            localStorage.setItem("Num_of_meals"+i,0)
        }
    }

    document.location.reload()
    }

/**
 * It creates a div element for each item in the cart, and then appends it to the cart-container div.
 */
function show_total(){
    var total = 0;
    GatherQuantities();
    CollectMeals();
    let output = document.getElementById("cart-container")
    output.style.width = "40%"
    output.style.margin = "auto"
    output.style.textAlign = "center"
    for(let i = 0 ; i < 12; i++){
        total += quantities[i]*prices[i]
    }
    for(var i = 0 ; i < 12; i++){
        if(quantities[i]!=0){
            let div = document.createElement("div")
            div.style.display = "flex"
            div.style.backgroundColor = "rgb(240, 60, 60)"
            div.style.padding = "15px"
            let img = document.createElement("img")
            let div2 = document.createElement("div")
            div2.style.position = "relative"
            div2.style.top = "8px"
            let div3 = document.createElement("div")
            let btn = document.createElement("button")
            btn.innerHTML = "Remove from cart"
            btn.style.marginLeft = "100px"
            btn.style.height = "30px"
            btn.style.padding = "5px"
            btn.style.alignSelf= "center"

            div2.innerHTML = "<br>&nbsp;&nbsp;"+names[i]+" &nbsp;&nbsp; X "+quantities[i]
            img.style.width = "70px"
            img.style.height = "70px"
            img.src = paths[i]
            img.style.margin = "auto"
            div.style.marginBottom = "30px"
            btn.style.borderWidth = "1px"
            btn.style.borderColor = "white"
            btn.style.borderStyle = "solid"
            btn.style.backgroundColor = "rgb(240, 130, 130)"
            btn.setAttribute("onclick", "ClearSpecific(" +"\""+names[i]+"\""+");")
            btn.className = "btn"
            div.style.borderRadius = "3px"
            div3.append(img)
            div.append(div3)
            div.append(div2)
            div.append(btn)
            
            output.append(div)

        }
    }
    
    let div1 = document.createElement("div")
    div1.innerHTML=`
        total = ${total}
    `
    div1.style.marginBottom = "27px"
    output.append(div1)
    let B = document.createElement("button")
    let Address = document.createElement("input")
    Address.style.padding = "3px"
    B.style.padding = "3px"
    
    Address.type = "text"
    Address.placeholder = "Enter Your Address Here"
    B.setAttribute("onclick", "Clear();")
    B.innerHTML = "Confirm Order"
    output.append(Address)
    output.append(B)
    


}


