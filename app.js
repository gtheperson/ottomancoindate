// javascript for islamic date converter for coins

//assign year variable to subitted year
var year;
var regnal;
var yearSum;
var westYear;

$(".year-submit").on("click", function() {
	year = $(".year").val();
	regnal = $(".regnal").val()
	if (regnal > 0) {
		--regnal;
	}
	yearSum = (Number(year) + Number(regnal));
	
	westYear = (((32 * yearSum) / 33) + 622).toFixed(0);
	
	$(".result").val(westYear);
});