import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprenant } from '../apprenant';
import { Formateur } from '../formateur';
import { ApprenantService } from '../services/apprenant.service';
import { FormatteurService } from '../services/formatteur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apprenant: Apprenant[] = [];
  formateur: Formateur[] = [];

  constructor
  (public apprenantService: ApprenantService,
    public router: Router,
    public fService: FormatteurService ) {
  }

  ngOnInit(): void {
    this.getApprenant();
    this.getFormateur();
  }


  public getApprenant(){
    this.apprenantService.getApprenantList().subscribe(data => {
      this.apprenant = data;
      console.log(data);
    });
  }

  public getFormateur(){
    this.fService.get_FList().subscribe(data => {
      this.formateur = data;
      console.log(data);
    });
  }

  //apprenantDetails(id: number){
    //this.router.navigate(['apprenant-details', id]);
  //}

  public updateApprenant(id: any, apprenant: Apprenant){
   
      this.router.navigate(['update-apprenant', id]);

  }

  public deleteApprenant(id: any){
    this.apprenantService.deleteApprenant(id).subscribe( data => {
      console.log(data);
      this.getApprenant();
    })
  }

  public updateForma(id_f: any, f: Formateur){
    this.fService.updateF(id_f, f).subscribe(data=>{
      console.log(data);
      this.router.navigate(['inscription', id_f]);
    })

  }

  public deleteForma(id_f: any){
    this.fService.deleteF(id_f).subscribe( data => {
      console.log(data);
      this.getFormateur();
    })
  }
}

