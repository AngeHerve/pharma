  // Envoi des données au script PHP
            function  formdata(){
                $.ajax( {
                    url: 'http://localhost/projet/form.php',
                    method: 'POST',
                    data: $( '#formular' ).serialize(),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    success: function ()
                    {
                        console.log( 'Les données ont été envoyées avec succès !' );
                    },
                    error: function ()
                    {
                        console.log( 'Erreur lors de l\'envoi des données !' );
                    }
                } );

            }

                            $.ajax( {
                                    url: 'http://localhost/projet/data.php',
                                    method: 'GET',

                                    success: function ( data )
                                    {
                                        // Vérifier que des données ont été retournées
                                        if ( data.length > 0 )
                                        {
                                            // Boucler à travers les données et les ajouter à l'élément <ul>
                                            for ( var i = 0; i < data.length; i++ )
                                            {
                                                $( '#liste' ).append( 
                                                    '<p>' + data[ i ].nom + '</p>',
                                                    '<br>',
                                                     '<p>' + data[ i ].numero +  '</p>',
                                                     '<br>',
                                                      '<p>' + data[ i ].ref + '</p>',
                                                      '<br>',
                                                       '<p>' + data[ i ].fournisseur +'</p>',
                                                       '<br>',
                                                        '<p>' + data[ i ].quantite + '</p>',
                                                        '<br>',
                                                         '<p>' + data[ i ].stock + '</p>',
                                                         '<br>',
                                                          '<p>' + data[ i ].date_Exp +'</p>',
                                                          '<br>',
                                                          '<p>' + data[ i ].vente +'</p>'
                                
                                                 );
                                            }
                                        } else
                                        {
                                            // Aucune donnée retournée
                                            $( '#list' ).append( '<p>Aucune donnée trouvée</p>' );
                                        }
                                    },
                                    error: function ()
                                    {
                                        console.log( 'Erreur lors de la récupération des données.' );
                                    }

                                } );


            