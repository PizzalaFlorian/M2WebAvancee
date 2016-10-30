import * as NF 			from "../nf/nf";
import {ComponentIHM} 	from "./ComponentIHM";

const htmlTemplate = `
	<div class="view">
		<input class="toggle" type="checkbox">
		<label class="texte"></label>
		<button class="destroy"></button>
	</div>
`;

// Classe à compléter...
export class ChoseIHM extends ComponentIHM {
	label : HTMLLabelElement;
	input : HTMLInputElement;
	button : HTMLButtonElement;
	constructor(public NF: NF.Chose, public root: Element) {
		super(NF, root);
		this.root.innerHTML = htmlTemplate;
		this.label = <HTMLLabelElement> this.root.querySelector("label.texte");
		this.label.textContent = NF.texte;//Affectation du texte.

		this.input = <HTMLInputElement> this.root.querySelector("input.toggle");

		this.button = <HTMLButtonElement> this.root.querySelector("Button.destroy");


		this.input.onclick = (e) =>  {
			NF.Fait(!NF.fait); //toogle;
		}

		this.button.onclick = (e) => {
			NF.dispose(); //appelle l'event remove qui sera traiter dans ListeChose
		}

		this.NF.on("update",(nf,eventName,eventValue)=>{
			console.log("update",nf,eventName,eventValue);
			this.input.checked = NF.fait;
			this.root.classList.toggle("completed");
		});
	}
}
