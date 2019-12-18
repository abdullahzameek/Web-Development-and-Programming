<html>
<body>


<?php 

$name = $_POST["fullName"];
$email = $_POST["email"];
$snack = $_POST["item"];
$val = floatval($_POST["num"]);

switch ($snack) {
    case "Cookies":
        $total = $val * 2;
        break;
    case "Chips":
        $total = $val * 1;
        break;
    case "Chocolates":
        $total = $val * 3;
        break;
    case "Crackers":
        $total = $val * 1;
        break;
    default:
        echo "unidentified item";
}

echo "Thank you for your purchase $name! <br> Your total amount due for $val x $snack is USD $total";

?>

</body>
</html>