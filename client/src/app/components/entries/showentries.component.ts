import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {GridOptions} from "ag-grid-community";
import { EntriesService } from '../../services/entries.service';
interface MyData{
    obj:Object
}
@Component({
  selector: 'app-showentries',
  templateUrl: './showentries.component.html',
})
export class ShowEntriesComponent implements OnInit {
    public  entriesList = [];
    public  columns = [];
    private gridOptions: GridOptions;

    constructor(private entry: EntriesService) {
        this.gridOptions = <GridOptions>{};
        this.getEntries();

    }
    ngOnInit() {

    }
    getEntries(){
        this.columns = [
            {
                headerName: "ID",
                field: "user_id",
                width: 100
            },
            {
                headerName: "Name",
                field: "name",
                //  cellRendererFramework: RedComponentComponent,
                width: 150
            },
            {
                headerName: "Comment",
                field: "comment",
                //  cellRendererFramework: RedComponentComponent,
                width: 305
            }

        ];
        this.entry.getEntries().subscribe(data => this.entriesList = data);
    }
}
