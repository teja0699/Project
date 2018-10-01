import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {GridOptions} from "ag-grid-community";
@Component({
  selector: 'app-signup',
  templateUrl: './showentries.component.html',
})
export class ShowEntriesComponent implements OnInit {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "First Name",
                field: "firstname",
              //  cellRendererFramework: RedComponentComponent,
                width: 150
            },
            {
                headerName: "Last Name",
                field: "lasttname",
                //  cellRendererFramework: RedComponentComponent,
                width: 150
            }
            ,
            {
                headerName: "Entry",
                field: "comment",
                //  cellRendererFramework: RedComponentComponent,
                width: 305
            }

        ];
        this.gridOptions.rowData = [
            {id: 5, firstname: 'XYA',lasttname: 'John',comment: 'TEXT comments here'},
            {id: 10, firstname: 'Teja',lasttname: 'D',comment: 'TEXT comments 2 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
            {id: 15, firstname: 'Hello',lasttname: 'Next Name',comment: 'TEXT comments 3 here'},
        ]
    }
    ngOnInit() {
    }

}
