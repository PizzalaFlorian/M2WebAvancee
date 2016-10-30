import * as NF 			from "../nf/nf";
import {ComponentIHM} 	from "./ComponentIHM";
import {ChoseIHM}		from "./Chose_IHM";

const htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>Liste</h1>
			<form action="#/">
				<input class="new-todo" placeholder="Que faire?" autofocus>
			</form>
		</header>
		<section class="main">
			<input class="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list"></ul>
		</section>
	</section>
`;

// Classe à compléter...
export class ListeChosesIHM extends ComponentIHM {
	form : HTMLFormElement;
	input: HTMLInputElement;
	ul : HTMLUListElement;
	listeChosesIHM : ChoseIHM[];
	toogleAll : HTMLInputElement;
	bool : boolean;
	constructor(public NF: NF.ListeChoses, rootSelector) {
		super(NF, document.querySelector( rootSelector ));
		// on obtient les références pour les balises.
		// init
		this.root.innerHTML = htmlTemplate;
		this.form = <HTMLFormElement> this.root.querySelector("form"); //ne pas oublier de caster les inputs.
		this.input = <HTMLInputElement> this.root.querySelector("form input.new-todo");
		this.ul = <HTMLUListElement> this.root.querySelector("ul.todo-list");
		this.listeChosesIHM = [];
		this.toogleAll = <HTMLInputElement> this.root.querySelector("form input.toogle-all");
		this.bool = false;
		//ajout sur le form
		this.form.onsubmit = (e:Event) =>{
			e.preventDefault(); //Empèche le comportement par défaut associer par le navigateur a cet évènement.
			let val = this.input.value.trim(); // test pour empecher insertion vide
			if(val){
				this.NF.Ajouter(val); //on met a jours la structure de donnée.
				this.input.value ="";
			}
		};
		//réponses aux evmts
		this.NF.on("update",(nf,eventName,eventValue)=>{
			console.log("update",nf,eventName,eventValue);
			if(eventValue.append){
				//for(let i=0; i<3;i++){
					let chose : NF.Chose = eventValue.append;
					let li = document.createElement("li");
					this.ul.appendChild(li);
					this.listeChosesIHM.push(new ChoseIHM(chose,li));
				//}
			}
			if(eventValue.remove){
				console.log(this.listeChosesIHM);
				for(let i=0; i<3;i++){
					let chose : NF.Chose = eventValue.remove;
					this.listeChosesIHM = this.listeChosesIHM.filter(function (value : ChoseIHM, index: number, array: ChoseIHM[]){
						if(value.NF == chose){
							// value.root = noeud courant
							// on va chercher le parent et on supprime le noeud courand.
							value.root.parentNode.removeChild(value.root);
							return false;
						}
						else{
							return true;
						}
					});
				}
				console.log(this.listeChosesIHM);
			}
		});
	}
};


