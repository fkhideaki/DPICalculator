$(document).ready(function(){
	$("#GD_EX").click(function()
	{
		var s = $("#GD_SZ").val();
		var p = $("#GD_PX").val();
		var vs = parseFloat(s);
		var vp = parseFloat(p);
		if (vs <= 0)
		{
			$("#GD_DP").val("----");
		}
		else
		{
			var dp = 25.4 * vp / vs;
			$("#GD_DP").val(dp.toFixed(2));
		}
	});
	$("#GS_EX").click(function()
	{
		var p = $("#GS_PX").val();
		var d = $("#GS_DP").val();
		var vp = parseFloat(p);
		var vd = parseFloat(d);
		if (vd <= 0)
		{
			$("#GS_SZ").val("----");
		}
		else
		{
			var sz = 25.4 * vp / vd;
			$("#GS_SZ").val(sz.toFixed(2));
		}
	});
	$("#GP_EX").click(function()
	{
		var d = $("#GP_DP").val();
		var s = $("#GP_SZ").val();
		var vd = parseFloat(d);
		var vs = parseFloat(s);
		var px = vd * vs / 25.4;
		$("#GP_PX").val(px.toFixed(2));
	});
});
