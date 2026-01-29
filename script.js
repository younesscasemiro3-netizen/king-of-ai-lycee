// Sélection des éléments DOM
const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');

// ============================
// FONCTIONS D'AFFICHAGE
// ============================

// Ajouter un message dans le chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<strong>${sender === 'user' ? 'Vous' : 'Assistant'} :</strong> ${text}`;
    chatContainer.appendChild(messageDiv);
    // Défilement automatique vers le bas
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// ============================
// MOTEUR DE RÉPONSE INTELLIGENT
// ============================

// Détecter le sujet de la question
function detectSubject(question) {
    const q = question.toLowerCase();

    if (q.includes('math') || q.includes('calcul') || q.includes('équation') || q.includes('fonction') || q.includes('géométrie') || q.includes('probabilité') || q.includes('algèbre')) {
        return 'maths';
    }
    if (q.includes('physique') || q.includes('chimie') || q.includes('mécanique') || q.includes('électricité') || q.includes('ohm') || q.includes('force') || q.includes('énergie')) {
        return 'physique';
    }
    if (q.includes('français') || q.includes('texte') || q.includes('dissertation') || q.includes('analyse') || q.includes('lecture') || q.includes('orthographe') || q.includes('grammaire')) {
        return 'français';
    }
    if (q.includes('svt') || q.includes('biologie') || q.includes('géologie') || q.includes('photosynthèse') || q.includes('adn') || q.includes('cellule') || q.includes('évolution')) {
        return 'svt';
    }
    if (q.includes('histoire') || q.includes('géographie') || q.includes('carte') || q.includes('date') || q.includes('guerre') || q.includes('révolution')) {
        return 'histoire';
    }
    if (q.includes('philosophie') || q.includes('philo') || q.includes('notion') || q.includes('concept') || q.includes('morale') || q.includes('liberté')) {
        return 'philosophie';
    }
    if (q.includes('réviser') || q.includes('méthode') || q.includes('apprendre') || q.includes('mémoriser') || q.includes('fiche') || q.includes('organiser')) {
        return 'méthode';
    }
    if (q.includes('stress') || q.includes('découragé') || q.includes('motivation') || q.includes('fatigué') || q.includes('bac') || q.includes('examen') || q.includes('angoisse')) {
        return 'motivation';
    }

    return 'général';
}

// Générer une réponse intelligente selon le sujet
function generateAnswer(question) {
    const subject = detectSubject(question);
    const q = question.toLowerCase();

    // ===================== RÉPONSES DÉTAILLÉES PAR SUJET =====================

    // MATHS
    if (subject === 'maths') {
        if (q.includes('équation') && q.includes('second degré')) {
            return `Pour résoudre une équation du second degré de la forme <strong>ax² + bx + c = 0</strong> :<br>
                    1. Calcule le discriminant Δ = b² - 4ac.<br>
                    2. Si Δ > 0 : deux solutions réelles : x₁ = (-b - √Δ) / 2a et x₂ = (-b + √Δ) / 2a.<br>
                    3. Si Δ = 0 : une solution double : x = -b / 2a.<br>
                    4. Si Δ < 0 : pas de solution réelle (solutions complexes).<br><br>
                    <em>Exemple : résoudre x² - 5x + 6 = 0 → Δ = 1, solutions x₁ = 2 et x₂ = 3.</em>`;
        }
        if (q.includes('pourcentage')) {
            return `Pour calculer un pourcentage :<br>
                    • <strong>Calculer p% d'un nombre N</strong> : N × p/100<br>
                    • <strong>Augmenter N de p%</strong> : N × (1 + p/100)<br>
                    • <strong>Diminuer N de p%</strong> : N × (1 - p/100)<br><br>
                    <em>Exemple : 20% de 150 = 150 × 20/100 = 30.</em>`;
        }
        return `En <strong>mathématiques</strong>, l'important est de comprendre la logique avant d'appliquer les formules. Dis-moi exactement quel chapitre ou type d'exercice te pose problème (algèbre, géométrie, probabilités, fonctions, etc.), je te donnerai une explication pas à pas avec des exemples. N'hésite pas à être précis ! 📐`;
    }

    // PHYSIQUE-CHIMIE
    if (subject === 'physique') {
        if (q.includes('ohm')) {
            return `La <strong>loi d'Ohm</strong> relie la tension U (en volts), l'intensité I (en ampères) et la résistance R (en ohms) :<br>
                    <strong>U = R × I</strong><br><br>
                    Cela signifie que la tension aux bornes d'un conducteur est proportionnelle à l'intensité qui le traverse. Plus la résistance est grande, plus il faut de tension pour faire passer le même courant.<br><br>
                    <em>Exemple : si R = 10 Ω et I = 2 A, alors U = 10 × 2 = 20 V.</em>`;
        }
        return `En <strong>physique-chimie</strong, beaucoup de phénomènes s'expliquent par des lois simples. Parles-moi du chapitre qui te trouble (mécanique, électricité, optique, chimie des solutions, etc.), je te l'expliquerai avec des exemples concrets. ⚛️`;
    }

    // FRANÇAIS
    if (subject === 'français') {
        if (q.includes('analyser') || q.includes('texte')) {
            return `Pour <strong>analyser un texte</strong> :<br>
                    1. <strong>Lecture attentive</strong> : repère le genre, le thème, la structure.<br>
                    2. <strong>Contexte</strong> : auteur, époque, mouvement littéraire.<br>
                    3. <strong>Thèmes principaux</strong> : de quoi parle le texte ?<br>
                    4. <strong>Procédés d'écriture</strong> : figures de style, registre, temps verbaux.<br>
                    5. <strong>Interprétation</strong> : quel message l'auteur veut-il faire passer ?<br><br>
                    <em>Conseil : fais toujours référence au texte (citations) pour justifier tes interprétations.</em>`;
        }
        return `En <strong>français</strong>, il s'agit de comprendre et d'interpréter les textes. Dis-moi si tu as besoin d'aide pour :<br>
                • Analyser un texte ou un poème<br>
                • Rédiger une dissertation<br>
                • Comprendre une figure de style<br>
                • Préparer un commentaire ou une explication linéaire<br>
                Je vais te guider pas à pas. 📖`;
    }

    // SVT
    if (subject === 'svt') {
        if (q.includes('photosynthèse')) {
            return `La <strong>photosynthèse</strong> est le processus par lequel les plantes (et certaines bactéries) transforment l'énergie lumineuse en énergie chimique :<br><br>
                    <strong>Équation générale</strong> :<br>
                    6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ (glucose) + 6 O₂<br><br>
                    Cela se passe dans les chloroplastes, grâce à la chlorophylle. La photosynthèse produit du glucose (nourriture pour la plante) et libère de l'oxygène dans l'atmosphère. 🌿`;
        }
        return `En <strong>SVT</strong>, on étudie le vivant et la Terre. Parles-moi de ce que tu veux comprendre : biologie cellulaire, génétique, géologie, écologie, physiologie... Je t'expliquerai avec des schémas simples. 🧪`;
    }

    // MÉTHODE DE TRAVAIL
    if (subject === 'méthode') {
        return `Voici une <strong>méthode de révision efficace</strong> :<br>
                1. <strong>Comprendre</strong> : relis ton cours jusqu'à ce que tu comprennes la logique.<br>
                2. <strong>Ficher</strong> : résume chaque chapitre sur une fiche (mots-clés, schémas).<br>
                3. <strong>S'entraîner</strong> : fais des exercices variés pour appliquer.<br>
                4. <strong>Réviser activement</strong> : récite à voix haute, fais des quiz, explique à quelqu'un d'autre.<br>
                5. <strong>Espacer les révisions</strong> : révise un peu chaque jour plutôt que tout la veille.<br><br>
                <em>Conseil : travaille par sessions de 25 à 30 minutes avec des pauses de 5 minutes (technique Pomodoro).</em> 🧠`;
    }

    // MOTIVATION
    if (subject === 'motivation') {
        return `Je comprends que tu puisses te sentir découragé ou stressé. Sache que c'est normal, surtout avant un examen.<br><br>
                <strong>Quelques conseils</strong> :<br>
                • <strong>Respire</strong> : prends 5 grandes inspirations/expirations.<br>
                • <strong>Découpe</strong> : divise ton travail en petites étapes faisables.<br>
                • <strong>Fais des pauses</strong> : ton cerveau a besoin de se reposer pour mémoriser.<br>
                • <strong>Parle-en</strong> : à un ami, un professeur, ta famille.<br>
                • <strong>Rappelle-toi</strong> : tu as déjà surmonté des difficultés par le passé, tu peux le faire à nouveau.<br><br>
                Tu n'es pas seul. Beaucoup d'élèves traversent ces moments. Continue, même lentement. Chaque petit effort compte. 💙`;
    }

    // RÉPONSE GÉNÉRALE (si aucun sujet détecté)
    return `Je vois que tu demandes : "<em>${question}</em>".<br><br>
            Pour t'aider au mieux, peux-tu préciser ta question ? Par exemple :<br>
            • Est-ce en <strong>maths, physique, français, SVT, histoire, philosophie</strong> ?<br>
            • As-tu besoin d'une <strong>explication de cours, d'une méthode, d'un exemple concret</strong> ?<br><br>
            Je suis là pour t'expliquer clairement, alors n'hésite pas à détailler ta demande ! 😊`;
}

// ============================
// GESTION DES INTERACTIONS
// ============================

// Envoyer un message
function sendMessage() {
    const question = userInput.value.trim();
    if (!question) return;

    // Afficher la question de l'utilisateur
    addMessage(question, 'user');

    // Effacer le champ de saisie
    userInput.value = '';

    // Simuler un délai de "réflexion"
    setTimeout(() => {
        const answer = generateAnswer(question);
        addMessage(answer, 'ai');
    }, 800);
}

// Permettre d'envoyer avec la touche Entrée
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Questions rapides (boutons)
function quickQuestion(text) {
    userInput.value = text;
    sendMessage();
}

// À propos
function showAbout() {
    addMessage(`Ce projet est entièrement <strong>gratuit, sans publicité, sans compte, et sans collecte de données</strong>. Il a été créé pour rendre l'aide scolaire accessible à tous les élèves, surtout ceux qui n'ont pas les moyens de payer des cours particuliers. Le code est hébergé sur GitHub Pages et ne dépend d'aucune API payante. Si tu es développeur et veux contribuer, contacte-moi. ❤️`, 'ai');
}

// Message de bienvenue automatique
window.onload = function() {
    userInput.focus();
};
