<html>
<body>

Here is your Madlibs output:<br>

<?php 
$adj1 = $_POST["adj1"];
$adj2 = $_POST["adj2"];
$noun1 = $_POST["noun1"];
$verb1 = $_POST["verb1"];
$noun2 = $_POST["noun2"];
$num1 = $_POST["num1"];
$verb2 = $_POST["verb2"];
$noun3 = $_POST["noun3"];

echo "The $adj1 $noun1 $verb1 the $adj2 house. There she saw a $noun2 $verb2 with $num1 $noun3.";

?>

</body>
</html>