<?php
	$UploadDir = "/var/www/html/rawfiles/";
	header("location: 3.php");
	if(file_exists($UploadDir.$_GET["file"]))
		unlink($UploadDir.$_GET["file"]);
?>