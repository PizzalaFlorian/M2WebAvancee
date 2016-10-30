/***********************************************************************************************************************
 * Q1) Ecrivez la classe MiniJQData de sorte à mimer le comportement de JQuery
 * voir http://api.jquery.com/
 * * Au minimum, les méthodes :
 *   - each - done
 *   - text - done
 *   - html
 *   - click
 *   - append
 *   - bind
 *   - children
 *   - detach
 *  nom_fct ( param : type param... ) : retour | retour 2 ... {
 *  fction}
 */
class MiniJQData {
    private elements    : HTMLElement[];
    constructor( elements: HTMLElement[] ) {
        this.elements = elements;
    }
    each(f: (index: number, e: HTMLElement)=>any) : this {
        this.elements.forEach((e,i)=>f.apply(e,[i,e]));
        return this;
    }
    text(str?:String) : this |string {
        if(str === undefined) {
            let  concatStr="";
            this.elements.forEach(e=> concatStr+= e.textContent);
            return concatStr;
        }
        if(this.elements.length > 0) {
            return this.elements.map(e=>e.textContent).reduce((acc,txt)=>acc+txt);
        } else {
            return "";
        }
    }
    html(str? : string) : this | string {
        if(str === undefined) {
            let  concatStr="";
            this.elements.forEach(e=> concatStr+= e.innerHTML);
            return concatStr;
        }
        if(this.elements.length > 0) {
            return this.elements.map(e=>e.innerHTML).reduce((acc,txt)=>acc+txt);
        } else {
            return "";
        }
    }
    click(callback:(evt?:Event)=>any) : this {
        return this.each((i,e) => { e.addEventListener("click",callback); } );
    }
    append(content : Element | string ) : this {
        
        return this.each((i,e)=>{
            if(typeof content === "string" ){
            e.textContent = e.textContent + content;
            } else {
                let copy = content.cloneNode(true);
                e.appendChild(copy);
            }
        });
    }
}

/***********************************************************************************************************************
 * Q2) Ecrivez la fonction miniJQ :
 *   - argument : un sélecteur CSS ou un Element du DOM
 *   - renvoi une instance de la classe MiniJQData
 */
export let miniJQ = ( selecteur: string | HTMLElement | HTMLElement[] ) : MiniJQData => {
    let elements: HTMLElement[] = [];
    if (selecteur.constructor === String) {
        elements = <HTMLElement[]>Array.from(document.querySelectorAll(<string>selecteur));
    }
    if (selecteur instanceof HTMLElement) {
        elements.push(selecteur);
    }
    if (selecteur instanceof Array) {
        elements = selecteur;
    }
    return new MiniJQData( elements ); // A modifier bien sur...
};


/***********************************************************************************************************************
 * Q3) Etendez la classe MiniJQData avec d'autres méthodes de votre choix
 *  Par exemple des méthodes issues de JQueryUI
 */
