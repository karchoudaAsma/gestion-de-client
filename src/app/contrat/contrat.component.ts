import { Component } from '@angular/core';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent {
  showAddContractForm = false; // Variable pour gérer la visibilité du formulaire

  // Tableau pour stocker les contrats
  contracts = [
    {
      type: 'Forfait Orange',
      service: 'Mobile',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
      status: 'Actif'
    },
    {
      type: 'Achat Ligne Réseau',
      service: 'Internet',
      startDate: '2023-02-15',
      endDate: '2025-02-15',
      status: 'En attente'
    },
    {
      type: 'Achat Smartphone',
      service: 'Téléphonie',
      startDate: '2023-03-20',
      endDate: '2024-03-20',
      status: 'Actif'
    }
  ];

  // Variables pour stocker les valeurs du formulaire
  newContract = {
    type: '',
    service: '',
    startDate: '',
    endDate: '',
    status: ''
  };

  toggleAddContractForm() {
    this.showAddContractForm = !this.showAddContractForm;
  }

  saveContract() {
    // Ajouter le nouveau contrat au tableau des contrats
    this.contracts.push({ ...this.newContract });

    // Réinitialiser le formulaire
    this.newContract = {
      type: '',
      service: '',
      startDate: '',
      endDate: '',
      status: ''
    };

    // Masquer le formulaire
    this.showAddContractForm = false;
  }

  cancel() {
    this.showAddContractForm = false; // Masquer le formulaire si l'utilisateur annule
  }
}




