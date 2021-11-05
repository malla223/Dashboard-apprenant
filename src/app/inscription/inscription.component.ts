import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprenant } from '../apprenant';
import { ApprenantService } from '../services/apprenant.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  apprenant: Apprenant = new Apprenant();
  constructor(private aService: ApprenantService, private router: Router) { }

  ngOnInit(): void {
  }

  saveApprenant(){
    this.aService.createApprenant(this.apprenant).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  
  onSubmit(){
    console.log(this.apprenant);
    this.saveApprenant();
    this.router.navigate(['/dashboard']);
  }

}
