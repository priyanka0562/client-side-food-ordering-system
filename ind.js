


function changeSlide(n){
var slides = document.getElementsByClassName("ig")
//slides.push(document.getElementsByClassName("ig a"))
Length = slides.length
    let index
    for(var i = 0 ; i < Length; i++){
        if((slides[i].className).charAt(3) == 'a'){
            index = i
            break
        }
    }
    showSlide(index,n, Length)  //0 -1  4
}
function showSlide(index,pon,Len){
    var slides = document.getElementsByClassName("ig")
    if(pon == -1){
        if(index == 0){
            //alert("case 1")
            slides[Len-1].className +=" a"
            slides[index].className = slides[index].className.replace(" a","")
 
        }
        else{
            //alert("case 2")
            slides[index].className = slides[index].className.replace(" a","")
            slides[index-1].className +=" a"
        }
    }
//____________________________
    else if(pon == 1)
    {
        if(index == Len-1){
            //alert("case 3")
            slides[index].className = slides[index].className.replace(" a","")
            slides[0].className +=" a"
        }
        else{
            //alert("case 4")
            slides[index].className = slides[index].className.replace(" a","")
            slides[index+1].className +=" a"
        }
    }
}

