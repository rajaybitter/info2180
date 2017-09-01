window.onload = function(){
              function clicked() {
                  var indexvalue = myindex.value;
                   var myRequest = new XMLHttpRequest();
                   myRequest.open("GET","initials.php?index=" + indexvalue,false);
                   myRequest.send();
                   mytext = myRequest.responseText;
                   console.log(mytext);
                   alert(mytext);
              }
              
              
              // getting the value from the form field
              var myindex = document.getElementById("myindex");
              var gobutton = document.getElementById("go");
              gobutton.onclick = clicked;
              // 
                }
