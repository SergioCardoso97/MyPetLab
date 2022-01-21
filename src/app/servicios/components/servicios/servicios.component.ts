import { Component, Input, OnInit } from '@angular/core';
import { Servicio } from 'src/app/servicio.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios: Servicio[] = [
    {
      id: '1',
      image: '/assets/images/Blood Cells.I16.2k.png',
      estudio: 'Quimica Sanguinea'
    },
    {
      id: '2',
      image: '/assets/images/routine-test-urine-rapid-test-urine-test-strip-2022-01-06-19-16-19-utc.jpg',
      estudio: 'Urianálisis'
    },
    // {
    //   id: '3',
    //   image: '/assets/images/vacutainer-tubes-for-collecting-blood-samples-duri-2021-09-03-19-47-49-utc.JPG',
    //   estudio: 'Bioquímica  '
    // },
    {
      id: '4',
      image: '/assets/images/blood-test-sample-tubes-in-a-rack-for-laboratory-b-2021-09-04-09-30-36-utc.jpg',
      estudio: 'Hematología    '
    },
    {
      id: '5',
      image: '/assets/images/3d-illustration-model-of-serotonin-molecule-horm-2021-08-31-13-46-21-utc.jpg',
      estudio: 'Endocrinología  '
    },
    {
      id: '6',
      image: '/assets/images/scientist-analyzing-microscope-slide-at-laboratory-2021-09-03-12-22-49-utc.jpg',
      estudio: 'Hemostasia'
    },
    {
      id: '7',
      image: '/assets/images/medical-research-2021-08-29-01-06-41-utc.jpg',
      estudio: 'Serología'
    },
    {
      id: '8',
      image: '/assets/images/clinical-laboratory-in-process-of-chemical-analysi-2021-10-12-22-49-42-utc.jpg',
      estudio: 'Citología clínica'
    },
    {
      id: '9',
      image: '/assets/images/microbiology-laboratory-work-comparing-results-2021-08-26-16-53-24-utc.jpg',
      estudio: 'Histopatología'
    },
    {
      id: '10',
      image: '/assets/images/white-blood-cells-in-blood-stream-3d-illustration-2021-08-26-22-28-54-utc.jpg',
      estudio: 'Inmunohematología'
    },
    {
      id: '11',
      image: '/assets/images/scientist-examines-malaria-virus-on-petri-dish-in-2021-09-01-22-06-28-utc.jpg',
      estudio: 'Micología'
    },
    {
      id: '12',
      image: '/assets/images/parasitologia.jpeg',
      estudio: 'Parasitología'
    },
    {
      id: '13',
      image: '/assets/images/colourful-bacterial-culture-plate-2021-08-29-01-02-46-utc.jpg',
      estudio: 'Bacteriología'
    },



  ]
   

  constructor() { }

  ngOnInit(): void {
  }

}
