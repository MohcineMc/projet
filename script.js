function downloadCV() {
  // Crée un lien <a> temporaire pour télécharger le fichier
  var link = document.createElement('a');
  link.href = 'mon__cv__devops.pdf'; // Spécifie le chemin vers ton fichier PDF
  link.download = 'mon__cv__devops.pdf'; // Le nom du fichier qui sera téléchargé
  link.click(); // Clique sur le lien pour initier le téléchargement
  
}
