<!DOCTYPE html>
<head>
        <title>Apple</title>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Slabo+27px&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
        <header class="header">
            <center><h1><a href=index.html>Apple</a></h1></center>
        </header>
        <hr>    
    <br>
    <br>
    <body>  
    

    <?php
    // get all values from form using foreach loop  

    $line = "";
    print("<center><h2> Thank you for shopping with us! The following is what you have entered!</h2></center>");
    print("<center>");
    foreach ($_POST as $key => $value)
    {
    // form line with one value at a time when you go through the loop
    if($value != '0')
        {
        $line .= $value . ":";
    
    if($key == "CreditCardNo"){
        $arr = str_split($value);
        $newVal = "xxxxxxxxxxxx".$arr[12].$arr[13].$arr[14].$arr[15];
        print("<li> $key: $newVal ");
    }
    else{
    // print key and values to users
        print("<li> $key: $value ");
        }
    }
    }
    print("</center>");

    // add \n to end of the line

    $line .= "\n";

    // open the file to store data in with append operation 
    $filea = fopen("db.txt","a") or die("can't open file");


    // write/store line into file
    fwrite($filea, $line);

    // close the file
    fclose($filea);

    ?>    
    
    <script src="js/script.js"></script>
    </body>
</html>
