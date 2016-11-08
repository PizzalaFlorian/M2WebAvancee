System.register(["@angular/core", "@NoyauFonctionnel/nf"], function(exports_1, context_1) {
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
    var core_1, nf_1;
    var htmlTemplate, ItemChose;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle"
				type			= "checkbox"
				[ngModel] 		= "nf.fait"
				(ngModelChange) = "nf.Fait(!nf.fait)"
				/>
		<label 	class="texte" (dblclick)="modeEdition()">{{nf.texte}}</label>
		<button class="destroy" (click)="nf.dispose()"></button>
	</div>
	<form (ngSubmit)="editText(edit.value)">
		<input class="edit" value={{nf.texte}} #edit (blur)="editText(edit.value)" (keyup)="keepEditTexte(edit.value)"/>
	</form>
`;
            ItemChose = class ItemChose {
                modeEdition() {
                    this.editing = true;
                    requestAnimationFrame(() => this.edit.nativeElement.focus());
                }
                editText(value) {
                    this.nf.Texte(value);
                    this.editing = false;
                }
                keepEditTexte(value) {
                    this.nf.Texte(value);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', nf_1.Chose)
            ], ItemChose.prototype, "nf", void 0);
            __decorate([
                core_1.ViewChild("edit"), 
                __metadata('design:type', core_1.ElementRef)
            ], ItemChose.prototype, "edit", void 0);
            ItemChose = __decorate([
                core_1.Component({
                    selector: "item-chose",
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [])
            ], ItemChose);
            exports_1("ItemChose", ItemChose);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUdNLFlBQVk7Ozs7Ozs7Ozs7WUFBWixZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Q0FhcEIsQ0FBQztZQU1GO2dCQUlDLFdBQVc7b0JBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLHFCQUFxQixDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFDRCxRQUFRLENBQUMsS0FBYTtvQkFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUNELGFBQWEsQ0FBQyxLQUFhO29CQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztZQUNGLENBQUM7WUFkQTtnQkFBQyxZQUFLLEVBQUU7O2lEQUFBO1lBRVI7Z0JBQUMsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7O21EQUFBO1lBUG5CO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFJLFlBQVk7b0JBQ3hCLFFBQVEsRUFBSSxZQUFZO2lCQUN6QixDQUFDOzt5QkFBQTtZQUNGLGlDQWVDLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2hvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDaG9zZX0gZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PGRpdiBjbGFzcz1cInZpZXdcIj5cblx0XHQ8aW5wdXQgXHRjbGFzc1x0XHRcdD0gXCJ0b2dnbGVcIlxuXHRcdFx0XHR0eXBlXHRcdFx0PSBcImNoZWNrYm94XCJcblx0XHRcdFx0W25nTW9kZWxdIFx0XHQ9IFwibmYuZmFpdFwiXG5cdFx0XHRcdChuZ01vZGVsQ2hhbmdlKSA9IFwibmYuRmFpdCghbmYuZmFpdClcIlxuXHRcdFx0XHQvPlxuXHRcdDxsYWJlbCBcdGNsYXNzPVwidGV4dGVcIiAoZGJsY2xpY2spPVwibW9kZUVkaXRpb24oKVwiPnt7bmYudGV4dGV9fTwvbGFiZWw+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImRlc3Ryb3lcIiAoY2xpY2spPVwibmYuZGlzcG9zZSgpXCI+PC9idXR0b24+XG5cdDwvZGl2PlxuXHQ8Zm9ybSAobmdTdWJtaXQpPVwiZWRpdFRleHQoZWRpdC52YWx1ZSlcIj5cblx0XHQ8aW5wdXQgY2xhc3M9XCJlZGl0XCIgdmFsdWU9e3tuZi50ZXh0ZX19ICNlZGl0IChibHVyKT1cImVkaXRUZXh0KGVkaXQudmFsdWUpXCIgKGtleXVwKT1cImtlZXBFZGl0VGV4dGUoZWRpdC52YWx1ZSlcIi8+XG5cdDwvZm9ybT5cbmA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3Rvclx0XHQ6IFwiaXRlbS1jaG9zZVwiLFxuICB0ZW1wbGF0ZVx0XHQ6IGh0bWxUZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ2hvc2Uge1xuXHRASW5wdXQoKSBcdCAgICAgICBuZlx0XHQ6IENob3NlOyAvL3Byw6ljaXNlIHF1J29uIHMnYXR0ZW5kIGEgY2UgcXUnb24gYXMgdW4gbmYgcXVpIHNlIGNvbXBvcnRlIGNvbW1lIHVuIGlucHV0XG5cdFx0XHRcdCAgICAgICBlZGl0aW5nIFx0OiBib29sZWFuO1xuXHRAVmlld0NoaWxkKFwiZWRpdFwiKSBlZGl0ICAgICA6RWxlbWVudFJlZjtcblx0bW9kZUVkaXRpb24oKTp2b2lke1xuXHRcdHRoaXMuZWRpdGluZyA9IHRydWU7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZWRpdC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuXHR9XG5cdGVkaXRUZXh0KHZhbHVlOiBzdHJpbmcpOnZvaWR7XG5cdFx0dGhpcy5uZi5UZXh0ZSh2YWx1ZSk7XG5cdFx0dGhpcy5lZGl0aW5nID0gZmFsc2U7XG5cdH1cblx0a2VlcEVkaXRUZXh0ZSh2YWx1ZTogc3RyaW5nKTp2b2lke1xuXHRcdHRoaXMubmYuVGV4dGUodmFsdWUpO1xuXHR9XG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9
