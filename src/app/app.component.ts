import { Component } from '@angular/core';

//import modul dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import halaman dialog yang sudah dibuat pada tahap sebelumnya
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  conscructor(
  public dialog:MatDialog,
  public api:ApiService, //menambahkan variabel dialog
  ){
  	this.getData();
  }
  //fungsi untuk menampilkan dialog penambahan alamat baru

  dataAlamat:any=[];
  getData()
  {
  	this.api.baca().subscribe(res => {
  		this.dataAlamat=res;
  	});
  }

  buatAlamat()
  {
  	const dialogRef = this.dialog.open(TambahAlamatComponent, {
			width: '450px',  
			data:null    
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('Dialog ditutup');     
		});
 
  }

  //membuka dialog detail alamat
  detailAlamat()
	  {
	    const dialogRef = this.dialog.open(DetailAlamatComponent, {
	      width: '450px',      
	    });	
	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');     
	    });
	  }

konfirmasiHapus()
{
	const dialogRef = this.dialog.open(DialogKonfirmasiComopnent, {
		width: '450px',
	});
	dialogRef.afterClosed().subscribe(result => {
		if(result == true)
		{
			console.log('Menghapus data');
		}
	});
}

}
