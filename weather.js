// require('./weather.css');
var city;
var Result;

function formatterDateTime() {
    var date = new Date()
    var month = date.getMonth() + 1
    var datetime = date.getFullYear()
    + ""// "年"
    + (month >= 10 ? month : "0"+ month)
    + ""// "月"
    + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
    + ""
    + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
    + ""
    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    + ""
    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
    return datetime;
}

jQuery(document).ready(function() {
    // getData();
    // getData1();
    getData2();
    $('#text').on('keydown', function(e){
      if(e.keyCode == 13){
        city = $(this).val();
        // getData(city);
        // getData1(city);
        getData2(city);
      }
    })

    $(function(){
            $('#btn').click(function(){
                city = $("#text").val();
                // getData(city);
                // getData1(city);
                getData2(city);
            });
    })

    // 申请15日天气预报（已做完）
    // function getData(city) {
    //   var city = city ? city : "北京";
    //     $.ajax({
    //         type: 'post',
    //         url: 'http://route.showapi.com/9-9',
    //         async: false,
    //         dataType: 'json',
    //         data: {
    //             "showapi_timestamp": formatterDateTime(),
    //             "showapi_appid": "310986",
    //             "showapi_sign": "98dbf885f9854d30819094d8d6217808",
    //             "area":city
    //         },
    //         error: function(XmlHttpRequest, textStatus, errorThrown) {
    //             alert("操作失败!");
    //         },
    //         success: function(result) {
    //             var City = document.querySelector('#City');
    //             City.innerText = city;
    //             var data = result.showapi_res_body.dayList;
    //             var Time = document.querySelector('#Time');
    //             Time.innerText = data[0].daytime[4] + data[0].daytime[5] + ' 月 ' + data[0].daytime[6] + data[0].daytime[7] + ' 日 ';

    //             var day_weather = document.querySelector('#day_weather');
    //             day_weather.innerText = data[0].day_weather;

    //             var day_pic = document.querySelector('#day_pic');
    //             var day_weather_code = data[0].day_weather_code;
    //             chooseImg(day_weather_code, day_pic);
    //             day_pic.title = data[0].day_weather;

    //             var day_temperature = document.querySelector('#day_temperature');
    //             day_temperature.innerText = data[0].day_air_temperature + '℃';

    //             var day_wind_direction = document.querySelector('#day_wind_direction');
    //             day_wind_direction.innerText = data[0].day_wind_direction;

    //             var day_wind_power = document.querySelector('#day_wind_power');
    //             day_wind_power.innerText = data[0].day_wind_power;

    //             var night_weather = document.querySelector('#night_weather');
    //             night_weather.innerText = data[0].night_weather;

    //             var night_pic = document.querySelector('#night_pic');
    //             var night_weather_code = data[0].night_weather_code;
    //             chooseImg(night_weather_code, night_pic);
    //             night_pic.title = data[0].night_weather;

    //             var night_temperature = document.querySelector('#night_temperature');
    //             night_temperature.innerText = data[0].night_air_temperature + '℃';

    //             var night_wind_direction = document.querySelector('#night_wind_direction');
    //             night_wind_direction.innerText = data[0].night_wind_direction;

    //             var night_wind_power = document.querySelector('#night_wind_power');
    //             night_wind_power.innerText = data[0].night_wind_power;

    //             text1 = data[0].day_weather;
    //             text2 = data[0].night_weather;

    //             // 未来七日天气预报图像
    //             var canvas = document.getElementById('myCanvas');
    //             var canvasTop = canvas.offsetTop;
    //             var ctx = canvas.getContext('2d');
    //             canvas.height = canvas.height;
    //             var getTemperature_day = [];
    //             var getTemperature_night = [];
    //             for(var i = 0; i < 7; i++){
    //                 // 白天信息录入
    //                 var getdayWeather = document.querySelector('#dayWeather' + i);
    //                 getdayWeather.innerText = data[i].day_weather;

    //                 var getdayWeatherPic = document.querySelector('#dayWeatherPic' + i);
    //                 var getdaycode = data[i].day_weather_code;
    //                 chooseImg(getdaycode, getdayWeatherPic);
    //                 day_pic.title = data[i].day_weather;

    //                 var getdayTemp = document.querySelector('#dayTemp' + i);
    //                 getdayTemp.innerText = data[i].day_air_temperature + '℃';

    //                 // 夜间信息录入
    //                 var getnightWeather = document.querySelector('#nightWeather' + i);
    //                 getnightWeather.innerText = data[i].night_weather;

    //                 var getnightWeatherPic = document.querySelector('#nightWeatherPic' + i);
    //                 var getnightcode = data[i].night_weather_code;
    //                 chooseImg(getnightcode, getnightWeatherPic);
    //                 day_pic.title = data[i].night_weather;

    //                 var getnightTemp = document.querySelector('#nightTemp' + i);
    //                 getnightTemp.innerText = data[i].night_air_temperature + '℃';
    //                 if(i > 2){
    //                     var getDate = document.querySelector('#Date' + i);
    //                     getDate.innerText = data[i].daytime[4] + data[i].daytime[5] + '月' + data[i].daytime[6] + data[i].daytime[7] + '日';
    //                 }
    //                 getTemperature_day[i] = Number(data[i].day_air_temperature);
    //                 getTemperature_night[i] = Number(data[i].night_air_temperature);
    //             }
    //             var picHeight = 150;
    //             var maxTemp_day = maxNum(getTemperature_day);
    //             var minTemp_night = minNum(getTemperature_night);
    //             var maxRange = maxTemp_day - minTemp_night;

    //             function maxNum(arr) {
    //                 var maxNum = 0;
    //                 if(arr.length) {
    //                     for(var i = 0, len = arr.length; i < len; i++){
    //                         if(i == 0) {
    //                             maxNum = arr[0];
    //                         }else if(maxNum < arr[i]) {
    //                             maxNum = arr[i];
    //                         }
    //                     }
    //                 }
    //                 return maxNum;
    //             }
    //             function minNum(arr) {
    //                 var minNum = 0;
    //                 if(arr.length) {
    //                     for(var i = 0, len = arr.length; i < len; i++) {
    //                         if(i == 0){
    //                             minNum = arr[0];
    //                         }else if(minNum > arr[i]) {
    //                             minNum = arr[i];
    //                         }
    //                     }
    //                 }
    //                 return minNum;
    //             }
    //             ctx.strokeStyle = "#FF8000";
    //             ctx.lineWidth = 3;
    //             (function drawHighTemp(temps) {
    //                 var drawX = 0, drawY = 0;
    //                 var distance = Math.floor(picHeight / maxRange);
    //                 for(var i = 0, len = temps.length; i < len; i++) {
    //                     drawX = i * 106 + 53;
    //                     drawY = (maxTemp_day - temps[i]) * distance;
    //                     document.getElementById('dayTemp' + i).style.top = (canvasTop + drawY - 25) + 'px';
    //                     if(i == 0){
    //                         ctx.moveTo(drawX, drawY);
    //                     }else{
    //                         ctx.lineTo(drawX, drawY);
    //                     }
    //                 }
    //                 ctx.stroke();
    //             })(getTemperature_day);
    //             (function drawLowTemp(temps) {
    //                 var drawX = 0, drawY = 0;
    //                 var distance = Math.floor(picHeight / maxRange);
    //                 for(var i = 0, len = temps.length; i < len; i++) {
    //                     drawX = i * 106 + 53;
    //                     drawY = picHeight - ((temps[i]- minTemp_night) * distance);
    //                     document.getElementById('nightTemp' + i).style.top = (canvasTop + drawY + 10) + "px";
    //                     if(i == 0){
    //                         ctx.moveTo(drawX, drawY);
    //                     }else{
    //                         ctx.lineTo(drawX, drawY);
    //                     }
    //                 }
    //                 ctx.stroke();
    //             })(getTemperature_night);
    //         }
    //     });
    // }

    //申请当日24小时天气预报
    // function getData1(city) {
    //   var city = city ? city : "北京";
    //     $.ajax({
    //         type: 'post',
    //         url: 'http://route.showapi.com/9-8',
    //         dataType: 'json',
    //         data: {
    //             "showapi_timestamp": formatterDateTime(),
    //             "showapi_appid": "310986",
    //             "showapi_sign": "98dbf885f9854d30819094d8d6217808",
    //             "area":city
    //         },
    //         error: function(XmlHttpRequest, textStatus, errorThrown) {
    //             alert("操作失败!");
    //         },
    //         success: function(result) {
    //             var data = result.showapi_res_body.hourList;
    //             var div = document.querySelector('#hourweather')
    //             var olend = document.querySelector('#hour_weather');
    //             olend.remove();
    //             var ol = document.createElement('ol');
    //             ol.setAttribute("id", 'hour_weather');
    //             div.appendChild(ol);
    //             for(var i = 0; i < 24; i++){
    //                 var li = document.createElement('li');
    //                 li.className = 'item';
    //                 ol.appendChild(li);

    //                 var p1 = document.createElement('p');
    //                 p1.className = 'hour_time';
    //                 li.appendChild(p1);
    //                 p1.innerText = data[i].time[8] + data[i].time[9] + ':' + data[i].time[10] + data[i].time[11];

    //                 var hour_img = document.createElement('img');
    //                 var hour_code = data[i].weather_code;
    //                 hour_img.className = 'hour_img';
    //                 li.appendChild(hour_img);
    //                 chooseImg(hour_code, hour_img);
    //                 hour_img.title = data[i].weather;

    //                 var p2 = document.createElement('p');
    //                 p2.className = 'hour_Temp';
    //                 li.appendChild(p2);
    //                 p2.innerText = data[i].temperature + '℃';
    //             }
    //         }
    //     });
    // }


    function getData2(city){
        var city = city ? city : "北京";
        $.ajax({
            type:'get',
            url:'https://api.jisuapi.com/weather/query',
            data:{
                appkey:"53abc9c9f27838f5",
                city:city
            },
            async: false,
            dataType:'jsonp',
            jsonp:'callback',
            success: function(josn) {
                var data = josn.result;
                Result = josn.result;
                var City = document.querySelector('#City');
                City.innerText = Result.city;

                var add = document.querySelector('#add');
                var favorite = document.querySelector('#favorite');
                var lis = favorite.getElementsByTagName('li');
                add.innerText = '[添加收藏]';

                for(var i = 0; i < lis.length; i++){
                    if(lis[i].childNodes[0].innerText == Result.city){
                        add.innerText = '[已经收藏]';
                        break;
                    }
                }

                for(var i = 1; i < 7; i++){
                    var get_in_iv = document.querySelector('#living_in_iv' + i);
                    get_in_iv.innerText = data.index[i].iname + ' ' + data.index[i].ivalue;

                    var get_in_iv = document.querySelector('#living_detail' + i);
                    get_in_iv.innerText = data.index[i].detail;

                }
            }
        })
    }
});

// 选择图片
function chooseImg(code, index) {
    switch (code) {
        case '00':
            index.src = 'img/weather/00.png';
            break;
        case '01':
            index.src = 'img/weather/01.png';
            break;
        case '02':
            index.src = 'img/weather/02.png';
            break;
        case '03':
            index.src = 'img/weather/03.png';
            break;
        case '04':
            index.src = 'img/weather/04.png';
            break;
        case '05':
            index.src = 'img/weather/05.png';
            break;
        case '06':
            index.src = 'img/weather/06.png';
            break;
        case '07':
            index.src = 'img/weather/07.png';
            break;
        case '08':
            index.src = 'img/weather/08.png';
            break;
        case '09':
            index.src = 'img/weather/09.png';
            break;
        case '10':
            index.src = 'img/weather/10.png';
            break;
        case '11':
            index.src = 'img/weather/11.png';
            break;
        case '12':
            index.src = 'img/weather/12.png';
            break;
        case '13':
            index.src = 'img/weather/13.png';
            break;
        case '14':
            index.src = 'img/weather/14.png';
            break;
        case '15':
            index.src = 'img/weather/15.png';
            break;
        case '16':
            index.src = 'img/weather/16.png';
            break;
        case '17':
            index.src = 'img/weather/17.png';
            break;
        case '18':
            index.src = 'img/weather/18.png';
            break;
        case '19':
            index.src = 'img/weather/19.png';
            break;
        case '20':
            index.src = 'img/weather/20.png';
            break;
        case '21':
            index.src = 'img/weather/21.png';
            break;
        case '22':
            index.src = 'img/weather/22.png';
            break;
        case '23':
            index.src = 'img/weather/23.png';
            break;
        case '24':
            index.src = 'img/weather/24.png';
            break;
        case '25':
            index.src = 'img/weather/25.png';
            break;
        case '26':
            index.src = 'img/weather/26.png';
            break;
        case '27':
            index.src = 'img/weather/27.png';
            break;
        case '28':
            index.src = 'img/weather/28.png';
            break;
        case '29':
            index.src = 'img/weather/29.png';
            break;
        case '30':
            index.src = 'img/weather/30.png';
            break;
        case '31':
            index.src = 'img/weather/31.png';
            break;
    }
}

window.addEventListener('load', function(){
    // 动画函数
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetTop) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(obj.offsetTop == target) {
                //停止动画
                clearInterval(obj.timer);

                // 回调函数存在，则执行回调函数
                callback && callback();
            }
            obj.style.top = target + 'px';
        }, 30)
    }
    
    // 小贴士
    var sub1 = document.querySelector('#sub' + 1);
    var detail1 = document.querySelector('#detail' + 1);
    sub1.addEventListener('mouseenter', function() {
        animate(detail1, -157);
    })
    detail1.addEventListener('mouseleave', function() {
        animate(detail1, 0);
    })

    var sub2 = document.querySelector('#sub' + 2);
    var detail2 = document.querySelector('#detail' + 2);
    sub2.addEventListener('mouseenter', function() {
        animate(detail2, -157);
    })
    detail2.addEventListener('mouseleave', function() {
        animate(detail2, 0);
    })

    var sub3 = document.querySelector('#sub' + 3);
    var detail3 = document.querySelector('#detail' + 3);
    sub3.addEventListener('mouseenter', function() {
        animate(detail3, -157);
    })
    detail3.addEventListener('mouseleave', function() {
        animate(detail3, 0);
    })

    var sub4 = document.querySelector('#sub' + 4);
    var detail4 = document.querySelector('#detail' + 4);
    sub4.addEventListener('mouseenter', function() {
        animate(detail4, -157);
    })
    detail4.addEventListener('mouseleave', function() {
        animate(detail4, 0);
    })

    var sub5 = document.querySelector('#sub' + 5);
    var detail5 = document.querySelector('#detail' + 5);
    sub5.addEventListener('mouseenter', function() {
        animate(detail5, -157);
    })
    detail5.addEventListener('mouseleave', function() {
        animate(detail5, 0);
    })

    var sub6 = document.querySelector('#sub' + 6);
    var detail6 = document.querySelector('#detail' + 6);
    sub6.addEventListener('mouseenter', function() {
        animate(detail6, -157);
    })
    detail6.addEventListener('mouseleave', function() {
        animate(detail6, 0);
    })

    // 收藏夹
    var add = document.querySelector('#add');
    var favorite = document.querySelector('#favorite');
    var text = document.querySelector('#text');

    add.addEventListener('click', function() {
        if(favorite.childElementCount > 4){
            alert('最多收藏5个天气');
            return;
        }
        if(add.innerText === '[添加收藏]'){
            var li = document.createElement('li');
            favorite.appendChild(li);
            li.className = 'fav';

            var fav_city = document.createElement('span');
            li.appendChild(fav_city);
            fav_city.className = 'fav_city';
            fav_city.innerText = Result.city;

            var fav_temphigh = document.createElement('span');
            li.appendChild(fav_temphigh);
            fav_temphigh.className = 'fav_temphigh';
            fav_temphigh.innerText = Result.daily[0].day.temphigh + '℃';

            var oo = document.createElement('span');
            li.appendChild(oo);
            oo.className = 'oo';
            oo.innerText = '/';

            var fav_templow = document.createElement('span');
            li.appendChild(fav_templow);
            fav_templow.className = 'fav_templow';
            fav_templow.innerText = Result.daily[0].night.templow + '℃';

            var deleted = document.createElement('a');
            li.appendChild(deleted);
            deleted.className = 'deleted';
            deleted.innerText = '删除';
            deleted.addEventListener('click', function() {
                deleted.parentNode.parentNode.removeChild(deleted.parentNode);
                if(deleted.parentNode.childNodes[0].innerText == Result.city){
                    add.innerText = '[添加收藏]';
                }
            })

            add.innerText = '[已经收藏]';

        }else{
            alert('该城市已经收藏！');
        }
    })

    text.addEventListener('mouseenter', function() {
        favorite.style.display = 'block';
    })

    favorite.addEventListener('mouseenter', function() {
        favorite.style.display = 'block';
    })

    text.addEventListener('mouseleave', function() {
        favorite.style.display = 'none';
    })

    favorite.addEventListener('mouseleave', function() {
        favorite.style.display = 'none';
    })
    
    var lis = favorite.getElementsByTagName('li');
})


// window.addEventListener('load', function(){
//     var ol = document.querySelector('#hour_weather');
//     var left = document.querySelector('#left');
//     var right = document.querySelector('#right');
//     var screenWidth = ol.clientWidth;
//     var flag = true;
//     var num = 0;

//     left.addEventListener('click', function() {
//         if(flag) {
//             //关闭节流阀
//             flag = false;
//             num--;
//             animate(ol, 1100, function() {
//                 // 动画完毕，打开节流阀
//                 flag = true;
//             });
//         }
//     })

//     // 点击左侧按钮，图片滚动一张
//     right.addEventListener('click', function() {
//         if(flag) {
//             //关闭节流阀
//             flag = false;
//             num++;
//             animate(ol, -2000, function() {
//                 // 动画完毕，打开节流阀
//                 flag = true;
//             });
//         }
//     })
// })