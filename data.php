<?php
include 'connexion.php';

// Récupération des données
$sql = "SELECT * FROM admins";

$jo = mysqli_query($conn, $sql);


if(mysqli_num_rows($jo) > 0)
while($anso = mysqli_fetch_assoc($jo)){

                $data[] = $anso;
}

mysqli_close($conn);

// Envoi des données au format JSON
header('Content-Type: application/json');

echo json_encode($data);
?>