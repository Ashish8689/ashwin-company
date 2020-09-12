<?php
 
 $username="root";
 $password="";
 $server="localhost";
 $db="ashwin";

 $con=mysqli_connect($server,$username,$password,$db);

if($con){

	$name = $_POST['name'];
	$cname = $_POST['cname'];
	$email= $_POST['email'];
	$mobile=$_POST['mobile'];
	$service = $_POST['class'];
	$details=$_POST['details'];

	$insertQuery = "insert into service(name,cname,email,mobile,service,details) values('$name','$cname','$email','$mobile','$service','$details')";

	$run = mysqli_query($con,$insertQuery);

	if($run){
		?>
		<script>
		  alert('data inserted');
		</script>
		<?php
		header('location:../contact.html');
	}
	else{
		?>
		<script>
			alert('data not send retry!!!');
		</script>
		<?php
	}
}

	else{
		?>
		<script>
			alert('No connection');
		</script>
		<?php
	}	

?>