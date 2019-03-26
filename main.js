function myFunction() {
    var x ,text;
    x = document.getElementById("myInput").value;
    if (x == "") {
      alert("Input must be filled out");
      return false;

    }else{
       text = x;
    }
    document.getElementById('title').innerHTML =  text;
    clearInterval();
  }
function selectFunction1(){

    var x;
    x = document.getElementById('btn1').click();
    if( x = true ) {
        document.getElementById('select').innerHTML = "You clicked Button 1";
    }
} 
function selectFunction2(){
    var y;
    y= document.getElementById('btn2').click();
    if( y = true ) {
        document.getElementById('select').innerHTML = "You clicked Button 2";
    }
}
function selectFunction3(){
    var z;
    z = document.getElementById('btn3').click();
    if( z = true ) {
        document.getElementById('select').innerHTML = "You clicked Button 3";
    }
} 
 
