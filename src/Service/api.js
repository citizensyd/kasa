// Définit une fonction asynchrone locationsFetcher pour récupérer les données du serveur
export const locationsFetcher = async () => {
  // Envoie une requête HTTP GET au serveur pour récupérer les données du fichier "logements.json"
  const res = await fetch(`/logements.json`);
  // Transforme les données de la réponse HTTP en objet JavaScript
  const data = await res.json();
  // Met à jour la variable d'état "data" avec les données récupérées depuis le serveur
  return data;
};
