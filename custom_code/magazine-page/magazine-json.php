<?php

	 // include db connection variables
	require '../db/conn.php';

	$wfc_db = new mysqli($hostname, $username, $password, $db_name);

	if (mysqli_connect_errno()) {
	  	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	 } 

	//Get featured/latest magazine issue
	$mag_query_current = "
	                        SELECT *
	                        FROM magazine
	                        WHERE publish = 1
	                        ORDER BY id DESC
	                        LIMIT 4
	                                    ";

	$magazine = $wfc_db->query($mag_query_current);
	
	foreach ($magazine as $issue) {
		$magURL[] = file_get_contents($issue['url']);
	}

	//print_r($magURL);
	echo json_encode($magURL);

?>