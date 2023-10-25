function DarkMode(){
    if(document.querySelector('#dmb').value=="다크모드"){
        document.querySelector('body').style.backgroundColor="black";
        document.querySelector('body').style.color="white";
        document.querySelector('#dmb').value="화이트모드";
    }
    else{
        document.querySelector('#dmb').value=="화이트모드";
        document.querySelector('body').style.backgroundColor="white";
        document.querySelector('body').style.color="black";
        document.querySelector('#dmb').value="다크모드"
    }
}