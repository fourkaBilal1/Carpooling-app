<?php 
	if(isset($_POST) && !empty($_POST)){
		$username = $_POST['username'];
		$password = $_POST['password'];
		echo username+"   "+password;
	}

 ?>