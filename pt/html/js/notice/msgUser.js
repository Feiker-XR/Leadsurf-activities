$(document).ready(function(){
var start = $('#J-time-start'),
end = $('#J-time-end');
start.focus(function(){
	(new phoenix.DatePicker({input:start})).show();
});
end.focus(function(){
	(new phoenix.DatePicker({input:end})).show();
});


$('#J-button-submit').click(function(){
	$('#J-form').submit();
});

var Tip = new phoenix.Tip.getInstance();
$('#J-data-table').on('click', '.tip-detail', function(e){
	var dom = $(this);
	Tip.setText(dom.parent().find('.tip-hidden').text());
	Tip.show(dom.width()*-1-10, dom.height()*-1-20, dom.parent());
}).on('mouseout', '.tip-detail', function(){
	Tip.hide();
});

	
})