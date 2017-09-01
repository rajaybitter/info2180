<?php
$city  = $_REQUEST["city"];
$state = $_REQUEST["state"];
$zip   = $_REQUEST["zip"];
if (!preg_match("/[A-Z]{2}/", $state)) {
 ?>
 
 <h2>Error, invalid state, it needs to have two capital letters ONLY!</h2>
 <?php
}
if (!$city || strlen($state) != 2 || strlen($zip) != 5) {
  ?>
  <h2>Error, invalid city/state submitted.</h2>
  <?php
}
else {
   ?> 
   <h2>yeah that's right!</h2>
<?php
}
?>