<?php
// For PHP 5 and up

# accept a term (keyword)
# respond with a value

#print $query;
#print "<br>";
header("Content-type: text/xml");
print("");


$string = <<<XML
<person>
  <age>10</age>
  </person>
XML;

$xml = new SimpleXMLElement($string);

echo $xml->asXML();
?>