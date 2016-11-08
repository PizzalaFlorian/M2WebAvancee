System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MiniJQData, miniJQ;
    return {
        setters:[],
        execute: function() {
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
            MiniJQData = class MiniJQData {
                constructor(elements) {
                    this.elements = elements;
                }
                each(f) {
                    this.elements.forEach((e, i) => f.apply(e, [i, e]));
                    return this;
                }
                text(str) {
                    if (str === undefined) {
                        let concatStr = "";
                        this.elements.forEach(e => concatStr += e.textContent);
                        return concatStr;
                    }
                    if (this.elements.length > 0) {
                        return this.elements.map(e => e.textContent).reduce((acc, txt) => acc + txt);
                    }
                    else {
                        return "";
                    }
                }
                html(str) {
                    if (str === undefined) {
                        let concatStr = "";
                        this.elements.forEach(e => concatStr += e.innerHTML);
                        return concatStr;
                    }
                    if (this.elements.length > 0) {
                        return this.elements.map(e => e.innerHTML).reduce((acc, txt) => acc + txt);
                    }
                    else {
                        return "";
                    }
                }
                click(callback) {
                    return this.each((i, e) => { e.addEventListener("click", callback); });
                }
                append(content) {
                    return this.each((i, e) => {
                        if (typeof content === "string") {
                            e.textContent = e.textContent + content;
                        }
                        else {
                            let copy = content.cloneNode(true);
                            e.appendChild(copy);
                        }
                    });
                }
            };
            /***********************************************************************************************************************
             * Q2) Ecrivez la fonction miniJQ :
             *   - argument : un sélecteur CSS ou un Element du DOM
             *   - renvoi une instance de la classe MiniJQData
             */
            exports_1("miniJQ", miniJQ = (selecteur) => {
                let elements = [];
                if (selecteur.constructor === String) {
                    elements = Array.from(document.querySelectorAll(selecteur));
                }
                if (selecteur instanceof HTMLElement) {
                    elements.push(selecteur);
                }
                if (selecteur instanceof Array) {
                    elements = selecteur;
                }
                return new MiniJQData(elements); // A modifier bien sur...
            });
        }
    }
});
/***********************************************************************************************************************
 * Q3) Etendez la classe MiniJQData avec d'autres méthodes de votre choix
 *  Par exemple des méthodes issues de JQueryUI
 */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlKUS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0JBcUVXLE1BQU07Ozs7WUFyRWpCOzs7Ozs7Ozs7Ozs7OztlQWNHO1lBQ0g7Z0JBRUksWUFBYSxRQUF1QjtvQkFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQXVDO29CQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUNELElBQUksQ0FBQyxHQUFXO29CQUNaLEVBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixJQUFLLFNBQVMsR0FBQyxFQUFFLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBRyxTQUFTLElBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNyRCxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNyQixDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEtBQUcsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxRSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2QsQ0FBQztnQkFDTCxDQUFDO2dCQUNELElBQUksQ0FBQyxHQUFhO29CQUNkLEVBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixJQUFLLFNBQVMsR0FBQyxFQUFFLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBRyxTQUFTLElBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNyQixDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEtBQUcsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4RSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2QsQ0FBQztnQkFDTCxDQUFDO2dCQUNELEtBQUssQ0FBQyxRQUEwQjtvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztnQkFDMUUsQ0FBQztnQkFDRCxNQUFNLENBQUMsT0FBMEI7b0JBRTdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7d0JBQ2pCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVMsQ0FBQyxDQUFBLENBQUM7NEJBQ2pDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7d0JBQ3hDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbkMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQUVEOzs7O2VBSUc7WUFDUSxvQkFBQSxNQUFNLEdBQUcsQ0FBRSxTQUErQztnQkFDakUsSUFBSSxRQUFRLEdBQWtCLEVBQUUsQ0FBQztnQkFDakMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxRQUFRLEdBQWtCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFTLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsU0FBUyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsU0FBUyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLFFBQVEsR0FBRyxTQUFTLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFFLFFBQVEsQ0FBRSxDQUFDLENBQUMseUJBQXlCO1lBQ2hFLENBQUMsQ0FBQSxDQUFDOzs7O0FBR0Y7OztHQUdHIiwiZmlsZSI6Im1pbmlKUS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUTEpIEVjcml2ZXogbGEgY2xhc3NlIE1pbmlKUURhdGEgZGUgc29ydGUgw6AgbWltZXIgbGUgY29tcG9ydGVtZW50IGRlIEpRdWVyeVxuICogdm9pciBodHRwOi8vYXBpLmpxdWVyeS5jb20vXG4gKiAqIEF1IG1pbmltdW0sIGxlcyBtw6l0aG9kZXMgOlxuICogICAtIGVhY2ggLSBkb25lXG4gKiAgIC0gdGV4dCAtIGRvbmVcbiAqICAgLSBodG1sXG4gKiAgIC0gY2xpY2tcbiAqICAgLSBhcHBlbmRcbiAqICAgLSBiaW5kXG4gKiAgIC0gY2hpbGRyZW5cbiAqICAgLSBkZXRhY2hcbiAqICBub21fZmN0ICggcGFyYW0gOiB0eXBlIHBhcmFtLi4uICkgOiByZXRvdXIgfCByZXRvdXIgMiAuLi4ge1xuICogIGZjdGlvbn1cbiAqL1xuY2xhc3MgTWluaUpRRGF0YSB7XG4gICAgcHJpdmF0ZSBlbGVtZW50cyAgICA6IEhUTUxFbGVtZW50W107XG4gICAgY29uc3RydWN0b3IoIGVsZW1lbnRzOiBIVE1MRWxlbWVudFtdICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgfVxuICAgIGVhY2goZjogKGluZGV4OiBudW1iZXIsIGU6IEhUTUxFbGVtZW50KT0+YW55KSA6IHRoaXMge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGUsaSk9PmYuYXBwbHkoZSxbaSxlXSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGV4dChzdHI/OlN0cmluZykgOiB0aGlzIHxzdHJpbmcge1xuICAgICAgICBpZihzdHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0ICBjb25jYXRTdHI9XCJcIjtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlPT4gY29uY2F0U3RyKz0gZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICByZXR1cm4gY29uY2F0U3RyO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHMubWFwKGU9PmUudGV4dENvbnRlbnQpLnJlZHVjZSgoYWNjLHR4dCk9PmFjYyt0eHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaHRtbChzdHI/IDogc3RyaW5nKSA6IHRoaXMgfCBzdHJpbmcge1xuICAgICAgICBpZihzdHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0ICBjb25jYXRTdHI9XCJcIjtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlPT4gY29uY2F0U3RyKz0gZS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbmNhdFN0cjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLm1hcChlPT5lLmlubmVySFRNTCkucmVkdWNlKChhY2MsdHh0KT0+YWNjK3R4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGljayhjYWxsYmFjazooZXZ0PzpFdmVudCk9PmFueSkgOiB0aGlzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaCgoaSxlKSA9PiB7IGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY2FsbGJhY2spOyB9ICk7XG4gICAgfVxuICAgIGFwcGVuZChjb250ZW50IDogRWxlbWVudCB8IHN0cmluZyApIDogdGhpcyB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKChpLGUpPT57XG4gICAgICAgICAgICBpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIiApe1xuICAgICAgICAgICAgZS50ZXh0Q29udGVudCA9IGUudGV4dENvbnRlbnQgKyBjb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY29weSA9IGNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGUuYXBwZW5kQ2hpbGQoY29weSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBRMikgRWNyaXZleiBsYSBmb25jdGlvbiBtaW5pSlEgOlxuICogICAtIGFyZ3VtZW50IDogdW4gc8OpbGVjdGV1ciBDU1Mgb3UgdW4gRWxlbWVudCBkdSBET01cbiAqICAgLSByZW52b2kgdW5lIGluc3RhbmNlIGRlIGxhIGNsYXNzZSBNaW5pSlFEYXRhXG4gKi9cbmV4cG9ydCBsZXQgbWluaUpRID0gKCBzZWxlY3RldXI6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSApIDogTWluaUpRRGF0YSA9PiB7XG4gICAgbGV0IGVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XG4gICAgaWYgKHNlbGVjdGV1ci5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKSB7XG4gICAgICAgIGVsZW1lbnRzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKDxzdHJpbmc+c2VsZWN0ZXVyKSk7XG4gICAgfVxuICAgIGlmIChzZWxlY3RldXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKHNlbGVjdGV1cik7XG4gICAgfVxuICAgIGlmIChzZWxlY3RldXIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBlbGVtZW50cyA9IHNlbGVjdGV1cjtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNaW5pSlFEYXRhKCBlbGVtZW50cyApOyAvLyBBIG1vZGlmaWVyIGJpZW4gc3VyLi4uXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUTMpIEV0ZW5kZXogbGEgY2xhc3NlIE1pbmlKUURhdGEgYXZlYyBkJ2F1dHJlcyBtw6l0aG9kZXMgZGUgdm90cmUgY2hvaXhcbiAqICBQYXIgZXhlbXBsZSBkZXMgbcOpdGhvZGVzIGlzc3VlcyBkZSBKUXVlcnlVSVxuICovXG4iXSwic291cmNlUm9vdCI6IiJ9
