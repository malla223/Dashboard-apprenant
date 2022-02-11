import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../formateur';
import { FormatteurService } from '../services/formatteur.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  id_f: any;
  formateur: Formateur = new Formateur();

  constructor
  (
    private fService: FormatteurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_f = this.route.snapshot.params['id_f'];

    this.fService.get_FById(this.id_f).subscribe(data => {
      this.formateur = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.fService.updateF(this.id_f, this.formateur).subscribe( data =>{
      console.log(data);
      this.router.navigate(['dashboard']);
    }
    , error => console.log(error));
  }

}
