<?php
$RECIEVER = $_REQUEST["to"];
	# execute a SQL query on the database
	$array = explode(';',$RECIEVER);
	print_r($array);
	
	foreach ($array as $value)
    {
        ?>
        <li>
        <?php print $value;
        }
        ?>
        </li>
        
        <?php
foreach ($array as $key => $value)
    {
        
    print "<li>" . $key . "-" . $value . "</li>";
    }

	?>