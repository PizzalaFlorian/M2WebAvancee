System.register(["@angular/core", "@NoyauFonctionnel/service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_1;
    var htmlTemplate, ListeChoses;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            htmlTemplate = `
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
            <button class="clear-completed" (click)="deleteSelect()">Supprimer cochées</button>
        </footer>
	</section>
	<hr/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section>
`;
            ListeChoses = class ListeChoses {
                constructor(serviceListe) {
                    this.serviceListe = serviceListe;
                    this.choses = [];
                    this.filterAll = () => true;
                    this.filterCompleted = (c) => c.fait;
                    this.filterActive = (c) => !c.fait;
                    this.filter = this.filterAll;
                }
                ;
                ngOnInit() {
                    service_1.ListeChosesService.getData().then((nf) => {
                        this.nf = nf;
                        this.choses = nf.choses;
                    });
                }
                getChoses() {
                    return this.choses.filter(this.filter);
                }
                ajouter(input) {
                    this.nf.Ajouter(input.value);
                    input.value = "";
                }
                setFilterAll() {
                    this.filter = this.filterAll;
                }
                setFilterActive() {
                    this.filter = this.filterActive;
                }
                setFilterComplete() {
                    this.filter = this.filterCompleted;
                }
                toogleAllElmt() {
                    let val = !this.toutEstFait(); // on regarde si tout n'est pas fait
                    this.choses.forEach(c => {
                        c.Fait(val);
                    });
                }
                toutEstFait() {
                    return this.choses.filter(this.filterCompleted).length === this.choses.length;
                }
                deleteSelect() {
                    this.choses.filter(this.filterCompleted).forEach(c => {
                        c.dispose();
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], ListeChoses.prototype, "titre", void 0);
            ListeChoses = __decorate([
                core_1.Component({
                    selector: "liste-choses",
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [service_1.ListeChosesService])
            ], ListeChoses);
            exports_1("ListeChoses", ListeChoses);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUlNLFlBQVk7Ozs7Ozs7Ozs7WUFBWixZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQ3BCLENBQUM7WUFPRjtnQkFTQyxZQUFzQixZQUFnQztvQkFBaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO29CQU4zQyxXQUFNLEdBQXNCLEVBQUUsQ0FBQztvQkFDL0IsY0FBUyxHQUF1QixNQUFNLElBQUksQ0FBQztvQkFDM0Msb0JBQWUsR0FBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDOUMsaUJBQVksR0FBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMvQyxXQUFNLEdBQTBCLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBRzFELENBQUM7O2dCQUNFLFFBQVE7b0JBQ0osNEJBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRTt3QkFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBTyxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxTQUFTO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEtBQXVCO29CQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUNELFlBQVk7b0JBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxDQUFDO2dCQUNELGVBQWU7b0JBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNwQyxDQUFDO2dCQUNELGlCQUFpQjtvQkFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQ0QsYUFBYTtvQkFDVCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLG9DQUFvQztvQkFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFDRCxXQUFXO29CQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsRixDQUFDO2dCQUNELFlBQVk7b0JBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDO3dCQUMvQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBOUNHO2dCQUFDLFlBQUssRUFBRTs7c0RBQUE7WUFMWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBSSxjQUFjO29CQUMxQixRQUFRLEVBQUksWUFBWTtpQkFDekIsQ0FBQzs7MkJBQUE7WUFDRixxQ0ErQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RlQ2hvc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9ICAgICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q2hvc2UsIExpc3RlQ2hvc2VzIGFzIExpc3RlQ2hvc2VzTkZ9IFx0ZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XG5pbXBvcnQge0xpc3RlQ2hvc2VzU2VydmljZX0gICAgICAgICAgICAgICAgICAgICBmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvc2VydmljZVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuXHRcdDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cblx0XHRcdDxoMT57e3RpdHJlfX08L2gxPlxuXHRcdFx0PGZvcm0gKG5nU3VibWl0KT1cImFqb3V0ZXIobmV3VG9kbylcIj5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwibmV3LXRvZG9cIiBwbGFjZWhvbGRlcj1cIlF1ZSBmYWlyZT9cIiAjbmV3VG9kbyBhdXRvZm9jdXM+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJtYWluXCI+XG5cdFx0XHQ8aW5wdXQgIGNsYXNzPVwidG9nZ2xlLWFsbFwiXG5cdFx0XHQgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsXSA9IFwidG91dEVzdEZhaXQoKVwiXG4gICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInRvb2dsZUFsbEVsbXQoKVwiXG5cdFx0XHQgICAgICAgIC8+XG5cdFx0XHQ8bGFiZWwgZm9yPVwidG9nZ2xlLWFsbFwiPk1hcmsgYWxsIGFzIGNvbXBsZXRlPC9sYWJlbD5cblx0XHRcdDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYyBvZiBnZXRDaG9zZXMoKVwiIFtjbGFzcy5jb21wbGV0ZWRdPVwiYy5mYWl0XCIgW2NsYXNzLmVkaXRpbmddPVwiaXRlbS5lZGl0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWNob3NlIFtuZl09XCJjXCIgI2l0ZW0gPjwvaXRlbS1jaG9zZT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblx0XHQ8L3NlY3Rpb24+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPjxzdHJvbmc+PC9zdHJvbmc+IHJlc3RhbnRlczwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJzZXRGaWx0ZXJBbGwoKVwiIFtjbGFzcy5zZWxlY3RlZF09XCJ0aGlzLmZpbHRlciA9PT0gdGhpcy5maWx0ZXJBbGxcIj5Ub3VzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwic2V0RmlsdGVyQWN0aXZlKClcIiBbY2xhc3Muc2VsZWN0ZWRdPVwidGhpcy5maWx0ZXIgPT09IHRoaXMuZmlsdGVyQWN0aXZlXCI+QWN0aWZzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwic2V0RmlsdGVyQ29tcGxldGUoKVwiIFtjbGFzcy5zZWxlY3RlZF09XCJ0aGlzLmZpbHRlciA9PT0gdGhpcy5maWx0ZXJDb21wbGV0ZWRcIj5Db21wbMOpdMOpczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGVhci1jb21wbGV0ZWRcIiAoY2xpY2spPVwiZGVsZXRlU2VsZWN0KClcIj5TdXBwcmltZXIgY29jaMOpZXM8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG5cdDwvc2VjdGlvbj5cblx0PGhyLz5cblx0PHNlY3Rpb24+XG5cdCAgICA8c2VjdGlvbiAqbmdGb3I9XCJsZXQgY2hvc2Ugb2YgZ2V0Q2hvc2VzKClcIj5cblx0ICAgICAgICB7e2Nob3NlLmZhaXR9fSA6IHt7Y2hvc2UudGV4dGV9fVxuICAgICAgICA8L3NlY3Rpb24+XG5cdDwvc2VjdGlvbj5cbmA7XG5cbnR5cGUgZmlsdGVyQ2hvc2UgPSAoYyA6IENob3NlKSA9PiBib29sZWFuO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yXHRcdDogXCJsaXN0ZS1jaG9zZXNcIixcbiAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcbn0pLy91dGlsaXNlIGxlIHRlbXBsYXRlIGRlZiBjaS1kZXNzdXMuXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXMgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRpdHJlXHQ6IHN0cmluZztcbiAgICBwdWJsaWMgIG5mICAgICAgIDogTGlzdGVDaG9zZXNORjtcbiAgICBwcml2YXRlIGNob3NlcyAgICAgICAgICA6IENob3NlW10gPSBbXTtcbiAgICBwdWJsaWMgIGZpbHRlckFsbCAgICAgICA6IGZpbHRlckNob3NlID0gKCkgPT4gdHJ1ZTtcbiAgICBwdWJsaWMgIGZpbHRlckNvbXBsZXRlZCA6IGZpbHRlckNob3NlID0gKGMpID0+IGMuZmFpdDtcbiAgICBwdWJsaWMgIGZpbHRlckFjdGl2ZSAgICA6IGZpbHRlckNob3NlID0gKGMpID0+ICFjLmZhaXQ7XG4gICAgICAgICAgICBmaWx0ZXIgICAgICAgICAgOiBmaWx0ZXJDaG9zZSA9IHRoaXMuZmlsdGVyQWxsO1xuXG5cdGNvbnN0cnVjdG9yXHRcdChwcml2YXRlIHNlcnZpY2VMaXN0ZTogTGlzdGVDaG9zZXNTZXJ2aWNlKSB7XG5cdH07XG4gICAgbmdPbkluaXQoKTogdm9pZCB7IC8vaW5pdGlhbGlzYXRpb25cbiAgICAgICAgTGlzdGVDaG9zZXNTZXJ2aWNlLmdldERhdGEoKS50aGVuKCAobmYpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmYgICAgID0gbmY7XG4gICAgICAgICAgICB0aGlzLmNob3NlcyA9IG5mLmNob3NlcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENob3NlcygpIDogQ2hvc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNob3Nlcy5maWx0ZXIodGhpcy5maWx0ZXIpO1xuICAgIH1cbiAgICBham91dGVyKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KTp2b2lkIHtcbiAgICAgICAgdGhpcy5uZi5Bam91dGVyKGlucHV0LnZhbHVlKTtcbiAgICAgICAgaW5wdXQudmFsdWU9XCJcIjtcbiAgICB9XG4gICAgc2V0RmlsdGVyQWxsKCk6dm9pZHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlckFsbDtcbiAgICB9XG4gICAgc2V0RmlsdGVyQWN0aXZlKCk6dm9pZHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlckFjdGl2ZTtcbiAgICB9XG4gICAgc2V0RmlsdGVyQ29tcGxldGUoKTp2b2lke1xuICAgICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29tcGxldGVkO1xuICAgIH1cbiAgICB0b29nbGVBbGxFbG10KCk6dm9pZHtcbiAgICAgICAgbGV0IHZhbCA9ICF0aGlzLnRvdXRFc3RGYWl0KCk7IC8vIG9uIHJlZ2FyZGUgc2kgdG91dCBuJ2VzdCBwYXMgZmFpdFxuICAgICAgICB0aGlzLmNob3Nlcy5mb3JFYWNoKCBjID0+IHtcbiAgICAgICAgICAgIGMuRmFpdCh2YWwpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICB0b3V0RXN0RmFpdCgpOmJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLmNob3Nlcy5maWx0ZXIodGhpcy5maWx0ZXJDb21wbGV0ZWQpLmxlbmd0aCA9PT0gdGhpcy5jaG9zZXMubGVuZ3RoO1xuICAgIH1cbiAgICBkZWxldGVTZWxlY3QoKTp2b2lke1xuICAgICAgICB0aGlzLmNob3Nlcy5maWx0ZXIodGhpcy5maWx0ZXJDb21wbGV0ZWQpLmZvckVhY2goIGMgPT57XG4gICAgICAgICAgICBjLmRpc3Bvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9
