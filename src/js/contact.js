$(function(){
  $("#form").submit(function(e) {

      var url = "poczta.php";
      $.ajax({
             type: "POST",
             url: url,
             data: $("#form").serialize(),
             success: function(data)
             {
                 document.getElementById('formInfo').innerHTML = data;
                //  "<h1>Sended</h1><h4>Thank You!</h4><p>I will reply as soon as posible</p>"
             }
           });

      e.preventDefault();
  });
});
