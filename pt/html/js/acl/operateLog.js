$(document).ready(function(){
		var inputTimeStart = $('#timeStart'),
			inputTimeEnd = $('#timeEnd');

		inputTimeStart.click(function(){
			var Dt = new phoenix.DatePicker({input:this});
				Dt.show();
		});	
		inputTimeEnd.click(function(){
			var Dt = new phoenix.DatePicker({input:this});
				Dt.show();
		});	
		
		new phoenix.Input({el:'#J-search-username',defText:$('#J-hidden-account').val()});
		
		$('#J-search-ip').keyup(function(){
			this.value = this.value.replace(/[^?:(\.|\d)]/g, '');
		});
		
		
		$('#J-button-submit').click(function(){
			$('#J-form').submit();
		});
		
	})