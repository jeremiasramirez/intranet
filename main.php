<?php
 
require 'views/main-views.php';

	session_start();
	// if(isset($_SESSION["name"]) && ctype_space($_SESSION["name"])==1)
	// {
		if(!$_SESSION["name"]){
			 
			header("Location: out.php");
		}
	// }

?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Main</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" href="fontawesome-free-5.9.0-web/css/all.min.css">
	<link rel="stylesheet" href="showstate.css">
	<!-- <link rel="stylesheet" href="urlmsj/welcome/welcome.css"> -->
	<link rel="stylesheet" href="viewstate.css">
</head>
<body>
	<header class="main__header" id="main__header">
		<article class="main_main">
			<a href="main.php" class="title fas fa-home" title="Home"></a>
		</article>
		<article class="main_out">
			
		<a href="main.php" class="title fas fa-home"></a>
		<a href="publication.php" class="user_perfil far fa-bell" title="Notification"></a>
		<a href="users.php" class="user_perfil fas fa-user" title="User"></a> 
		<a href="out.php" class="perfil_out fas fa-sign-out-alt" title="Close"></a>
 
		</article>
	</header>

 <main class="main">
 	<div class="search__user">
 		<form action="usersearch.php" method="post">
 			<input type="search" class="search" placeholder="Search user" id="searchname" name="search">
 			<button class="btn__search fas fa-search" id="btn__search" title="Buscar"></button>
 		</form>
 	</div>


 	<div class="publish">
 			<form action="" method="">

	 		<textarea  id="textpublish" class="text_publish" cols="20" rows="4" placeholder="¿Como se siente?" style="color:#444" ></textarea>
	 	</form>

 	</div>

</main>

	<article class="title_states" style="text-align: center;color:red;">
			<h1 class="state_publish fas fa-stream"></h1>
		</article>
	
	<section class="states" id="statesitem">
		<?php 
			$getst= new main_views;
			$getst->getState();
		 ?>
	</section>
	<script>
	let data = document.getElementById("button");
	let values = document.getElementById("area");
 	 if(data && values){

		data.addEventListener("click", (e)=>{
			 alert("hello")
			var http = new XMLHttpRequest();
				http.open("POST", "views/main-views.php", 1);

				http.addEventListener("load", (e)=>{
					 console.log(e.target.responseText)
				})
				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http.send(`state=${values.value}`); 

		})
 	 }
</script>


<!-- <script src="urlmsj/welcome/welcome.js" type="text/javascript"></script> -->
<script src="main.js"></script>
 <script src="usersearch.js"></script>
 <script src="showstate.js"></script>
 <script src="viewstate.js"></script>
</body>
</html>