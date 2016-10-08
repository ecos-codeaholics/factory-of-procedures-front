import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedureService } from './procedure.service';

import { Procedure } from "./procedure";

@Component({
  selector: 'procedure-info1',
  templateUrl:'src/procedure/templates/procedure-info.component.html',

})

export class ProcedureInfoComponent implements OnInit {
  title: string = "Informacion del Tramites";

  procedure: Procedure;
  @Input('master') masterName: string;


  constructor(){

  }

  ngOnInit (){

  }

}




