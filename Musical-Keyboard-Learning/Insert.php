<?php
$conn = mysqli_connect("localhost","root","","piano");
if(isset($_POST['submit']))
{
	$Name = mysqli_real_escape_string($conn,$_POST['Sname']);
	$Email = mysqli_real_escape_string($conn,$_POST['Semail']);
	$Ph_no = mysqli_real_escape_string($conn,$_POST['phone']);
	$subject = mysqli_real_escape_string($conn,$_POST['subject']);
	$msg = mysqli_real_escape_string($conn,$_POST['message']);
	$last_row = mysqli_insert_id($conn);
    echo "posted";
	$insert = mysqli_query($conn,"INSERT INTO contact(Id,Name,Email,Phone_Number,Subject,Message)VALUES('$last_row','$Name','$Email','$Ph_no','$subject','$msg')");
     
	if(mysqli_error($conn)) {
    echo mysqli_error($conn);
     }
  header('location:Contact.html');
}
mysqli_close($conn);
?>