function gettext(){
	var val;
	var val1;
	val1=document.getElementById("taken1").value;
	val=document.getElementById("taken").value;
	if(val=="pragathi"&&val1=="pragathi")
		// href="#home";
		$.mobile.changePage("#home","fade");
	else
		alert('wrong password');
}