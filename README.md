# web_vscode_azure_nodejs

Min hjemmeside findes her: [simonweb.ninja](http://simonweb.ninja)



Jeg brugte azure til, at være min hosting provider, hvor mine scripts og html filer ligger. Jeg brugte en azure extenstion til vs-code til at uploade min filer.

Kommandoen: Azure app service: deploy to web app

Til sidst fik jeg et gratis domæne fra name.com. I dens DNS settings, satte jeg min azure information, så mit domæne pejede på min server i azure. Jeg fulgte denne tutorial: https://www.youtube.com/watch?v=BrJtpCV_foU
Det vigtige her er at man laver de der dns records med i name.com som pejer på simonweb.azurewebsites.net så azure håndtere hjemmesiden.


I min package.json er der i scripts en der hedder start, som pejer på min index.js, </br>som er den fil som min webserver i azure bliver kørt som det første. </br>Den venter så på at den får en request fra en browser, og baseret på url, </br>som de 3 knapper pejer på, så returnere den en html fil i response. </br>
Hvis der efter simonweb.ninja ikke står noget, så tvinger jeg responsen til at være index.html, så jeg sikre, at der kommer en html fil i responsen.


Læs mappen: miniprojektNodejs for at se filer
