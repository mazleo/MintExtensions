// Calculates Spending balance from between paychecks on transactions page of Mint.com

javascript:
	var line = prompt("Which transaction line would you like to start? Please enter a number between 1 - 50.") - 1;
	while(isNan(line) || line < 1 || line > 50) {
		line = prompt("Please enter a valid number. Which transaction line would you like to start?") - 1;
	}
	var cat = document.getElementsByClassName("cat");
	var value = document.getElementsByClassName("money");
	var i = 0 + line;
	var m = 2 + line;
	var c = 1 + line;
	var temp = "";
	var total = 0;
	while(cat[i].innerHTML != "Paycheck") {
		if (cat[i].innerHTML != "Credit Card Pay…" && cat[i].innerHTML != "Transfer" && cat[i].innerHTML != "Transfer") {
			temp = Number(value[m].innerHTML.substring(2));
			console.log(document.getElementsByClassName("description")[c].getElementsByTagName("span")[0].innerHTML + ": $" + temp);
			total += temp;
		}
		i++;
		m++;
		c++;
	}
	console.log();
	console.log("TOTAL = " + total);
	alert("Total = " + total);



javascript:
	var w = window.open("", "Spending Costs", "channelmode=yes, directories=no, left=400, top=200, location=no, menubar=no, resizable=no, scrollbars=yes, status=no, toolbar=no, width=500, height=500");
	w.focus();

	var javascript = "javascript: document.getElementsByTagName('body').innerHTML = '<table></table>';";

	javascript = javascript.substring(0, 50);

	w.alert(javascript);