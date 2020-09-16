# web_vscode_azure_nodejs

Min hjemmeside findes her: [simonweb.ninja](http://simonweb.ninja)


I min package.json er der i scripts en der hedder start, som pejer på min index.js, </br>som er den fil som min webserver i azure bliver kørt som det første. </br>Den venter så på at den får en request fra en browser, og baseret på url, </br>som de 3 knapper pejer på, så returnere den en html fil i response. </br>
Hvis der efter simonweb.ninja ikke står noget, så tvinger jeg responsen til at være index.html, så jeg sikre, at der kommer en html fil i responsen.
