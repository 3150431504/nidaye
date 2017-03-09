$.ajax({
	type:'get',
	url:'http://api.k780.com:88/?app=weather.future&weaid=1&&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json',
	dataType:'jsonp',
	jsonp:'jsoncallback',
	async:true,
	success:function(data){
		$('header .right').click(function(){
			var txt = '';
			txt = $('header input').val();
			//console.log(txt);
			console.log(data);
			var data_list = '';
			$.each(data.result, function(k,v) {
				data_list+='</h1><p><i>'+v.days+'</i><span><img src="'+v.weather_icon+'"/><a>'+v.winp+'</a></span><b>'+v.temperature+'</b></p>';
				$('.container').html(data_list);
			});
		})
	}
})
