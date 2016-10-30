import { Component, Input, ElementRef, ViewChild } from "@angular/core";
import {Chose} from "@NoyauFonctionnel/nf";

const htmlTemplate = `
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

@Component({
  selector		: "item-chose",
  template		: htmlTemplate
})
export class ItemChose {
	@Input() 	       nf		: Chose; //précise qu'on s'attend a ce qu'on as un nf qui se comporte comme un input
				       editing 	: boolean;
	@ViewChild("edit") edit     :ElementRef;
	modeEdition():void{
		this.editing = true;
		requestAnimationFrame(() => this.edit.nativeElement.focus());
	}
	editText(value: string):void{
		this.nf.Texte(value);
		this.editing = false;
	}
	keepEditTexte(value: string):void{
		this.nf.Texte(value);
	}
};

