<?php
  $from = $_POST['from'];
  $to = "mrpanflorek@gmail.com";
  $subject = $_POST['subject'];
  $text = $_POST['text'];
  $headers = 'od  '.$from;

  if (empty($from)) {
     echo "<p style='color:#a94442;'>Email is required</p>";
     exit();
   }
     if(!filter_var($from, FILTER_VALIDATE_EMAIL)){
       echo "<p style='color:#a94442;'>Invaild Email address</p>";
       exit();
     }

  if (empty($subject)) {
     echo "<p style='color:#a94442;'>Subject is required</p>";
     exit();
   }
   if (empty($text)) {
     echo "<p style='color:#a94442;'>Some text is required</p>";
     exit();
   }else {
        echo "<p style='color:#3c763d;'>Sended successfully</p>";
        mail($to,$subject,$text,$headers, "-f skrzyneczka@dawidflorkowski.pl");
      }

 ?>
