<?php
 $str = "the quick    brown        fox";

$str = preg_replace("/[aeiou]/", "*", $str);
echo $str."\n";

?>
