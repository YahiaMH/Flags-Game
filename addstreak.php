<?php
$con = mysqli_connect('localhost', 'root', 'NO', 'flagsgamedb');

$sql = "UPDATE streaks_table SET easyMaxStreak = easyMaxStreak+1 WHERE username = 'YahiaMIH'";

$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "inserted data successfully";
}
?>