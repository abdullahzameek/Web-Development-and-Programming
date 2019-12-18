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

        // process login instruction 

        // extract infor from form
        $searchQuery = $_POST['searchQuery'];

        // open the file users5.txt

        $file = fopen("products.txt", "r");

        $flag = FALSE;

        // read one line at time from file and assign each line to a string called $line
        while(!(feof($file)))
        {

        // get one line at time from file
        $line= fgets($file);

        // remove end of line character from line using rtrim function
        $line = rtrim($line);

        // split string on : to get each field separatly and put values in an array

        $info = explode(":", $line);

        // check for a match between what user inputted and whats in file

        if (($searchQuery == $info[0] ))
        {
        // if there is a match set flag to true and exit
        $flag = TRUE;
        break;
        }

        }

        // check to see if there is a match if flag = TRUE

        if ($flag)
        {
            print("<center> $info[0] <br> $info[1] <br> $info[2] <br> Stock Available: $info[3]!<center><br> <center><a href=\"index.html\">Click here to go back to the home page!</a>"); 
        }
        else
        {
            print("<center>Cannot find product<br><a href=\"index.html\">Click here to go back to the home page!</a></center>");
        }

    

  
    ?>
    <script src="js/script.js"></script>
    </body>
</html>
