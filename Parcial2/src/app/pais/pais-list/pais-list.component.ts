import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {
  paises:Pais[]=[];
  selected:boolean=false;
  selectedPais!:Pais;
  masAntiguo!:string;
  masviejo!:number
  constructor(private paisService:PaisService) { }
  getPaises(){
    this.paisService.getPaises().subscribe(info=>{this.paises=info; this.paisAntiguo();})

  }
  paisAntiguo(){
    let antiguo!:Pais;
    let mayor:number=0;
    for (let i=0;i<this.paises.length;i++){
      let pais:Pais=this.paises[i];
      let comparar:number=2022-pais.formation_year
      if (comparar>mayor){
        mayor=comparar;
        antiguo=pais;
      }
    }
    this.masAntiguo=antiguo.name;
    this.masviejo=antiguo.formation_year;
  }
  ngOnInit() {
    this.getPaises()
  }
  
  onSelected(pais:Pais){
    this.selected=true;
    this.selectedPais=pais;
  }

}
