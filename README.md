# Contenu pour IBM Watson Assistant sur le thème Covid19 

Ce github est dédié au partage de contenu d'entrainement d'un Bot sur le thème Covid19 pour Watson Assistant en français.

Nous avons décidé de fournir l’ensemble des données d’entrainement de ce bot en open-source pour faciliter son utilisation et permettre une évolution communautaire. Ces données d'entrainement regroupent un ensemble de **49 intentions et 1084 variations** ainsi ques les entités, pour répondre à des questions telles que « Qu'est ce que le coronavirus ou COVID-19 ? », « Où trouver les statistiques officielles sur le Covid19 ? » ou « A quel moment le confinement prendra fin ? ».
Ceci peut être utilisé pour enrichir vos Bots actuels ou vous mettre la mise en œuvre très rapidement un nouveau Bot Covid-19.

Il a été travaillé par une équipe d'IBMers volontaire et utilisé en production dans pour répondre à des questions d'IBMers.

![equipe](/img/Photo%20Equipe.png)

``Veuillez noter que ce modèle est uniquement destiné à la compréhension des intentions - le contenu des réponses elles-mêmes doit être géré ultérieurement. Nous ne voulions pas inclure ce type de réponses, la situation étant encore évolutive, et les conseils de santé pouvant varier. Les entreprises peuvent également apporter leurs propres réponses sur mesure aux intentions.``

## Contenu détaillé du skill

**Intentions**

| Nom  | Phrase d'exemple | Nombre de variations |
| ------------- | ------------- | ------------- |
| #01.1.aboutVirus_WhatIsIt | D'où vient le coronavirus ?  | 24 |
| #01.10.globalCovid_spread  | Quelle est la progression du coronavirus dans le Monde ?  | 25 |
| #01.11.globalCovid_pandemic | c'est quoi une pandémie ?  | 14 |
| #01.2.aboutVirus_Transmission  | Comment puis-je être infecté ?  | 25 |
| #01.3.aboutVirus_HighRiskGroups | Quelles sont les personnes les plus menacées ?  | 24 |
| #01.4.aboutVirus_Incubation_Period  | Quelle est la période d'incubation ?  | 25 |
| #01.5.aboutVirus_mutation | Le virus peut-il muter ?  | 25 |
| #01.6aboutVirus_futur  | Sait-on combien de temps ça va durer le Covid19 ?  | 25 |
| #01.7.aboutVirus_FranceReady | Le gouvernement est-il prêt pour Covid19 ?  | 18 |
| #01.8.aboutVirus_numbers  | Combien de personnes malades en France?  | 29 |
| #02.1.Prevention_info | Quelle est la prévention la plus efficace ?  | 26 |
| #02.2.Prevention_desinfection  | L'alcool tue-t-il le coronavirus ?  | 22 |
| #02.3.Prevention_howToWashHands | Comment se laver les mains avec du savon ?  | 20 |
| #02.4.Prevention_Mask  | Un masque FFP3 peut-il me protéger ?  | 21 |
| #02.5.Prevention_Gants | Faut-il que je porte des gants ?  | 18 |
| #02.6.Prevention_ContactInfection  | Je connais une personne qui a le Covid19 que faire? | 37 |
| #02.7.Prevention_Violence | Mon mari est violent avec moi et les enfants  | 9 |
| #03.1.Treatment_vaccine  | Quand aura on un vaccin?  | 20 |
| #03.2.info_traitements | Quel traitement antiviral contre le Coronavirus ? | 20 |
| #03.3.Traitements_what_to_do_symptomes  | Content Cell  | 43 |
| #03.4.Treatment_depistage | Content Cell  | 40 |
| #03.5.Treatment_shortnessOfBreath  | Content Cell  | 19 |
| #03.6.Treatment_aggravatingFactors | Content Cell  | 19 |
| #03.7.Treatment_doctor  | Content Cell  | 16 |
| #03.8.Treatment_Penurie | Content Cell  | 14 |
| #03.9.Treatment_chloroquine  | Content Cell  | 23 |
| #05.1.Confinement_whatIsIt | Content Cell  | 12 |
| #05.10.Confinement_attestation_procedureGlobale | Content Cell  | 16 |
| #05.11.Confinement_attestation_details | Content Cell  | 28 |
| #05.2.Confinement_Rules_goingOut | Content Cell  | 54 |
| #05.3.Confinement_time | Content Cell  | 15 |
| #05.4.Confinement_Work | Content Cell  | 23 |
| #05.5.Confinement_food | Content Cell  | 28 |
| #05.6.Confinement_school | Content Cell  | 27 |
| #05.7.Confinement_Senior | Content Cell  | 28 |
| #05.8.Confinement_stopWorking | Content Cell  | 25 |
| #05.9.Confinement_violation | Content Cell  | 23 |
| #06.1.travel_ability | Content Cell  | 21 |
| #06.2.travel_backToFrance_WhenAndHow | Content Cell  | 21 |
| #06.3.travel_backToFrance_Contact | Content Cell  | 19 |
| #06.4.travel_backToFrance_flightBackInfo | Content Cell  | 18 |
| #06.6.travel_backToFrance_landingnearfrontier | Content Cell  | 19 |
| #06.7.travel_backToFrance_passportIssue | Content Cell  | 19 |
| #06.8.travel_frenchLivingAbroad | Content Cell  | 19 |
| #06.9.travel_foreigners | Content Cell  | 15 |
| #10.1.Economy_Impact | Content Cell  | 5 |
| #10.2.Other_Contact_Disabilities | Content Cell  | 10 |
| #10.3.Other_Volunteering | Content Cell  | 20 |
| #10.4.Business_Open_Closed | Content Cell  | 17 |

**Entités**

| Nom  | Variation |
| ------------- | ------------- | 
| @covid | Corona Virus, SRAS-19, Corona, COVID-19, COVID19 | 



