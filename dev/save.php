<?php
	// print_r($_POST);
	$name = $_POST['entry_66704122'];
	$email = $_POST['entry_2135852305'];
	$status = $_POST['entry_1739474268'];
	$status_other = $_POST['entry_1739474268_other_option_response'];
	$interest = $_POST['entry_1398427809'];
	$q1 = $_POST['entry_1918432746'];
	$q2 = $_POST['entry_477095358'];
	$q3 = $_POST['entry_1554396570'];
	$q4 = $_POST['entry_1631672294'];
	$q5 = $_POST['entry_1970954995'];
	$url = $_POST['entry_354358979'];
	$content = $_POST['entry_775723807'];
	$anno = $_POST['entry_903406015'];
	$headline = $_POST['entry_1494902380'];
	// generate a uid for this response
	$uid = uniqid();
	$toinsert = "'" . $name . "', '" . $email . "', '" . $status . "', '"
				. $status_other . "', '" . $interest . "', '" . $q1 . "', '"
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
	$sql = "INSERT INTO response (uname, email, status, status_other, interest, q1, q2, q3, q4, q5, url, content, tag, headline) VALUES " 
	. " (". $toinsert . ")";
	// echo $sql;
	// return insert result
	if(mysqli_query($conn, $sql)) {
		echo "{data: 'success'}";
	} else {
		echo mysqli_error();
	}
	mysqli_close($conn);
?>
