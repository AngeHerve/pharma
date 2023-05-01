<?php

include 'connexion.php';

// Récupération des données du formulaire
$nom = $_POST['nom'];
$numero = $_POST['numero'];
$reference = $_POST['reference'];
$fournisseur = $_POST['fournisseur'];
$quantite = $_POST['quantite'];
$stock = $_POST['stock'];
$date = $_POST['date_Exp'];
$vente = $_POST['vente'];

// Fonction pour insérer des données dans la base de données
$sql = "INSERT INTO admins (nom, numero, ref, fournisseur, quantite, stock, date, vente) VALUES ('$nom', '$numero', '$reference', '$fournisseur', '$quantite', '$stock', '$date', '$vente')";
    $result= mysqli_query($conn, $sql)

?>