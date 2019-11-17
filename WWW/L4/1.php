<?php
function process_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}


$cardNumber =  isset($_POST["cardNumber"]) ? process_input($_POST["cardNumber"]) : "";
$cardDate =  isset($_POST["cardDate"]) ? process_input($_POST["cardDate"]) : "";
$cardCVV =  isset($_POST["cardCVV"]) ? process_input($_POST["cardCVV"]) : "";
$ownerName =  isset($_POST["ownerName"]) ? process_input($_POST["ownerName"]) : "";
$ownerEmail =  isset($_POST["ownerEmail"]) ? process_input($_POST["ownerEmail"]) : "";
$ownerPhone =  isset($_POST["ownerPhone"]) ? process_input($_POST["ownerPhone"]) : "";
$transferValue =  isset($_POST["transferValue"]) ? process_input($_POST["transferValue"]) : "";

$cardNumberOk = preg_match("/^\d\d\d\d-\d\d\d\d-\d\d\d\d-\d\d\d\d$/",$cardNumber);
$cardDateOk = preg_match("/^\d\d\/\d\d$/",$cardDate);
$cardCVVOk = preg_match("/^\d\d\d$/",$cardCVV);
$ownerNameOk = preg_match("/^[A-Z][a-z]+ [A-Z][a-z]+$/",$ownerName);
$ownerEmailOk = preg_match("/^[a-z]+\@[a-z]+\.[a-z]+$/",$ownerEmail);
$ownerPhoneOk = preg_match("/^\+48\d{9}$/",$ownerPhone);
$transferValueOk = preg_match("/^\d+$/",$transferValue);

$allOk = $cardNumberOk && $cardDateOk && $cardCVVOk && $ownerNameOk && $ownerEmailOk && $ownerPhoneOk && $transferValueOk;

$cardNumberOk = $cardNumberOk || ($cardNumber == "");
$cardDateOk = $cardDateOk || ($cardDate == "");
$cardCVVOk = $cardCVVOk || ($cardCVV == "");
$ownerNameOk = $ownerNameOk || ($ownerName == "");
$ownerEmailOk = $ownerEmailOk || ($ownerEmail == "");
$ownerPhoneOk = $ownerPhoneOk || ($ownerPhone == "");
$transferValueOk = $transferValueOk || ($transferValue == "");

echo($allOk."-".$cardNumberOk."-".$cardDateOk."-".$cardCVVOk."-".$ownerNameOk."-".$ownerEmailOk."-".$ownerPhoneOk."-".$transferValueOk);


$w = ['wrong', 'right']

?>
<!DOCTYPE html>

<head>
   <title>Scam Limited-Company</title>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <link href="https://fonts.googleapis.com/css?family=Lato:100,300&display=swap&subset=latin-ext" rel="stylesheet">
   <link rel="stylesheet" href="./1.css">
</head>

<body id="wrap">

   <h1 align="center" id="branding">Scam Limited-Company</h1>
   <div class="container">
      <?php
         if (!$allOk) :
      ?>
      <form name="dane" action="./1.php" method="post">
         <div class="spread">
            <label for="cardNumber">Card number</label>
            <input class="<?php echo $w[$cardNumberOk] ?>" type="text" name="cardNumber" id="cardNumber" placeholder="1234 5678 9... ...." value="<?php echo $cardNumber ?>">
         </div>
         <div class="spread">
            <div style="width: min-content;">
               <label for="cardDate">Validity date</label>
               <input class="<?php echo $w[$cardDateOk] ?>" type="text" name="cardDate" id="cardDate" placeholder="01/12" value="<?php echo $cardDate ?>">
            </div>
            <div style="width: min-content;">
               <label for="cardCVV">CVV</label>
               <input class="<?php echo $w[$cardCVVOk] ?>" type="text" name="cardCVV" id="cardCVV" placeholder="123" value="<?php echo $cardCVV ?>">
            </div>
         </div>
         <div class="spread">
            <label for="ownerName">Name</label>
            <input class="<?php echo $w[$ownerNameOk] ?>" type="text" name="ownerName" id="ownerName" placeholder="Epstein Was Murdered" value="<?php echo $ownerName ?>">
         </div>
         <div class="spread">
            <label for="ownerEmail">Email</label>
            <input class="<?php echo $w[$ownerEmailOk] ?>" type="text" name="ownerEmail" id="ownerEmail" placeholder="john.olivier@example.com" value="<?php echo $ownerEmail ?>">
         </div>
         <div class="spread">
            <label for="ownerPhone">Phone number</label>
            <input class="<?php echo $w[$ownerPhoneOk] ?>" type="text" name="ownerPhone" id="ownerPhone" placeholder="+48123123123" value="<?php echo $ownerPhone ?>">
         </div>
         <div class="spread">
            <label for="transferValue">Amount</label>
            <input class="<?php echo $w[$transferValueOk] ?>" type="text" name="transferValue" id="transferValue" value="<?php echo $transferValue ? $transferValue : 0 ?>">
         </div>
         <div class="spread">
            <button class="amount" type="button" onclick="window.transferValue.value='10'">10PLN</button>
            <button class="amount" type="button" onclick="window.transferValue.value='25'">25PLN</button>
            <button class="amount" type="button" onclick="window.transferValue.value='50'">50PLN</button>
            <button class="amount" type="button" onclick="window.transferValue.value='75'">75PLN</button>
         </div>
         <button id="pay" type="submit">Pay</button>
      </form>

      <?php
         endif;
      ?>
      <?php
         if ($allOk) :
      ?>

      <ul>
         <li>$cardNumber: <?php echo $cardNumber ?></li>
         <li>$cardDate: <?php echo $cardDate ?></li>
         <li>$cardCVV: <?php echo $cardCVV ?></li>
         <li>$ownerName: <?php echo $ownerName ?></li>
         <li>$ownerEmail: <?php echo $ownerEmail ?></li>
         <li>$ownerPhone: <?php echo $ownerPhone ?></li>
         <li>$transferValue: <?php echo $transferValue ?></li>
      </ul>

      <?php
         endif;
      ?>
   </div>

</body>

</html>