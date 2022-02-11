import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from '../formateur';
import { FormatteurService } from '../services/formatteur.service';

@Component({
  selector: 'app-detail-formateur',
  templateUrl: './detail-formateur.component.html',
  styleUrls: ['./detail-formateur.component.css']
})
export class DetailFormateurComponent implements OnInit {

  id_f: any;
  formateur: any;

  constructor(private router: ActivatedRoute, private fservice: FormatteurService) { }

  ngOnInit(): void {

    this.id_f = this.router.snapshot.params['id_f'];

    this.formateur = new Formateur();
    this.fservice.get_FById(this.id_f).subscribe( data => {
      this.formateur = data;
    });
  }

}
