<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style type="text/css">
        @import url('https://fonts.cdnfonts.com/css/helvetica-2');
        *{
            font-family: 'Helvetica', sans-serif;
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
        }
        h2{
            font-weight: 800;
        }
        p{
            font-weight: 400;
        }
        .container {
            background-color: #f6f6f6;
            padding:50px
        }
        .banner{
            background-color: #fff;
            padding: 30px;
            width: 50%;
            margin: auto;
            margin-top: 40px;
        }
        @media (max-width: 992px) {
            .container{
                padding: 10px;
            }
            .banner {
                width: 95%;
            }

        }
    </style>
</head>
<body>
    <div class="container">
        <div class="banner">
            <h2>
                TDEE
            </h2>
            Dépense énergétique totale quotidienne
            Votre TDEE est de {{$tdee}} calories par jour
            Votre dépense énergétique quotidienne totale , est une estimation du nombre de calories que vous brûlez par jour en tenant compte de l'exercice physique. Elle est calculée en déterminant d'abord votre taux métabolique de base (BMR), puis en multipliant cette valeur par un multiplicateur d'activité.
        </div>
        <div class="banner">
            <h2 style=" font-family: 'Helvetica', sans-serif;">
                BMR
            </h2>
            <p>
                Taux métabolique de base
                Votre BMR est de {{$bmr}} calories par jour.
                Votre taux métabolique de base est le nombre de calories dont votre corps a besoin pour accomplir ses fonctions vitales les plus élémentaires (basales).
                c'est le nombre de calories que votre corps brûlerait même si vous étiez dans le coma pendant 24 heures.
                Cependant, il ne s'agit que des calories dont votre corps a besoin pour fonctionner. Le chiffre que nous devons déterminer est votre dépense énergétique quotidienne totale (TDEE).
            </p>
        </div>
        <div class="banner">
            <h2>
                Informations sur le régime alimentaire
            </h2>
            <p>
                Après avoir calculé notre dépense totale d'énergie quotidienne et que nous avons nos calories d'entretien, il est essentiel de les décomposer en macros (macronutriments).
             </p>
        </div>
    </div>




</body>
</html>
