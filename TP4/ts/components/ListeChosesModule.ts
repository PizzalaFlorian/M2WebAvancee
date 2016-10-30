import { NgModule }         from "@angular/core"; //form, input click....
import { FormsModule }      from "@angular/forms"; //ngSubmit ...
import { CommonModule }     from "@angular/common";
import {ListeChosesService} from "@NoyauFonctionnel/service";
import {ItemChose}          from "./Chose";
import {ListeChoses}        from "./ListeChoses";


@NgModule({
    imports     : [ CommonModule, FormsModule ],
    exports     : [ ListeChoses ],
    declarations: [ ListeChoses, ItemChose ],
    providers   : [ ListeChosesService ],

})
export class ListeChosesModule { //def propre a liste e chose.
}
