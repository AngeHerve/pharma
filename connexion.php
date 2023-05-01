<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "phama";

// Connexion à la base de données
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Vérification de la connexion
if (!$conn) {
    die("La connexion a échoué");
}
?>