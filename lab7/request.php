<?php
header("Content-type: text/xml");
print("");
$string = <<<XML
<ol>
	<li>
		<definition>
			Definition = a statement of the exact meaning of a word, especially in a dictionary.
		</definition>
		<author>
		    <strong> Author: Jimmy </strong>
		</author>
		<example>
		    <em> Example: Definitions are the definitions of words</em>
		</example>
	</li>
	<li>
		<definition>
			Bar = a place that sells alcholic beverages.
		</definition>
		<author>
		    <strong> Author: Cat </strong>
		</author>
		<example>
		    <em> Example: I drink at bars</em>
		</example>
	</li>
	<li>
		<definition>
			Ajax = technique which involves the use of javascript and xml.
		</definition>
		<author>
		    <strong> Author: Dog </strong>
		</author>
		<example>
		    <em> Example: I code in ajax</em>
		</example>
	</li>
  </ol>
XML;
$xml = new SimpleXMLElement($string);
echo $xml->asXML();
?>
