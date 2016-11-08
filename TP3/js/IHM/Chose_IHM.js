System.register(["./ComponentIHM"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1;
    var htmlTemplate, ChoseIHM;
    return {
        setters:[
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<div class="view">
		<input class="toggle" type="checkbox">
		<label class="texte"></label>
		<button class="destroy"></button>
	</div>
`;
            // Classe à compléter...
            ChoseIHM = class ChoseIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, root) {
                    super(NF, root);
                    this.NF = NF;
                    this.root = root;
                    this.root.innerHTML = htmlTemplate;
                    this.label = this.root.querySelector("label.texte");
                    this.label.textContent = NF.texte; //Affectation du texte.
                    this.input = this.root.querySelector("input.toggle");
                    this.button = this.root.querySelector("Button.destroy");
                    this.input.onclick = (e) => {
                        NF.Fait(!NF.fait); //toogle;
                    };
                    this.button.onclick = (e) => {
                        NF.dispose(); //appelle l'event remove qui sera traiter dans ListeChose
                    };
                    this.NF.on("update", (nf, eventName, eventValue) => {
                        console.log("update", nf, eventName, eventValue);
                        this.input.checked = NF.fait;
                        this.root.classList.toggle("completed");
                    });
                }
            };
            exports_1("ChoseIHM", ChoseIHM);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklITS9DaG9zZV9JSE0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUdNLFlBQVk7Ozs7Ozs7WUFBWixZQUFZLEdBQUc7Ozs7OztDQU1wQixDQUFDO1lBRUYsd0JBQXdCO1lBQ3hCLGtDQUE4QiwyQkFBWTtnQkFJekMsWUFBbUIsRUFBWSxFQUFTLElBQWE7b0JBQ3BELE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQURFLE9BQUUsR0FBRixFQUFFLENBQVU7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFFcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO29CQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBLHVCQUF1QjtvQkFFekQsSUFBSSxDQUFDLEtBQUssR0FBc0IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXhFLElBQUksQ0FBQyxNQUFNLEdBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBRzVFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzt3QkFDdEIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7b0JBQzdCLENBQUMsQ0FBQTtvQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7d0JBQ3ZCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLHlEQUF5RDtvQkFDeEUsQ0FBQyxDQUFBO29CQUVELElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUMsVUFBVTt3QkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBQyxVQUFVLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO1lBQ0YsQ0FBQztZQTdCRCwrQkE2QkMsQ0FBQSIsImZpbGUiOiJJSE0vQ2hvc2VfSUhNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgTkYgXHRcdFx0ZnJvbSBcIi4uL25mL25mXCI7XG5pbXBvcnQge0NvbXBvbmVudElITX0gXHRmcm9tIFwiLi9Db21wb25lbnRJSE1cIjtcblxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuXHQ8ZGl2IGNsYXNzPVwidmlld1wiPlxuXHRcdDxpbnB1dCBjbGFzcz1cInRvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiPlxuXHRcdDxsYWJlbCBjbGFzcz1cInRleHRlXCI+PC9sYWJlbD5cblx0XHQ8YnV0dG9uIGNsYXNzPVwiZGVzdHJveVwiPjwvYnV0dG9uPlxuXHQ8L2Rpdj5cbmA7XG5cbi8vIENsYXNzZSDDoCBjb21wbMOpdGVyLi4uXG5leHBvcnQgY2xhc3MgQ2hvc2VJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xuXHRsYWJlbCA6IEhUTUxMYWJlbEVsZW1lbnQ7XG5cdGlucHV0IDogSFRNTElucHV0RWxlbWVudDtcblx0YnV0dG9uIDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBORjogTkYuQ2hvc2UsIHB1YmxpYyByb290OiBFbGVtZW50KSB7XG5cdFx0c3VwZXIoTkYsIHJvb3QpO1xuXHRcdHRoaXMucm9vdC5pbm5lckhUTUwgPSBodG1sVGVtcGxhdGU7XG5cdFx0dGhpcy5sYWJlbCA9IDxIVE1MTGFiZWxFbGVtZW50PiB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcImxhYmVsLnRleHRlXCIpO1xuXHRcdHRoaXMubGFiZWwudGV4dENvbnRlbnQgPSBORi50ZXh0ZTsvL0FmZmVjdGF0aW9uIGR1IHRleHRlLlxuXG5cdFx0dGhpcy5pbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PiB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcImlucHV0LnRvZ2dsZVwiKTtcblxuXHRcdHRoaXMuYnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PiB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcIkJ1dHRvbi5kZXN0cm95XCIpO1xuXG5cblx0XHR0aGlzLmlucHV0Lm9uY2xpY2sgPSAoZSkgPT4gIHtcblx0XHRcdE5GLkZhaXQoIU5GLmZhaXQpOyAvL3Rvb2dsZTtcblx0XHR9XG5cblx0XHR0aGlzLmJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcblx0XHRcdE5GLmRpc3Bvc2UoKTsgLy9hcHBlbGxlIGwnZXZlbnQgcmVtb3ZlIHF1aSBzZXJhIHRyYWl0ZXIgZGFucyBMaXN0ZUNob3NlXG5cdFx0fVxuXG5cdFx0dGhpcy5ORi5vbihcInVwZGF0ZVwiLChuZixldmVudE5hbWUsZXZlbnRWYWx1ZSk9Pntcblx0XHRcdGNvbnNvbGUubG9nKFwidXBkYXRlXCIsbmYsZXZlbnROYW1lLGV2ZW50VmFsdWUpO1xuXHRcdFx0dGhpcy5pbnB1dC5jaGVja2VkID0gTkYuZmFpdDtcblx0XHRcdHRoaXMucm9vdC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuXHRcdH0pO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
