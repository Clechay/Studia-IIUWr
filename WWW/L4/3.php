<?php
$IsPostFormData = (isset($_POST["sent"]) && ($_POST["sent"] == "y"));
$IsGetFormData = (isset($_GET["sent"]) && ($_GET["sent"] == "y"));
$UploadDir = "/var/www/html/rawfiles/";
$UploadCodes = array("UPLOAD_ERR_OK", "UPLOAD_ERR_INI_SIZE", "UPLOAD_ERR_FORM_SIZE", "UPLOAD_ERR_PARTIAL", "UPLOAD_ERR_NO_FILE");
$MaxFileSize = 100000;

?>



<!DOCTYPE html>

<head>
	<title>Scam Limited-Company</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link href="https://fonts.googleapis.com/css?family=Lato:100,300&display=swap&subset=latin-ext" rel="stylesheet">
	<link rel="stylesheet" href="./3.css">
</head>

<body id="wrap">

	<h1 id="branding">Scam Limited-Company</h1>
	<div class="container">
		<div class="card">
			<h4>Uploaded files:</h4>
			<?php
				$dir_handle = opendir($UploadDir); 
				// reading the contents of the directory 
				while(($file_name = readdir($dir_handle)) !== false):
					if($file_name != "." && $file_name != ".."):
			?>
				<div class="spread">
					<h6>
						<?php echo $file_name; ?>
					</h6>
					<div class="file-options">
						<a href="./3del.php?file=<?php echo urldecode($file_name); ?>">
							delete
						</a>
					</div>
				</div>
			<?php
					endif;
				endwhile;
				closedir($dir_handle); 
			?>
		</div>
		
		<?php
		if ($IsPostFormData):
		?>
		<?php
			$UploadFile = $UploadDir . $_FILES['plik']['name'];
		?>
			<div class="card">
				<h6> 
					<?php echo move_uploaded_file($_FILES['plik']['tmp_name'], $UploadFile) ? 
					'Plik został poprawnie uploadowany i skopiowany w nowe miejsce <br>'.$UploadFile :
					'Błąd przy uploadowaniu' ?>
				</h6>
				<div class='spread'>
					<h6>Nazwa wysłanego pliku (po stronie klienta):</h6>
					<h6><?php echo $_FILES["plik"]["name"]; ?></h6>
				</div>
				<div class='spread'>
					<h6>Typ zawartości wysłanego pliku:</h6>
					<h6><?php echo $_FILES["plik"]["type"]; ?></h6>
				</div>
				<div class='spread'>
					<h6>Rozmiar wysłanego pliku:</h6>
					<h6><?php echo $_FILES["plik"]["size"]; ?></h6>
				</div>
				<div class='spread'>
					<h6>Nazwa pliku na serwerze:</h6>
					<h6><?php echo $_FILES["plik"]["tmp_name"]; ?></h6>
				</div>
				<div class='spread'>
					<h6>Kod błędu związany z wysłaniem pliku:</h6>
					<h6><?php echo $UploadCodes[$_FILES["plik"]["error"]] . ":" . $_FILES["plik"]["error"]?></h6>
				</div>
			</div>
		<?php
		endif;
		?>
		<div class="card">
			<form action="3.php" method="post" enctype="multipart/form-data" name="plik">
				<input type="hidden" name="MAX_FILE_SIZE" value="<?php echo $MaxFileSize; ?>">
				<input type="file" name="plik" size="40">
				<button type="submit" id="send">Send file</button>
				<input type="hidden" name="sent" value="y">
			</form>
		</div>
	</div>
</body>

</html>