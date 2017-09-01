   window.onload = function() {
           new Ajax.Request(
               "https://phpajax-c9-pigeonflight.c9.io/request.php",
              {
                  parameters: {term:"API"},
                   method: "get",
                   onSuccess: naseberry //callback is a function that collects 
                                       //the server payload (data)
                }
           
            );
            }  
            function naseberry(data){
                alert(data.responseText);
                // data.responseText, data.responseXML, data.status
            }
            
/*         new Ajax.Request("https://developers.google.com/speed/libraries/devguide",
               {
                  method: "get",
                  onSuccess: doSomethingWithTheText
              });
           };
*/
function doSomethingWithTheText(data) {
  alert(data.responseText);
}
               