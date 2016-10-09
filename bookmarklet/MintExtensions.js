javascript:
	
	/* Asks user which transaction line to start with */
	var line = prompt("Enter a number between 1 - 50. Transaction line: ");
	while(isNaN(line) || line < 1 || line > 50) {
		line = prompt("Invalid input. Enter a number between 1 - 50. Transaction line: ");
	}
	line--;

	/* Retrieves document objects, including transaction description, category, and cost */
	var cat = document.getElementsByClassName("cat");
	var value = document.getElementsByClassName("money");
	var i = 0 + line;
	var m = 2 + line;
	var c = 1 + line;
	var temp = "";
	var n = 0;
	var total = 0;

	/* Initializes JS to change new window's document body and style. This will generate a table for all the information to print out. */
	var jsFront = "javascript: document.getElementsByTagName('body').innerHTML = '<style>table {text-align: left; width: 100%; border-collapse: collapse;} tr:last-of-type {border: none;} tr {border-bottom: thin solid #ccc;} tr td:nth-of-type(2), th:nth-of-type(2) {text-align: right;} thead {text-transform: uppercase; border-bottom: thin solid #ccc;} td {padding: 6px 0 0 0;}</style><table><thead><th>Transaction</th><th>Cost</th></thead><tbody>";
	var jsMid = "";
	var jsEnd = "</tbody></table>';";

	/* Extracts information one by one, until a transaction within the "Paycheck" category is selected */
	while(cat[i].innerHTML != "Paycheck") {
		if (cat[i].innerHTML != "Credit Card Pay…" && cat[i].innerHTML != "Transfer" && cat[i].innerHTML != "Transfer") {
			n++;
			temp = Number(value[m].innerHTML.substring(2));
			jsMid += "<tr><td>" + n + ". " + document.getElementsByClassName("description")[c].getElementsByTagName("span")[0].innerHTML + "</td><td>$" + temp.toFixed(2) + "</td></tr>";
			total += temp;
		}
		i++;
		m++;
		c++;
	}
	
	jsMid += "<tr><td><strong>TOTAL</strong></td><td><strong>$" + total.toFixed(2) + "</strong></td></tr>";
	var js = jsFront + jsMid + jsEnd;

	/* Opens a new window and prints out data */
	var w = window.open("", "Spending Costs", "channelmode=yes, directories=no, left=400, top=200, location=no, menubar=no, resizable=no, scrollbars=yes, status=no, toolbar=no, width=350, height=500");
	w.focus();
	w.location.replace(js);