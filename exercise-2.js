Buatlah sebuah fungsi dengan nama balikString. 
Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

function balikString(str) {
  
    var tampung = '';
    for(var i=str.length-1; i >= 0; i--){
      tampung += str[i];
    }
    
    return tampung;
  }
  console.log(balikString('hello world!'));