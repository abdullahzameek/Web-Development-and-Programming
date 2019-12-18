<html>
<body>


<?php 
$fullName = $_POST["fullName"];
$ans1 = $_POST["question1"];
$ans2 = $_POST["question2"];
$ans3 = $_POST["question3"];
$total = 0;

echo "Thanks for playing $fullName! Here's how you did <br>";

if ($ans1 == "Budapest") {
    echo "Yep! There's no NYU site in Budapest<br>";
    $total = $total +1;
} else {
    echo "Wrong! The right answer is Budapest<br>";
}


if ($ans2 == "Platinum") {
    echo "Yep! There's no NYU school called Platinum<br>";
    $total = $total +1;
} else {
    echo "Wrong! The right answer is Platinum<br>";
}

if ($ans2 == "Engineering") {
    echo "Yep! Tandon specialises in Engineering<br><br>";
    $total = $total +1;
} else {
    echo "Wrong! The right answer is Engineering<br><br>";
}

echo "Here are your answers: <br>";
echo "$ans1 <br>";
echo "$ans2 <br>";
echo "$ans3 <br>";

$percentscore = floatval(($total/3) * 100);
echo "<br>Your final score is $percentscore out of 100<br>";

?>

</body>
</html>