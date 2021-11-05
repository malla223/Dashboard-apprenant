import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../formateur';
import { FormatteurService } from '../services/formatteur.service';

@Component({
  selector: 'app-inscri-formateur',
  templateUrl: './inscri-formateur.component.html',
  styleUrls: ['./inscri-formateur.component.css']
})
export class InscriFormateurComponent implements OnInit {

  formateur: Formateur = new Formateur();
  
  constructor(private fService: FormatteurService, private router: Router) { }

  ngOnInit(): void {
  }

  saveForamtteur(){
    this.fService.create_F(this.formateur).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  
  save(){
    console.log(this.formateur);
    this.saveForamtteur();
    this.router.navigate(['/dashboard']);
  }

}
