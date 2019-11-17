<?php
session_name("SESJA3");
//session_id( "96de90f89b630dbafcd32891673ca748ss" );
session_start();
session_regenerate_id();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Licznik</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body>

<h3>Funkcja do sesji</h3>
<?php
echo session_id()."<br>\n";
echo session_name()."<br>\n";
echo session_save_path()."<br>\n";
if (!isset($_SESSION["var"])) $_SESSION["var"]=0;
else $_SESSION["var"]++;
if (isset($_SESSION["var"])) echo ( $_SESSION["var"] )."<br>\n";
?>

<h3>Ciastko sesyjne</h3>
<?php
echo $_COOKIE["SESJA3"];
?>

</body>
</html>