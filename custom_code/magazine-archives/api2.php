<?php		
		
        // set up the connection variables		
        $db_name  = 'wfc_webdev';		
        $hostname = 'mysqldb.its.utexas.edu';		
        $username = 'wildflow';		
        $password = 'jwfP2xHJ39jT2qfN';		
		
        // connect to the database		
        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name;charset=utf8", $username, $password);	
        
        // a query get all the records from the users table		
        //$sql = 'SELECT * FROM app_pastissues WHERE id>=1';              
        $sql = '
                SELECT GROUP_CONCAT(name SEPARATOR "|") as title
                FROM app_pastissues
                WHERE volume=31 AND number=1
                ';		
		
        // use prepared statements, even if not strictly required is good practice		
        $stmt = $dbh -> prepare( $sql );		
		
        // execute the query		
        $stmt -> execute();		
		
        // fetch the results into an array		
        $result = $stmt -> fetchAll(PDO::FETCH_ASSOC);

        $mag = $result[0]['col'];

        $magYeah = explode("|", $mag);

        print_r($magYeah);
        // var_dump($result);
        //var_export($result);
		
        // convert to json		
        $json = json_encode($result);		
		
		
        // echo the json string		
        echo $json;
        

?>