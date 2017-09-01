<?php
session_start();
if (isset($_SESSION["loggedin"])) {  # check for session data
  $loggedin = $_SESSION["loggedin"];
  print("This is:  $loggedin.\n");
} else {
  $_SESSION["loggedin"] = "HURRAY";  # default
}
?>