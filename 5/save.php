<?php
	function setTimezone($default) {
	    $timezone = "";
	   
	    // On many systems (Mac, for instance) "/etc/localtime" is a symlink
	    // to the file with the timezone info
	    if (is_link("/etc/localtime")) {
	       
	        // If it is, that file's name is actually the "Olsen" format timezone
	        $filename = readlink("/etc/localtime");
	       
	        $pos = strpos($filename, "zoneinfo");
	        if ($pos) {
	            // When it is, it's in the "/usr/share/zoneinfo/" folder
	            $timezone = substr($filename, $pos + strlen("zoneinfo/"));
	        } else {
	            // If not, bail
	            $timezone = $default;
	        }
	    }
	    else {
	        // On other systems, like Ubuntu, there's file with the Olsen time
	        // right inside it.
	        $timezone = file_get_contents("/etc/timezone");
	        if (!strlen($timezone)) {
	            $timezone = $default;
	        }
	    }
	    date_default_timezone_set($timezone);
	}
	// print_r($_POST);
	mb_internal_encoding("UTF-8");
	mb_http_output( "UTF-8" );
	header('Content-Type: text/html; charset=utf-8');
	mb_http_input('UTF-8');
	mb_language('uni');
	mb_regex_encoding('UTF-8');
	ob_start('mb_output_handler');
	setTimezone("UTC");
	$date = new DateTime();
	$strdate = date('Y-m-d H:i:s',$date->getTimestamp());
	$name = $_POST['entry_66704122'];
	$q1 = $_POST['entry_1918432746']; //  Does the story explain the causes of a problem?
	$q2 = $_POST['entry_477095358']; // Does the story present an associated solution to that problem?
	$q3 = $_POST['entry_1554396570']; // Does the story address the problem solving and how-to details of implementation?
	$q4 = $_POST['entry_1631672294']; // Does the story present results, or indications of progress, linked to the solution? 
	$q5 = $_POST['entry_1970954995']; // Does the story convey an insight or teachable lesson?
	$url = $_POST['entry_354358979'];
	$content = $_POST['entry_775723807'];
	$anno = $_POST['entry_903406015'];
	$headline = $_POST['entry_1494902380'];
	// generate a uid for this response
	$uid = uniqid();
	$toinsert =  "'" . $strdate . "'," . "'" . $name . "', '" . $q1 . "', '"
				. $q2 . "', '" . $q3 . "', '" . $q4 . "', '" . $q5 . "',  '" . $url . "', '"
				. $content . "', '" . $anno . "', '" . $headline . "'"; 
	// insert into mysql table sj.response
	$servername = "127.0.0.1";
	$username = "miprub";
	$password = "LearMetrics1";
	$dbname = "sj";
	
	$conn = new mysqli($servername, $username, $password, $dbname);

	if($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	mysqli_set_charset($conn, "utf8");
	$sql = "INSERT INTO response_five (tstamp, uname, q1, q2, q3, q4, q5, url, content, tag, headline) VALUES " 
	. " (". $toinsert . ")";
	#$sql = $conn->real_escape_string($sql);
	// echo $sql;
	// return insert result
	if(mysqli_query($conn, $sql)) {
		echo "{data:success}";
	} else {
		echo "{data:fail}";
	}
	mysqli_close($conn);
?>
