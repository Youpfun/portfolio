# Configuration EmailJS pour le Formulaire de Contact

## 📧 Actuellement

Le formulaire de contact est **configuré mais pas encore connecté** à un service d'envoi d'emails. Les données du formulaire sont actuellement affichées dans la console du navigateur pour les tests.

## 🔧 Pour activer l'envoi d'emails

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (100 emails/mois)
3. Vérifiez votre email

### 2. Configurer le service

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Notez votre **Service ID**

### 3. Créer un template

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template de base :

```
Nouveau message de {{from_name}}

Email: {{from_email}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. Notez votre **Template ID**

### 4. Obtenir votre clé publique

1. Allez dans **"Account"** > **"General"**
2. Copiez votre **Public Key**

### 5. Configurer le code

Dans `src/App.jsx`, remplacez ces valeurs (lignes ~45-47) :

```javascript
const serviceId = 'YOUR_SERVICE_ID' // Remplacez par votre Service ID
const templateId = 'YOUR_TEMPLATE_ID' // Remplacez par votre Template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Remplacez par votre Public Key
```

### 6. Activer l'envoi

Décommentez les lignes 54-59 dans `src/App.jsx` :

```javascript
await emailjs.send(serviceId, templateId, {
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
  to_email: 'votre-email@example.com' // Votre email
}, publicKey)
```

## 🧪 Test actuel

Pour l'instant, quand vous soumettez le formulaire :
- Les données sont affichées dans la console du navigateur (F12 > Console)
- Un message de succès s'affiche
- Le formulaire se vide

## 🚀 Alternatives à EmailJS

- **Formspree** : [https://formspree.io/](https://formspree.io/)
- **Netlify Forms** : Si vous déployez sur Netlify
- **Vercel Contact Forms** : Si vous déployez sur Vercel
- **API personnalisée** : Avec votre propre backend

## 📱 Test du formulaire

1. Ouvrez votre portfolio sur [http://localhost:5173](http://localhost:5173)
2. Allez dans la section Contact
3. Remplissez le formulaire
4. Cliquez sur "Envoyer le message"
5. Ouvrez la console du navigateur (F12) pour voir les données
