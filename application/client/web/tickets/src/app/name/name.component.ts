import { Component, OnInit } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})

export class NameComponent implements OnInit {
    public name:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private nameService: NameService,
    ) { }

    ngOnInit() {
        this.name.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpSearch() {
        this.nameService.GpSearch(this.name).subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}