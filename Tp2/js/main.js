System.register(["./miniJQ"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var miniJQ_1;
    return {
        setters:[
            function (miniJQ_1_1) {
                miniJQ_1 = miniJQ_1_1;
            }],
        execute: function() {
            console.log("p", miniJQ_1.miniJQ("p"));
            miniJQ_1.miniJQ("p").each(function (i, e) { console.log(i, e, this, e === this); });
            miniJQ_1.miniJQ("p").click(function () { miniJQ_1.miniJQ(this).text("coucou"); });
            miniJQ_1.miniJQ("h1").text("Coucou");
            miniJQ_1.miniJQ("a").append("youpiiiiiii");
            miniJQ_1.miniJQ("span").append("hop").append(document.querySelector("h1"));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLGVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLGVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxJQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxLQUFHLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7WUFDM0QsZUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFXLGVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztZQUNqRCxlQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLGVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsZUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtaW5pSlEgYXMgJH0gZnJvbSBcIi4vbWluaUpRXCI7XG5jb25zb2xlLmxvZyhcInBcIiwkKFwicFwiKSk7XG4kKFwicFwiKS5lYWNoKGZ1bmN0aW9uKGksZSl7Y29uc29sZS5sb2coaSxlLHRoaXMsZT09PXRoaXMpfSk7XG4kKFwicFwiKS5jbGljayhmdW5jdGlvbigpeyQodGhpcykudGV4dChcImNvdWNvdVwiKX0pO1xuJChcImgxXCIpLnRleHQoXCJDb3Vjb3VcIik7XG4kKFwiYVwiKS5hcHBlbmQoXCJ5b3VwaWlpaWlpaVwiKTtcbiQoXCJzcGFuXCIpLmFwcGVuZChcImhvcFwiKS5hcHBlbmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpKTsiXSwic291cmNlUm9vdCI6IiJ9
