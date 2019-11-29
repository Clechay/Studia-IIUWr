var el = null;

function deleteUser (){
	console.log(el)
	console.log($(el))
	console.log($(el).parent());

	const row = $(el).parent();
	row.remove();
}


$(function () {
	var deleteDialog = $("#dialog-confirm").dialog({
		autoOpen: false,
		resizable: false,
		height: "auto",
		width: 400,
		modal: true,
		buttons: {
			"Delete user": function () {
				deleteUser();
				$(this).dialog("close");
			},
			Cancel: function () {
				$(this).dialog("close");
			}
		}
	});
	function tryDelete(el2d) {
		el = el2d;
		deleteDialog.dialog("open")
	}
	var dialog, form,
		name = $("#firstname"),
		fullname = $("#fullname"),
		city = $("#city"),
		zip = $("#zip"),
		birthdate = $("#birthdate"),
		allFields = $([]).add(name, fullname, city, zip, birthdate);
	console.log(name, fullname, city, zip, birthdate);
	function addUser() {
		$("#users tbody").append(`
		<tr>
			<td>${name.val()}</td>
			<td>${fullname.val()}</td>
			<td>${city.val()}</td>
			<td>${zip.val()}</td>
			<td>${birthdate.val()}</td>
			<td class="delete">Delete</td>
		</tr>
		`);
		$("#users tbody").children().last().children().last().click(function () {
			tryDelete(this);
		})
		dialog.dialog("close");
	}

	dialog = $("#dialog-form").dialog({
		autoOpen: false,
		height: 400,
		width: 350,
		modal: true,
		buttons: {
			"Create an account": addUser,
			Cancel: function () {
				dialog.dialog("close");
			}
		},
		close: function () {
			form[0].reset();
			allFields.removeClass("ui-state-error");
		}
	});

	form = dialog.find("form").on("submit", function (event) {
		event.preventDefault();
		addUser();
	});

	$("#create-user").button().on("click", function () {
		dialog.dialog("open");
		$("#birthdate").datepicker()
	});

	$(".delete").click(function () {
		tryDelete(this);
	})
});
