<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="js/show.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
   
  </head>
  <body>
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
      $csv_file = "./response.csv";
      $csv_win_file = "./response-excel.csv";
      $conn = new mysqli($servername, $username, $password, $dbname);
      if($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
	    }
	    mysqli_set_charset($conn, "utf8");
      $conn->query("SET NAMES utf8");
      
      function export_to_csv() {
        global $csv_file;
        if(file_exists($csv_file)) {
          unlink($csv_file);
        }
        if(file_exists($csv_win_file)) {
          unlink($csv_win_file);
        }
        global $conn;
        $query = "SELECT uname, email, occupation, interest, q1, q2, q3, q4, q5, url, content, tag, headline FROM response";
        
        $resp = $conn->query($query);
        $output = fopen($csv_file, 'w');
        while($rows = mysqli_fetch_array($resp, MYSQLI_ASSOC)) {
          fputcsv($output, $rows);  
        }
        fclose($output);
        // convert response.csv to response-excel-win.csv
        shell_exec("iconv -f UTF8 -t WINDOWS-1252 response.csv > response-excel.csv");
      }
      
      function get_count() {
        global $conn;
        $linenumquery = "SELECT count(*) FROM response";
        $result = $conn->query($linenumquery);
        return mysqli_num_rows($result);
      }
      
      export_to_csv();
      mysqli_close($conn);
    ?>
    <div id="container">
		  <div id="logo">
        <a href="/"></a>
      </div>
      <h2>Data Export Page</h2>
      <?php
        if(!file_exists($csv_file)) {
        ?>
        <b>Oops! We could not provide CSV format file at this point. Please contact <a href="mailto:i@xuzhao.net">developer</a>.	</b>
     <?php
        } else {
      ?>
        <a href="/dev/response.csv" download>
          <button> Download the data (UTF-8) </button>
        </a>
        <br/>
        <br/>
        <a href="/dev/response-excel.csv" download>
          <button> Download the data for MS Excel (WINDOWS-1252) </button>
        </a>
      <?php
        }
      ?>
      <table></table>
	  </div>
  </body>
</html>
