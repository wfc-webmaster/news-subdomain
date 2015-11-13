<?php		
		
        // set up the connection variables		
        $db_name  = 'wfc_webdev';		
        $hostname = 'mysqldb.its.utexas.edu';		
        $username = 'wildflow';		
        $password = 'pKMhU27eWTaFKPMS';		
		
        // connect to the database		
        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name;charset=utf8", $username, $password);

        $sql_1 = "
                SELECT DISTINCT issue, volume, number
                FROM app_pastissues
                ORDER BY volume DESC, number ASC
                ";

        // use prepared statements, even if not strictly required is good practice              
        $stmt_1 = $dbh -> prepare( $sql_1 );              
                
        // execute the query            
        $stmt_1 -> execute();             
                
        // fetch the results into an array              
        $result_1 = $stmt_1 -> fetchAll(PDO::FETCH_ASSOC);

        //print_r($result_1);

        foreach ($result_1 as $mag_issue => $value) {
                $issue = $value['issue'];

        
                //echo $issue . '<br />';

                $sql_2 = "
                        SELECT DISTINCT name, content
                        FROM app_pastissues
                        WHERE issue = '$issue'
                        ORDER BY volume DESC, id ASC
                        ";              
                        

                // use prepared statements, even if not strictly required is good practice              
                $stmt_2 = $dbh -> prepare( $sql_2 );            
                        
                // execute the query            
                $stmt_2 -> execute();           
                        
                // fetch the results into an array              
                $result_2 = $stmt_2 -> fetchAll(PDO::FETCH_ASSOC);

                $mag_content['stories'] = $result_2;

                $mag_complete = $value+$mag_content;
                                               
                //print_r($mag_complete);
                //var_dump($result_2);
                //var_export($result_2);
                        
                // convert to json              
                $json = json_encode($mag_complete);         
                        
                        
                // echo the json string         
                echo $json;
        
                }
        

?>