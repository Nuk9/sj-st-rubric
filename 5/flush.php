<?php
      // utf8 settings
      mb_internal_encoding("UTF-8");
	    mb_http_output( "UTF-8" );
	    header('Content-Type: text/html; charset=utf-8');
	    mb_http_input('UTF-8');
	    mb_language('uni');
	    mb_regex_encoding('UTF-8');
      // Export mysql file to csv
      $servername = "127.0.0.1";
	    $username = "miprub";
	    $password = "LearMetrics1";
	    $dbname = "sj";
      $csv_file = "./response-five.csv";
      $csv_win_file = "./response-excel-five.csv";
      $conn = new mysqli($servername, $username, $password, $dbname);
      if($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
	    }
	    mysqli_set_charset($conn, "utf8");
      $conn->query("SET NAMES utf8");
      if(file_exists($csv_file)) {
          unlink($csv_file);
      }
      if(file_exists($csv_win_file)) {
          unlink($csv_win_file);
      }
      
      function export_to_csv() {
        global $csv_file;
        global $csv_win_file;
        
        global $conn;
        $query = "SELECT tstamp, uname, q1, q2, q3, q4, q5, url, content, tag, headline, localtstamp FROM response_five";
        
        $resp = $conn->query($query);
        $output = fopen($csv_file, 'w');
        fwrite($output, "tstamp,uname,problem,solution,implementation,result,insight,url,content,tag,headline,localtstamp\n");
        while($rows = mysqli_fetch_array($resp, MYSQLI_ASSOC)) {
          fputcsv($output, $rows);  
        }
        fclose($output);
        shell_exec("iconv -f UTF8 -t WINDOWS-1252//TRANSLIT response-five.csv > response-excel-five.csv");
      }
      
      function get_count() {
        global $conn;
        $linenumquery = "SELECT count(*) FROM response";
        $result = $conn->query($linenumquery);
        return mysqli_num_rows($result);
      }
      
      export_to_csv();
      mysqli_close($conn);
      echo "success";
    ?>
