<html>
<body>


<?php 
$num1 = floatval($_POST["num1"]);
$num2 = floatval($_POST["num2"]);
$operator = $_POST["operator"];

echo "The calculation result is: <br>";
switch ($operator) {
    case "*":
        echo "$num1 * $num2 = ".$num1 * $num2;
        break;
    case "/":
        echo "$num1 / $num2 = ".$num1 / $num2;
        break;
    case "+":
        echo "$num1 + $num2 = ".$num1 + $num2;
        break;
    case "-":
        echo "$num1 - $num2 = ".$num1 - $num2;
        break;
    default:
        echo "unidentified operator";
}

?>

</body>
</html>