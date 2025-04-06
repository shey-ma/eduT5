
// Suppression de l'effet de transition lors du clic sur un lien
document.querySelectorAll("a").forEach(lien => {
link.addEventListener("clic", (événement) => {
si (link.href.includes(window.location.origin)) {
événement.preventDefault();
fenêtre.emplacement.href = lien.href; // Pas d'effet de transition
}
});
});

// Fonctionnalité 1 : Affichage des notifications
fonction showNotification(message) {
const notification = document.createElement('div');
notification.textContent = message ;
notification.style.position = 'fixe';
notification.style.top = '10px';
notification.style.right = '10px';
notification.style.padding = '10px';
notification.style.backgroundColor = '#2ecc71';
notification.style.color = 'blanc';
notification.style.borderRadius = '5px';
document.body.appendChild(notification);
setTimeout(() => {
notification.supprimer();
}, 3000);
}

// Fonctionnalité 4 : Gestion de profil avec Supabase
document.getElementById('profile-form').addEventListener('submit', fonction asynchrone (e) {
e.preventDefault();
const name = document.getElementById('nom-du-profil').value;
const email = document.getElementById('profile-email').value;

const { données, erreur } = attendre supabase
.from('profiles') // Remplacez 'profiles' par le nom de votre table
.upsert({ nom, email }); // Utilisez upsert pour insérer ou mettre à jour

si (erreur) {
showNotification('Erreur de mise à jour du profil : ' + error.message);
} autre {
showNotification(`Profil mis à jour : ${name}, ${email}`);
}
});

// Fonctionnalité 5 : Chat en direct avec Supabase
const chatForm = document.getElementById('formulaire-de-chat');
chatForm.addEventListener('soumettre', fonction asynchrone (e) {
e.preventDefault();
const message = document.getElementById('chat-message').value;

const { données, erreur } = attendre supabase
.from('messages') // Remplacez 'messages' par le nom de votre table
.insert([{ contenu : message }]); // Ajustez selon la structure de votre table

si (erreur) {
showNotification('Erreur lors de l\'envoi du message : ' + error.message);
} autre {
const chatBox = document.getElementById('boîte de discussion');
const messageElem = document.createElement('div');
messageElem.textContent = message;
chatBox.appendChild(messageElem);
document.getElementById('message-de-chat').value = '';
}
});

// Les autres fonctionnalités restent inchangées...

// Fonctionnalité 3 : Pagination des ressources
ressources const = [
'Livre de mathématiques',
'Article sur la biotechnologie',
'Guide de philosophie',
'Manuel d'anglais',
'Cours de chimie',
'Article sur l'écologie',
'Rapport scientifique',
'Thèse sur l'éducation',
];

const resourcesPerPage = 4;
laissez currentPage = 1;

fonction displayResources(page) {
const resourceList = document.getElementById('liste-de-ressources');
resourceList.innerHTML = '';
const start = (page - 1) * resourcesPerPage;
const end = start + resourcesPerPage;
const paginatedResources = resources.slice(début, fin);
paginéResources.forEach(ressource => {
const li = document.createElement('li');
li.textContent = ressource;
resourceList.appendChild(li);
});
updatePagination();
}

fonction updatePagination() {
const pagination = document.getElementById('pagination');
pagination.innerHTML = '';
const totalPages = Math.ceil(resources.length / resourcesPerPage);
pour (soit i = 1; i <= totalPages; i++) {
const btn = document.createElement('bouton');
btn.textContent = i;
btn.onclick = () => {
currentPage = i;
afficherRessources(page actuelle);
};
pagination.appendChild(btn);
}
}

afficherRessources(page actuelle);

// Fonctionnalité ajoutée : Affichage des flèches et navigation vers chaque bloc de cours
document.querySelectorAll(".card").forEach(card => {
const arrowUp = document.createElement("div");
arrowUp.innerHTML = "⬆️";
arrowUp.style.cursor = "pointeur";
arrowUp.style.fontSize = "1,5 em";
arrowUp.style.marginBottom = "10px";
arrowUp.addEventListener("clic", () => {
card.scrollIntoView({ comportement : "lisse" });
});
card.insertBefore(flèche vers le haut, card.firstChild);
});
