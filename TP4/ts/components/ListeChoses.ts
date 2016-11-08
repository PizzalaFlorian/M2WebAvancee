import {Component, Input, OnInit}               from "@angular/core";
import {Chose, ListeChoses as ListeChosesNF} 	from "@NoyauFonctionnel/nf";
import {ListeChosesService}                     from "@NoyauFonctionnel/service";

const htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>{{titre}}</h1>
			<form (ngSubmit)="ajouter(newTodo)">
				<input class="new-todo" placeholder="Que faire?" #newTodo autofocus>
			</form>
		</header>
		<section class="main">
			<input  class="toggle-all"
			        type="checkbox"
                    [ngModel] = "toutEstFait()"
                    (ngModelChange)="toogleAllElmt()"
			        />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
                <li *ngFor="let c of getChoses()" [class.completed]="c.fait" [class.editing]="item.editing">
                    <item-chose [nf]="c" #item ></item-chose>
                </li>
            </ul>
		</section>
        <footer class="footer">
            <span class="todo-count"><strong></strong> restantes</span>
            <ul class="filters">
                <li>
                    <a (click)="setFilterAll()" [class.selected]="this.filter === this.filterAll">Tous</a>
                </li>
                <li>
                    <a (click)="setFilterActive()" [class.selected]="this.filter === this.filterActive">Actifs</a>
                </li>
                <li>
                    <a (click)="setFilterComplete()" [class.selected]="this.filter === this.filterCompleted">Complétés</a>
                </li>
            </ul>
            <button class="clear-completed">Supprimer cochées</button>
        </footer>
	</section>
	<hr/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section>
`;

type filterChose = (c : Chose) => boolean;
@Component({
  selector		: "liste-choses",
  template		: htmlTemplate
})//utilise le template def ci-dessus.
export class ListeChoses implements OnInit {
    @Input() titre	: string;
    public  nf       : ListeChosesNF;
    private choses          : Chose[] = [];
    public  filterAll       : filterChose = () => true;
    public  filterCompleted : filterChose = (c) => c.fait;
    public  filterActive    : filterChose = (c) => !c.fait;
            filter          : filterChose = this.filterAll;

	constructor		(private serviceListe: ListeChosesService) {
	};
    ngOnInit(): void { //initialisation
        ListeChosesService.getData().then( (nf) => {
            this.nf     = nf;
            this.choses = nf.choses;
        });
    }
    getChoses() : Chose[] {
        return this.choses.filter(this.filter);
    }
    ajouter(input: HTMLInputElement):void {
        this.nf.Ajouter(input.value);
        input.value="";
    }
    setFilterAll():void{
        this.filter = this.filterAll;
    }
    setFilterActive():void{
        this.filter = this.filterActive;
    }
    setFilterComplete():void{
        this.filter = this.filterCompleted;
    }
    toogleAllElmt():void{
        let val = !this.toutEstFait(); // on regarde si tout n'est pas fait
        this.choses.forEach( c => {
            c.Fait(val);
        })
    }
    toutEstFait():boolean{
        return this.choses.filter(this.filterCompleted).length === this.choses.length;
    }
}

