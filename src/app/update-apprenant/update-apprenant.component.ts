import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apprenant } from '../apprenant';
import { ApprenantService } from '../services/apprenant.service';

@Component({
  selector: 'app-update-apprenant',
  templateUrl: './update-apprenant.component.html',
  styleUrls: ['./update-apprenant.component.css']
})
export class UpdateApprenantComponent implements OnInit {

  id: any;
  apprenant: Apprenant = new Apprenant();

  constructor
  (
    private aService: ApprenantService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.aService.getApprenantById(this.id).subscribe(data => {
      this.apprenant = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.aService.updateApprenant(this.id, this.apprenant).subscribe( data =>{
      console.log(data);
      this.router.navigate(['dashboard']);
    }
    , error => console.log(error));
  }

}
