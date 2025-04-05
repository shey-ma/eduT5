
// ========== NOTIFICATIONS ==========
fonction showNotification(message) {
const notification = document.createElement('div');
notification.textContent = message ;
notification.style.position = 'fixe';
notification.style.top = '20px';
notification.style.right = '20px';
notification.style.padding = '12px 20px';
notification.style.backgroundColor = '#8dc891'; // Vert pastel
notification.style.color = '#fff';
notification.style.fontWeight = 'gras';
notification.style.borderRadius = '10px';
notification.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.2)';
notification.style.zIndex = 9999;
document.body.appendChild(notification);
setTimeout(() => notification.remove(), 3000);
}

// ========== MISE À JOUR PROFIL ==========
const profileForm = document.getElementById('profile-form');
si (profileForm) {
profileForm.addEventListener('submit', fonction asynchrone (e) {
e.preventDefault();
const name = document.getElementById('nom-du-profil').value;
const email = document.getElementById('profile-email').value;

const { données, erreur } = attendre supabase
.from('profils')
.upsert({ nom, email });

si (erreur) {
showNotification('Erreur de mise à jour : ' + error.message);
} autre {
showNotification(`Profil mis à jour : ${name}`);
}
});
}

// ========== CHAT SUPABASE ==========
const chatForm = document.getElementById('formulaire-de-chat');
si (chatForm) {
chatForm.addEventListener('soumettre', fonction asynchrone (e) {
e.preventDefault();
const message = document.getElementById('chat-message').value;

const { données, erreur } = attendre supabase
.de('messages')
.insert([{ contenu : message }]);

si (erreur) {
showNotification('Erreur d\'envoi : ' + error.message);
} autre {
const chatBox = document.getElementById('boîte de discussion');
const messageElem = document.createElement('div');
messageElem.textContent = message;
messageElem.style.marginBottom = '10px';
chatBox.appendChild(messageElem);
document.getElementById('message-de-chat').value = '';
}
});
}

// ========== PAGINATION DES RESSOURCES ==========
ressources const = [
'Ressources de Mathématiques',
'Ressources de Physique-Chimie',
'Ressources de SVT',
'Ressources d'HGGSP',
'Ressources de SES',
'Ressources d'Anglais AMC',
'Ressources de philosophie',
'Ressources d'Espagnol'
];

const resourcesPerPage = 4;
laissez currentPage = 1;

fonction displayResources(page) {
const resourceList = document.getElementById('liste-de-ressources');
si (!resourceList) retourne ;
resourceList.innerHTML = '';
const start = (page - 1) * resourcesPerPage;
const end = start + resourcesPerPage;
const paginé = ressources.slice(début, fin);

paginé.forEach(ressource => {
const li = document.createElement('li');
li.textContent = ressource;
li.style.padding = '10px';
li.style.borderRadius = '6px';
li.style.backgroundColor = 'var(--resource-bg)';
li.style.margin = '8px 0';
resourceList.appendChild(li);
});
updatePagination();
}

fonction updatePagination() {
const pagination = document.getElementById('pagination');
si (!pagination) retour;
pagination.innerHTML = '';
const totalPages = Math.ceil(resources.length / resourcesPerPage);
pour (soit i = 1; i <= totalPages; i++) {
const btn = document.createElement('bouton');
btn.textContent = i;
btn.className = 'pagination-btn';
btn.onclick = () => {
currentPage = i;
afficherRessources(page actuelle);
};
pagination.appendChild(btn);
}
}
afficherRessources(page actuelle);

// ========== FLÈCHES POUR LES BLOCS ==========
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

// ========== CHANGEMENT DE THÈME (clair / sombre) ==========
const themeToggleBtn = document.getElementById('theme-toggle');
si (themeToggleBtn) {
themeToggleBtn.addEventListener('clic', () => {
const isDark = document.body.classList.toggle('dark-theme');
localStorage.setItem('thème', isDark ? 'dark' : 'light');
});
}

// Appliquer le thème enregistré
window.addEventListener('DOMContentLoaded', () => {
const savedTheme = localStorage.getItem('thème');
si (savedTheme === 'dark') {
document.body.classList.add('thème sombre');
}
});
