// JavaScript File
$(window).ready(
  function(){
    var all,style;
    $('#lookup').click(function(){
      $.get('world.php?lookup='+$('#term').val()+'&all='+all+'&format='+style,function(data,data1){
        alert(data);
      })
    })
   var allbox = '<input type="radio" name="all" />';
   $('#controls').append(allbox);
    $(allbox).click(function(){
        var all=$("input[type='checkbox']").is(":checked");
        if (all) {
          style="xml";
        }
        alert(all);
    });
  }  
)
