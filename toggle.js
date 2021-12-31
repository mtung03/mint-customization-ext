const BUDGET_LIST_ID = "spendingBudget-list-body"

function adjustBudget(list_item) {
	let real_dollars = list_item.getElementsByClassName("rollover-text")[0].children[3].textContent;
	let display_div = list_item.children[1].children[0];
	if (real_dollars && display_div.tagName === "DIV") {
		var spent = display_div.children[0];
		var newSpent = spent.cloneNode(true);
		newSpent.id = "new-spent";
		newSpent.children[1].textContent = "[" + real_dollars + "] ";
		spent.before(newSpent);
	}
}

let list = document.getElementById(BUDGET_LIST_ID);

for (let i = 0; i < list.children.length; i++) {
	adjustBudget(list.children[i])
}