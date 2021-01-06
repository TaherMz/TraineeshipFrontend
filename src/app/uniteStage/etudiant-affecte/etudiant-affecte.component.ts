import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Inject} from '@angular/core';
import { DataService } from '../data.service';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';

export interface Poster{
nom:String,
prenom:String,
email:String,
telephone:String,
specialite:String,
cv:String,
lettre_motivation:String,
id_offer:String,
nomsociete:String,
mission:String,
etat:String,
enabled:boolean
}

@Component({
  selector: 'app-etudiant-affecte',
  templateUrl: './etudiant-affecte.component.html',
  styleUrls: ['./etudiant-affecte.component.css']
})
export class EtudiantAffecteComponent implements OnInit {
  user:any;
  etudiants:any[]=[];
  etds:any[]=[];
  offers:any[]=[];
  cols: any[];

  exportColumns: any[];
  constructor(private dataService: DataService,private http:HttpClient) { }

  ngOnInit() {
    this.user=this.dataService.user;
   this.dataService.getAllEtudiant().subscribe(data=>{
    console.log(data['data']);
     for(let i=0;i<data['data'].length;i++)
     {
       if( data['data'][i].etat=="Affecté")
       this.etudiants.push(data['data'][i]);
       console.log(this.etudiants);
     }
console.log(this.etudiants);
   });

   
   this.dataService.getAllEtudiants().subscribe(data=>{
    console.log(data['data']);
     for(let i=0;i<data['data'].length;i++)
     {
       if( data['data'][i].etat=="Affecté" )
      for(let j=0; j<this.etudiants.length;j++){
        if(data['data'][i].email==this.etudiants[j].email){
          this.etds.push(this.etudiants[j]);
        }
      }
     }
console.log(this.etds);
   });
   this.cols = [
    { field: 'nomsociete', header: 'nomsociete' },
    { field: 'mission', header: 'mission' },
    { field: 'nom', header: 'name' },
    { field: 'prenom', header: 'prenom' },
    { field: 'email', header: 'email' },
    { field: 'etat', header: 'etat' },

];

this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));

  }
 /* exportPdf() {
          const doc = new jsPDF()
          autoTable(this.exportColumns,this.etudiants);
          doc.save('products.pdf');
}*/

getoffers(etudiant:any){
  console.log(etudiant.name);
  this.dataService.getMyOffers(etudiant.name).subscribe(data=>{
    console.log(data['data']);
    this.offers=data['data'];
console.log(this.offers);
})
}
exportExcel() {
  let etud:any[]=[this.etudiants];
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.etudiants[0].nom,this.etudiants[0].prenom);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "products");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}
}
