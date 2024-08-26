import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  showAddClientForm = false; // Variable pour gérer la visibilité du formulaire

  // Tableau pour stocker les clients
  clients = [
    {
      nom: 'Dupont',
      prenom: 'Jean',
      telephone: '0600000000',
      adresse: '123 Rue A',
      email: 'jean.dupont@example.com',
      dateNaissance: '1980-01-01',
      numCIN: 'AB123456',
      codePostal: '75001'
    },
    // Ajoutez d'autres clients ici si nécessaire
  ];

  // Variables pour stocker les valeurs du formulaire
  newClient = {
    nom: '',
    prenom: '',
    telephone: '',
    adresse: '',
    email: '',
    dateNaissance: '',
    numCIN: '',
    codePostal: ''
  };

  toggleAddClientForm() {
    this.showAddClientForm = !this.showAddClientForm;
  }

  saveClient() {
    // Ajouter le nouveau client au tableau des clients
    this.clients.push({ ...this.newClient });

    // Réinitialiser le formulaire
    this.newClient = {
      nom: '',
      prenom: '',
      telephone: '',
      adresse: '',
      email: '',
      dateNaissance: '',
      numCIN: '',
      codePostal: ''
    };

    // Masquer le formulaire
    this.showAddClientForm = false;
  }

  cancel() {
    this.showAddClientForm = false; // Masquer le formulaire si l'utilisateur annule
  }
}
