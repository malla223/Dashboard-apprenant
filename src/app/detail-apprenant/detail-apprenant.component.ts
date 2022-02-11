import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apprenant } from '../apprenant';
import { ApprenantService } from '../services/apprenant.service';

@Component({
  selector: 'app-detail-apprenant',
  templateUrl: './detail-apprenant.component.html',
  styleUrls: ['./detail-apprenant.component.css']
})
export class DetailApprenantComponent implements OnInit {

  id: any;
  apprenant: any;

  constructor(private router: ActivatedRoute, private aservice: ApprenantService) { }

  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];

    this.apprenant = new Apprenant();
    this.aservice.getApprenantById(this.id).subscribe( data => {
      this.apprenant = data;
    });
  }

}
