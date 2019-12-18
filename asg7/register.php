<!DOCTYPE html>
    <head>
        <title>Apple</title>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Slabo+27px&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
        <header class="header">
            <center><h1><a href=index.html>Apple</a></h1></center>

            <button class="open-button" onclick="openLoginForm()">Login</button>
            <div class="form-popup" id="myLoginForm">
                <form action="login.php" class="form-container" method="POST">
                  <h1>Login</h1>
              
                  <label for="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="loginEmail" required>
              
                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="loginPsw" required>

                  <button type="submit" class="btn">Login</button>
                  <button class="btn cancel" onclick="closeLoginForm()">Close</button>
                  </form>
            </div>
            <form action="search.php" method="POST">
                <input class="search-box" type="text" placeholder="Enter Search Query" name="searchQuery">
                <button type="submit" class="search-button">Search</button>
            </form>

        </header>
        <hr>    
    <br>
    <br>
    <body>  
    

    <?php
    // get values from form
    $name = $_POST['regFName'];
    $email = $_POST['regEmail'];
    $pw = $_POST['regPsw2'];

    // open the file to store data in with append operation 
    $filea = fopen("users.txt","a") or die("can't open file");

    // create line to store all values
    $line= $name.":".$email.":".$pw."\n";

    // write/store line into file
    fwrite($filea, $line);

    // close the file
    fclose($filea);

    print("Welcome $name! Your information has been saved!");
    ?>

    <center>
    <form action="shopping.php" method="POST">
    <div class="content">

        <div class="content-box">
            <strong><p>iPhone</p></strong>
            <p>$800</p>
            <p>Apple's Flagship Smartphone</p>  
            Quantity:<input type="number" name="numIphone" min="0" max="100">
        </div>
        
        <div class="content-box">
            <strong><p>Macbook</p></strong>
            <p>$1800</p>
            <p>Apple's Flagship Laptop</p>
            Quantity:<input type="number" name="numMacbook" min="0" max="100">
        </div>
        
        <div class="content-box">
            <strong><p>iPad</p></strong>
            <p>$600</p>
            <p>Apple's Flagship Tablet</p>
            Quantity:<input type="number" name="numIpad" min="0" max="100">
        </div>
    
        <div class="content-box">	 
            <strong><p>iPod<p></strong>
            <p>$300</p>
            <p>Apple's Flagship MusicPlayer</p>
            Quantity:<input type="number" name="numIpod" min="0" max="100">
        </div>
    
        
        <div class="content-box">	
            <strong><p>Airpods<p></strong>
            <p>$999</p>
            <p>Flex</p>
            Quantity:<input type="number" name="numIphone" min="0" max="100">
        </div>
        
        <div class="content-box">	
            <strong><p>AppleTV</p></strong>
            <p>$800</p>
            <p>Apple's Flagship TV(wut?)</p>
            Quantity:<input type="number" name="numAirpods" min="0" max="100">
        </div>
    
        <div class="content-box">	
            <strong><p>iMac<p></strong>
            <p>$7999</p>
            <p>Apple's Flagship Desktop</p>
            Quantity:<input type="number" name="numImac" min="0" max="100">
        </div>
        
        <div class="content-box">	
            <strong><p>Magsafe</p></strong>
            <p>$150</p>
            <p>Charge yo laptop</p>
            Quantity:<input type="number" name="numMagsafe" min="0" max="100">
        </div>
        
        <div class="content-box">	
            <strong><p>EarPods</p></strong>
            <p>$50</p>
            <p>Not so flex</p>
            Quantity:<input type="number" name="numEarpods" min="0" max="100">
        </div>

        <div class="content-box">	
            <strong><p>HomePod</p></strong>
            <p>$800</p>
            <p>Very weird flex</p>
            Quantity:<input type="number" name="numHomepod" min="0" max="100">
        </div>
    </div>
    <br>
    First name: <input type="text" name="FirstName" ><br><br>
    Last name: <input type="text" name="LastName" ><br><br>
    Zipcode: <input type=number name="Zipcode"><p>
    Email: <input type=email name="Email"><p>
    Credit Card No: <input type=number name="CreditCardNo"><p>    
    
    <input class="sub" type="reset" value="Reset"><br>
    <br>
     <input class="sub" type="submit">
    </form>
    </center>
    </form>


    
    
    <script src="js/script.js"></script>
    </body>
</html>
