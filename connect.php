<?php
echo "<pre>";
print_r($_POST);
echo "</pre>";

$username = $_POST['username'];

// $con = mysqli_connect('sql101.unaux.com', 'unaux_34126100', 'uhv6rlbz2pjsi9', 'unaux_34126100_flagsGamedb');
$con = mysqli_connect('localhost', 'root', 'NO', 'flagsgamedb');

$sql = "insert into `streaks_table` (`username`,`easyMaxStreak`,`mediumMaxStreak`,`hardMaxStreak`) values ('$username','0','0','0')";
echo $sql;

$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "inserted data successfully";
}
?>