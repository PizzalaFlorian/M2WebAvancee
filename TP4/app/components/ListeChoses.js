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
                    (ngModelChange)="toogleAll()"
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUlNLFlBQVk7Ozs7Ozs7Ozs7WUFBWixZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTBDcEIsQ0FBQztZQU9GO2dCQVNDLFlBQXNCLFlBQWdDO29CQUFoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7b0JBTjNDLFdBQU0sR0FBc0IsRUFBRSxDQUFDO29CQUMvQixjQUFTLEdBQXVCLE1BQU0sSUFBSSxDQUFDO29CQUMzQyxvQkFBZSxHQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM5QyxpQkFBWSxHQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQy9DLFdBQU0sR0FBMEIsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFHMUQsQ0FBQzs7Z0JBQ0UsUUFBUTtvQkFDSiw0QkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFO3dCQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFPLEVBQUUsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELFNBQVM7b0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFDRCxPQUFPLENBQUMsS0FBdUI7b0JBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0IsS0FBSyxDQUFDLEtBQUssR0FBQyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsWUFBWTtvQkFDUixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsZUFBZTtvQkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0QsaUJBQWlCO29CQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFFdkMsQ0FBQztZQUNMLENBQUM7WUFqQ0c7Z0JBQUMsWUFBSyxFQUFFOztzREFBQTtZQUxaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFJLGNBQWM7b0JBQzFCLFFBQVEsRUFBSSxZQUFZO2lCQUN6QixDQUFDOzsyQkFBQTtZQUNGLHFDQWtDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvTGlzdGVDaG9zZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gICAgICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDaG9zZSwgTGlzdGVDaG9zZXMgYXMgTGlzdGVDaG9zZXNORn0gXHRmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvbmZcIjtcbmltcG9ydCB7TGlzdGVDaG9zZXNTZXJ2aWNlfSAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9zZXJ2aWNlXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PHNlY3Rpb24gY2xhc3M9XCJ0b2RvYXBwXCI+XG5cdFx0PGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuXHRcdFx0PGgxPnt7dGl0cmV9fTwvaDE+XG5cdFx0XHQ8Zm9ybSAobmdTdWJtaXQpPVwiYWpvdXRlcihuZXdUb2RvKVwiPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiIHBsYWNlaG9sZGVyPVwiUXVlIGZhaXJlP1wiICNuZXdUb2RvIGF1dG9mb2N1cz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cblx0XHRcdDxpbnB1dCAgY2xhc3M9XCJ0b2dnbGUtYWxsXCJcblx0XHRcdCAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidG9vZ2xlQWxsKClcIlxuXHRcdFx0ICAgICAgICAvPlxuXHRcdFx0PGxhYmVsIGZvcj1cInRvZ2dsZS1hbGxcIj5NYXJrIGFsbCBhcyBjb21wbGV0ZTwvbGFiZWw+XG5cdFx0XHQ8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGMgb2YgZ2V0Q2hvc2VzKClcIiBbY2xhc3MuY29tcGxldGVkXT1cImMuZmFpdFwiIFtjbGFzcy5lZGl0aW5nXT1cIml0ZW0uZWRpdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1jaG9zZSBbbmZdPVwiY1wiICNpdGVtID48L2l0ZW0tY2hvc2U+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cdFx0PC9zZWN0aW9uPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj48c3Ryb25nPjwvc3Ryb25nPiByZXN0YW50ZXM8L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwic2V0RmlsdGVyQWxsKClcIiBbY2xhc3Muc2VsZWN0ZWRdPVwidGhpcy5maWx0ZXIgPT09IHRoaXMuZmlsdGVyQWxsXCI+VG91czwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNldEZpbHRlckFjdGl2ZSgpXCIgW2NsYXNzLnNlbGVjdGVkXT1cInRoaXMuZmlsdGVyID09PSB0aGlzLmZpbHRlckFjdGl2ZVwiPkFjdGlmczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNldEZpbHRlckNvbXBsZXRlKClcIiBbY2xhc3Muc2VsZWN0ZWRdPVwidGhpcy5maWx0ZXIgPT09IHRoaXMuZmlsdGVyQ29tcGxldGVkXCI+Q29tcGzDqXTDqXM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xlYXItY29tcGxldGVkXCI+U3VwcHJpbWVyIGNvY2jDqWVzPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuXHQ8L3NlY3Rpb24+XG5cdDxoci8+XG5cdDxzZWN0aW9uPlxuXHQgICAgPHNlY3Rpb24gKm5nRm9yPVwibGV0IGNob3NlIG9mIGdldENob3NlcygpXCI+XG5cdCAgICAgICAge3tjaG9zZS5mYWl0fX0gOiB7e2Nob3NlLnRleHRlfX1cbiAgICAgICAgPC9zZWN0aW9uPlxuXHQ8L3NlY3Rpb24+XG5gO1xuXG50eXBlIGZpbHRlckNob3NlID0gKGMgOiBDaG9zZSkgPT4gYm9vbGVhbjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3Rvclx0XHQ6IFwibGlzdGUtY2hvc2VzXCIsXG4gIHRlbXBsYXRlXHRcdDogaHRtbFRlbXBsYXRlXG59KS8vdXRpbGlzZSBsZSB0ZW1wbGF0ZSBkZWYgY2ktZGVzc3VzLlxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB0aXRyZVx0OiBzdHJpbmc7XG4gICAgcHVibGljICBuZiAgICAgICA6IExpc3RlQ2hvc2VzTkY7XG4gICAgcHJpdmF0ZSBjaG9zZXMgICAgICAgICAgOiBDaG9zZVtdID0gW107XG4gICAgcHVibGljICBmaWx0ZXJBbGwgICAgICAgOiBmaWx0ZXJDaG9zZSA9ICgpID0+IHRydWU7XG4gICAgcHVibGljICBmaWx0ZXJDb21wbGV0ZWQgOiBmaWx0ZXJDaG9zZSA9IChjKSA9PiBjLmZhaXQ7XG4gICAgcHVibGljICBmaWx0ZXJBY3RpdmUgICAgOiBmaWx0ZXJDaG9zZSA9IChjKSA9PiAhYy5mYWl0O1xuICAgICAgICAgICAgZmlsdGVyICAgICAgICAgIDogZmlsdGVyQ2hvc2UgPSB0aGlzLmZpbHRlckFsbDtcblxuXHRjb25zdHJ1Y3Rvclx0XHQocHJpdmF0ZSBzZXJ2aWNlTGlzdGU6IExpc3RlQ2hvc2VzU2VydmljZSkge1xuXHR9O1xuICAgIG5nT25Jbml0KCk6IHZvaWQgeyAvL2luaXRpYWxpc2F0aW9uXG4gICAgICAgIExpc3RlQ2hvc2VzU2VydmljZS5nZXREYXRhKCkudGhlbiggKG5mKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5mICAgICA9IG5mO1xuICAgICAgICAgICAgdGhpcy5jaG9zZXMgPSBuZi5jaG9zZXM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaG9zZXMoKSA6IENob3NlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaG9zZXMuZmlsdGVyKHRoaXMuZmlsdGVyKTtcbiAgICB9XG4gICAgYWpvdXRlcihpbnB1dDogSFRNTElucHV0RWxlbWVudCk6dm9pZCB7XG4gICAgICAgIHRoaXMubmYuQWpvdXRlcihpbnB1dC52YWx1ZSk7XG4gICAgICAgIGlucHV0LnZhbHVlPVwiXCI7XG4gICAgfVxuICAgIHNldEZpbHRlckFsbCgpOnZvaWR7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXJBbGw7XG4gICAgfVxuICAgIHNldEZpbHRlckFjdGl2ZSgpOnZvaWR7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXJBY3RpdmU7XG4gICAgfVxuICAgIHNldEZpbHRlckNvbXBsZXRlKCk6dm9pZHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlckNvbXBsZXRlZDtcblxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
