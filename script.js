function validateForm() {
		var x = document.forms["feedback"]["firstname"].value;
		if (x == "") {
			alert("Name must be filled out");
        return false;
			}
		}