import { miniJQ as $} from "./miniJQ";
console.log("p",$("p"));
$("p").each(function(i,e){console.log(i,e,this,e===this)});
$("p").click(function(){$(this).text("coucou")});
$("h1").text("Coucou");
$("a").append("youpiiiiiii");
$("span").append("hop").append(document.querySelector("h1"));