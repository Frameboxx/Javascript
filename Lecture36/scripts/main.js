$(function(){
	// Date picker
	$("input[name='reg_date']").datepicker({
		showButtonPanel:true,
		numberOfMonths: 2,
		dateFormat:'DD, dd-mm-yy',
		minDate:0,
		maxDate: "+1M +5D"
	});

	// Menu
	$(".myMenu").menu();

	// Buttons
	$("#send").button({
		icons: {
			primary: "ui-icon-mail-closed"
		}
	}).click(function(){
		alert('Mail Sent !')
	});

	// Radio Buttons
	$("#food_options").buttonset();
	
	$(document).on("click", "input[name='food_options']", function(){
		var getVal = $(this).val();
		//$("body").css("backgroundColor", getVal);
		console.log(getVal);
	});

	// Modals


	$("#notify-all").dialog({
		autoOpen:false,
		height:200,
		width:300,
		buttons: {
			"Yes" : function(){
				console.log('I will NOTIFY all users !');
				$(this).dialog('close');
			},
			"No" : function(){
				console.log('No I will NOT NOTIFY anyone !');
				$(this).dialog('close');
			}
		}
	})

	$("#showModal").button().click(function(){
		$("#notify-all").dialog('open');
	});

	// Sliders
	$("#volume").slider({
		orientation: 'horizontal',
		range:true,
		min:0,
		max:100,
		values:[10,40],
		slide: function(e, ui){
			$("#vol_out").html(ui.values[0] + "-" + ui.values[1]);
		},
		change:function(e, ui){
			
		}
	});

	// Spinner
	$("#spinvalue").spinner({
		spin:function(e, ui){
			$("#spinout").html(ui.value);
		},
		change:function(e, ui){
			$("#spinout").html($(this).val())
		}
	});

	// Tab
	$(".tabpanel").tabs({
		collapsible:true,
		hide: { effect: "fold", duration: 400 },
		show: { effect: "fold", duration: 200 }
	});
})