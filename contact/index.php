
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../assets/img/favicon.ico">

    <title>Contact | NYU STIT</title>

    <!-- Bootstrap core CSS -->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!-- <link href="assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet"> -->

    <!-- Custom styles for this page -->
    <link href="../assets/css/index.css" rel="stylesheet">
    <link href="assets/css/contact.css" rel="stylesheet">

    <style media="screen">

      /*NAVBAR*/
      nav {
        margin: 0;
        border: none;
        background-color: #57068C;
        background: -webkit-linear-gradient(#3B0264, #57068C); /* For Safari 5.1 to 6.0 */
        background: -o-linear-gradient(#3B0264, #57068C); /* For Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(#3B0264, #57068C); /* For Firefox 3.6 to 15 */
        background: linear-gradient(#3B0264, #57068C); /* Standard syntax */
      }
      nav > div.container {
        margin-left: 10%;
        margin-right: 10%;
      }
      .navbar-default .navbar-nav > li > a, .navbar-default .navbar-brand {
        color: white;
      }
      .navbar-default {
        border: none;
      }


      /*-------------*/

      div.page-header {
        margin: 0;
        padding: 0;
        border: none;
      }

      /*----------*/

      /*FOOTER STYLES*/
      footer > div.container > span > ul {
        float: left;
        margin: 0;
      }
      footer > div.container > span > ul > li {
        list-style: none;
        float: left;
        padding-right: 5%;
      }
      footer > div.container > span > ul > li > a {
        color: #B5ADA6;
      }
      #footer-links {
        width: 75%;
      }
      #footer-social {
        width: 25%;
      }
      .footer {
        background-color: white;
        height: 70px;
        line-height: 70px;
        border-top-color: #B5ADA6;
        border-top-style: solid;
        border-top-width: 1px
      }

      /*----------*/

    </style>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="height:100px;line-height:100px;">
        <div class="navbar-header">
          <a class="navbar-brand" href="../../">
            <img src="../assets/img/nyu_short_white.png" alt="NYU Logo">
            <div class="logo-line"></div>
            <p class="logo-acc">STIT</p>
          </a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="collapse navbar-collapse" style="padding:25px;">
          <ul class="nav navbar-nav">
            <!-- <li class="active"><a href="./">Home</a></li> -->
            <li><a href="../about-us">ABOUT US</a></li>
            <li><a href="../portfolio/">PORTFOLIO</a></li>
            <li><a href="../design/">DESIGN</a></li>
            <li><a href="../our-team/">OUR TEAM</a></li>
            <li><a href="./">CONTACT</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <!-- Begin page content -->
    <div class="container" style="top: 100px;">

      <div class="" style="padding:5% 20%;height:auto;line-height:450px;position:inherit;margin-top:100px;">
        <div class="page-header" style="text-align:center;">
          <span class="cc">
            <h1>CONTACT</h1>
            <p class="lead">If you have any questions or problems don’t hesitate to let us know and we’ll work hard to solve it.</p>

            <!-- IDEA: Add a button for another form for bug issues with an app of ours -->

            <form id="contact-form" action="" method="post" target="no-target">
              <input id="name" type="text" name="name" placeholder="Name" required>
              <?php $name = $_POST['name']; ?>
              <input id="email" type="email" name="email" placeholder="Email" required>
              <?php $email = $_POST['email']; ?>
              <input id="subject" type="text" name="subject" placeholder="Subject" style="width:93%;">
              <?php $subject = $_POST['subject']; ?>
              <textarea id="message" name="message" maxlength="10000" placeholder="Question" required style="width:93%;"></textarea>
              <?php $message = $_POST['message']; ?>
              <input class="submit" type="submit" value="SEND">
            </form>

            <?php

              // name
              // email
              // subject
              // message

              // Remove all illegal characters from email
              $email = filter_var($email, FILTER_SANITIZE_EMAIL);

              // Validate e-mail
              if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
                  echo("$email is a valid email address");
              } else {
                  echo("$email is not a valid email address");
              }

              $newName = filter_var($name,FILTER_SANITIZE_STRING);
              $newSubject = filter_var($subject,FILTER_SANITIZE_STRING);
              $newMessage = filter_var($message,FILTER_SANITIZE_STRING);

             ?>

            <p id="confirmation" style="padding-top:2%;display:none;">Thank you! Your message has been received.</p>

            <!-- to not have the google forms confirmation page pop up -->
            <iframe src="#" id="no-target" name="no-target" style="visibility:hidden"></iframe>

          </span>
        </div>
      </div> <!-- end section -->
    </div> <!-- end page content -->

    <footer class="footer">
      <div class="container" style="height:auto;">
        <span class="cc">
          <ul id="footer-links">
            <li><a href="../">HOME</a></li>
            <li><a href="../about-us/">ABOUT US</a></li>
            <li><a href="../portfolio/">PORTFOLIO</a></li>
            <li><a href="../design/">DESIGN</a></li>
            <li><a href="../our-team/">OUR TEAM</a></li>
            <li><a href="./">CONTACT</a></li>
          </ul>
          <ul id="footer-social">
            <li><a href="#"><img src="../assets/img/social-twitter.png" alt=""></a></li> <!-- TWITTER -->
            <li><a href="#"><img src="../assets/img/social-linkedin.png" alt=""></a></li> <!-- LINKEDIN : NOTE: not needed -->
            <li><a href="#"><img src="../assets/img/social-instagram.png" alt=""></a></li>  <!-- INSTAGRAM -->
            <li><a href="#"><img src="../assets/img/social-facebook.png" alt=""></a></li> <!-- FACEBOOK -->
          </ul>
        </span>
      </div>
    </footer>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script  src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="../assets/js/bootstrap.min.js"></script>
    <script src="assets/js/contact.js"></script>
  </body>
</html>
