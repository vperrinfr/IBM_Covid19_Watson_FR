# Webhook pour API Covid19 

Vous pouver interroger des données dynamiques grâce à la fonctionnalité WebHook de Watson Assistant. 
Un bot Covid19 pourrait alors répondre à différentes questions sur l'état des contaminations.

Dans cet exemple, j'utilise le site :

- [Covid19 API](https://www.covid19api.com/)

Celui-ci ne retourne un fichier JSON avec le nombre de cas (confirmés, décédés et guéris).

```
{
      "Country": "France",
      "CountryCode": "FR",
      "Slug": "france",
      "NewConfirmed": 25646,
      "TotalConfirmed": 90848,
      "NewDeaths": 1054,
      "TotalDeaths": 7574,
      "NewRecovered": 1437,
      "TotalRecovered": 15572,
      "Date": "2020-04-05T06:37:00Z"
    }
```

J'ai publié la Cloud Function permettant l'appel à cet API, ainsi que le skill pour pouvoir le tester rapidement.

- [Cloud Function](CloudFunction.js)
- [Skill](skill-Covid19-API-Call.json)

Il peut répondre à la question "Combien de cas en France ?" ou "Combien de cas en Allemagne ?".
Tous les pays ont été implementés dans les entités.
