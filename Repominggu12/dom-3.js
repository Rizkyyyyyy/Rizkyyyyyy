<script>
 var paragraf = document.getElementsByClassName("paragraf");
 setInterval(function () {
 paragraf[0].style.color = "red";
 paragraf[1].style.color = "green";
 paragraf[2].style.color = "blue";
 setTimeout(function () {
 paragraf[0].style.color = "black";
 paragraf[1].style.color = "black";
 paragraf[2].style.color = "black";
 }, 500)
 }, 1000);
</script>
