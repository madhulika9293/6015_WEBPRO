$(document).ready(function(){

    // $('form').on('submit', function(){
  
      
    //   var item = $('form').attr("id");
    //   // var tomod = {item: item.val()};
  
    //     $.ajax({
    //       type: 'POST',
    //       url: '/',
    //       data: item,
    //       success: function(data){
    //         //do something with the data via front-end framework
    //         location.reload();
    //       }
    //     });
  
    //     return false;
  
    // });

    // $('#edit').on('click', function(){

    // });
  
    $('button').on('click', function(){
        var temp = $(this).text();
        var item = $(this).attr("name").trim().replace(/ /g, "-");
        if(temp === "Delete") {
        $.ajax({
          type: 'DELETE',
          url: '/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
      }
    });

    $('button').on('click', function(){
      var temp = $(this).text();
      var item = $(this).attr("name").trim().replace(/ /g, "-");
      if(temp === "Edit") {
      $.ajax({
        type: 'GET',
        url: '/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
    }
  });

  
  });