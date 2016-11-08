System.register(["./ComponentIHM", "./Chose_IHM"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, Chose_IHM_1;
    var htmlTemplate, ListeChosesIHM;
    return {
        setters:[
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            },
            function (Chose_IHM_1_1) {
                Chose_IHM_1 = Chose_IHM_1_1;
            }],
        execute: function() {
            htmlTemplate = `
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
            ListeChosesIHM = class ListeChosesIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, rootSelector) {
                    super(NF, document.querySelector(rootSelector));
                    this.NF = NF;
                    // on obtient les références pour les balises.
                    // init
                    this.root.innerHTML = htmlTemplate;
                    this.form = this.root.querySelector("form"); //ne pas oublier de caster les inputs.
                    this.input = this.root.querySelector("form input.new-todo");
                    this.ul = this.root.querySelector("ul.todo-list");
                    this.listeChosesIHM = [];
                    this.toogleAll = this.root.querySelector("form input.toogle-all");
                    this.bool = false;
                    //ajout sur le form
                    this.form.onsubmit = (e) => {
                        e.preventDefault(); //Empèche le comportement par défaut associer par le navigateur a cet évènement.
                        let val = this.input.value.trim(); // test pour empecher insertion vide
                        if (val) {
                            this.NF.Ajouter(val); //on met a jours la structure de donnée.
                            this.input.value = "";
                        }
                    };
                    //réponses aux evmts
                    this.NF.on("update", (nf, eventName, eventValue) => {
                        console.log("update", nf, eventName, eventValue);
                        if (eventValue.append) {
                            //for(let i=0; i<3;i++){
                            let chose = eventValue.append;
                            let li = document.createElement("li");
                            this.ul.appendChild(li);
                            this.listeChosesIHM.push(new Chose_IHM_1.ChoseIHM(chose, li));
                        }
                        if (eventValue.remove) {
                            console.log(this.listeChosesIHM);
                            for (let i = 0; i < 3; i++) {
                                let chose = eventValue.remove;
                                this.listeChosesIHM = this.listeChosesIHM.filter(function (value, index, array) {
                                    if (value.NF == chose) {
                                        // value.root = noeud courant
                                        // on va chercher le parent et on supprime le noeud courand.
                                        value.root.parentNode.removeChild(value.root);
                                        return false;
                                    }
                                    else {
                                        return true;
                                    }
                                });
                            }
                            console.log(this.listeChosesIHM);
                        }
                    });
                }
            };
            exports_1("ListeChosesIHM", ListeChosesIHM);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUFNLENBQUM7Z0NBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFnQixFQUFFLEtBQWEsRUFBRSxLQUFpQjtvQ0FDNUcsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQSxDQUFDO3dDQUNyQiw2QkFBNkI7d0NBQzdCLDREQUE0RDt3Q0FDNUQsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3Q0FDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQ0FDZCxDQUFDO29DQUNELElBQUksQ0FBQSxDQUFDO3dDQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0NBQ2IsQ0FBQztnQ0FDRixDQUFDLENBQUMsQ0FBQzs0QkFDSixDQUFDOzRCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNsQyxDQUFDO29CQUNGLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7WUFDRixDQUFDO1lBMURELDJDQTBEQyxDQUFBO1lBQUEsQ0FBQyIsImZpbGUiOiJJSE0vbGlzdGVDaG9zZXNfSUhNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgTkYgXHRcdFx0ZnJvbSBcIi4uL25mL25mXCI7XG5pbXBvcnQge0NvbXBvbmVudElITX0gXHRmcm9tIFwiLi9Db21wb25lbnRJSE1cIjtcbmltcG9ydCB7Q2hvc2VJSE19XHRcdGZyb20gXCIuL0Nob3NlX0lITVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuXHRcdDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cblx0XHRcdDxoMT5MaXN0ZTwvaDE+XG5cdFx0XHQ8Zm9ybSBhY3Rpb249XCIjL1wiPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiIHBsYWNlaG9sZGVyPVwiUXVlIGZhaXJlP1wiIGF1dG9mb2N1cz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cblx0XHRcdDxpbnB1dCBjbGFzcz1cInRvZ2dsZS1hbGxcIiB0eXBlPVwiY2hlY2tib3hcIj5cblx0XHRcdDxsYWJlbCBmb3I9XCJ0b2dnbGUtYWxsXCI+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPlxuXHRcdFx0PHVsIGNsYXNzPVwidG9kby1saXN0XCI+PC91bD5cblx0XHQ8L3NlY3Rpb24+XG5cdDwvc2VjdGlvbj5cbmA7XG5cbi8vIENsYXNzZSDDoCBjb21wbMOpdGVyLi4uXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXNJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xuXHRmb3JtIDogSFRNTEZvcm1FbGVtZW50O1xuXHRpbnB1dDogSFRNTElucHV0RWxlbWVudDtcblx0dWwgOiBIVE1MVUxpc3RFbGVtZW50O1xuXHRsaXN0ZUNob3Nlc0lITSA6IENob3NlSUhNW107XG5cdHRvb2dsZUFsbCA6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGJvb2wgOiBib29sZWFuO1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgTkY6IE5GLkxpc3RlQ2hvc2VzLCByb290U2VsZWN0b3IpIHtcblx0XHRzdXBlcihORiwgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggcm9vdFNlbGVjdG9yICkpO1xuXHRcdC8vIG9uIG9idGllbnQgbGVzIHLDqWbDqXJlbmNlcyBwb3VyIGxlcyBiYWxpc2VzLlxuXHRcdC8vIGluaXRcblx0XHR0aGlzLnJvb3QuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlO1xuXHRcdHRoaXMuZm9ybSA9IDxIVE1MRm9ybUVsZW1lbnQ+IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTsgLy9uZSBwYXMgb3VibGllciBkZSBjYXN0ZXIgbGVzIGlucHV0cy5cblx0XHR0aGlzLmlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dC5uZXctdG9kb1wiKTtcblx0XHR0aGlzLnVsID0gPEhUTUxVTGlzdEVsZW1lbnQ+IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwidWwudG9kby1saXN0XCIpO1xuXHRcdHRoaXMubGlzdGVDaG9zZXNJSE0gPSBbXTtcblx0XHR0aGlzLnRvb2dsZUFsbCA9IDxIVE1MSW5wdXRFbGVtZW50PiB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXQudG9vZ2xlLWFsbFwiKTtcblx0XHR0aGlzLmJvb2wgPSBmYWxzZTtcblx0XHQvL2Fqb3V0IHN1ciBsZSBmb3JtXG5cdFx0dGhpcy5mb3JtLm9uc3VibWl0ID0gKGU6RXZlbnQpID0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpOyAvL0VtcMOoY2hlIGxlIGNvbXBvcnRlbWVudCBwYXIgZMOpZmF1dCBhc3NvY2llciBwYXIgbGUgbmF2aWdhdGV1ciBhIGNldCDDqXbDqG5lbWVudC5cblx0XHRcdGxldCB2YWwgPSB0aGlzLmlucHV0LnZhbHVlLnRyaW0oKTsgLy8gdGVzdCBwb3VyIGVtcGVjaGVyIGluc2VydGlvbiB2aWRlXG5cdFx0XHRpZih2YWwpe1xuXHRcdFx0XHR0aGlzLk5GLkFqb3V0ZXIodmFsKTsgLy9vbiBtZXQgYSBqb3VycyBsYSBzdHJ1Y3R1cmUgZGUgZG9ubsOpZS5cblx0XHRcdFx0dGhpcy5pbnB1dC52YWx1ZSA9XCJcIjtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8vcsOpcG9uc2VzIGF1eCBldm10c1xuXHRcdHRoaXMuTkYub24oXCJ1cGRhdGVcIiwobmYsZXZlbnROYW1lLGV2ZW50VmFsdWUpPT57XG5cdFx0XHRjb25zb2xlLmxvZyhcInVwZGF0ZVwiLG5mLGV2ZW50TmFtZSxldmVudFZhbHVlKTtcblx0XHRcdGlmKGV2ZW50VmFsdWUuYXBwZW5kKXtcblx0XHRcdFx0Ly9mb3IobGV0IGk9MDsgaTwzO2krKyl7XG5cdFx0XHRcdFx0bGV0IGNob3NlIDogTkYuQ2hvc2UgPSBldmVudFZhbHVlLmFwcGVuZDtcblx0XHRcdFx0XHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRcdFx0dGhpcy51bC5hcHBlbmRDaGlsZChsaSk7XG5cdFx0XHRcdFx0dGhpcy5saXN0ZUNob3Nlc0lITS5wdXNoKG5ldyBDaG9zZUlITShjaG9zZSxsaSkpO1xuXHRcdFx0XHQvL31cblx0XHRcdH1cblx0XHRcdGlmKGV2ZW50VmFsdWUucmVtb3ZlKXtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5saXN0ZUNob3Nlc0lITSk7XG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPDM7aSsrKXtcblx0XHRcdFx0XHRsZXQgY2hvc2UgOiBORi5DaG9zZSA9IGV2ZW50VmFsdWUucmVtb3ZlO1xuXHRcdFx0XHRcdHRoaXMubGlzdGVDaG9zZXNJSE0gPSB0aGlzLmxpc3RlQ2hvc2VzSUhNLmZpbHRlcihmdW5jdGlvbiAodmFsdWUgOiBDaG9zZUlITSwgaW5kZXg6IG51bWJlciwgYXJyYXk6IENob3NlSUhNW10pe1xuXHRcdFx0XHRcdFx0aWYodmFsdWUuTkYgPT0gY2hvc2Upe1xuXHRcdFx0XHRcdFx0XHQvLyB2YWx1ZS5yb290ID0gbm9ldWQgY291cmFudFxuXHRcdFx0XHRcdFx0XHQvLyBvbiB2YSBjaGVyY2hlciBsZSBwYXJlbnQgZXQgb24gc3VwcHJpbWUgbGUgbm9ldWQgY291cmFuZC5cblx0XHRcdFx0XHRcdFx0dmFsdWUucm9vdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZhbHVlLnJvb3QpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmxpc3RlQ2hvc2VzSUhNKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9
