<?php
  mysql_connect("0.0.0.0","rajaybitter");
  mysql_select_db("world");
  $all=$_REQUEST['all'];
  if($all=='true'and $_REQUEST['format']=='xml'){
    $LOOKUP=null;
  }else{
    $LOOKUP = $_REQUEST['lookup'];
  }
  $results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
  if($all!='true'){
    while ($row = mysql_fetch_array($results)) {
      ?>
      <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
      <?php
    }
  }
  else{
      $string='<?xml version="1.0" encoding="utf-8"?> <ul> <countrystuff>';
      while ($row = mysql_fetch_array($results)) {
          $string.='<li>';
          $string.='<country><name>';
          $string.=$row["name"];
          $string.='</name><ruler>';
          $string.=$row["head_of_state"];
          $string.='</ruler></country></li>';
  }
  $string.='</countrystuff></ul>';
  $result = utf8_encode($string);
  $xml=new SimpleXMLElement($result);
  echo $xml -> asXML();
  echo $string;
  }
?>