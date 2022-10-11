const get_api_res_btn = document.getElementById('get_api_res_btn');
const api_result = document.getElementById('api_result');

get_api_res_btn.addEventListener('click', getAPI);

let endPoint = 'http://shibe.online/api/shibes';


    function getAPI(){
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        api_result.innerHTML= "<img src=" + data.img_path + " width='300' height='320'>";
    });
} 