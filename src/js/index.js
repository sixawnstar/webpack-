import "../css/index.css"
window.onload=function(){
	var btn=document.getElementById("btn")
	console.log(btn)
	btn.onclick=function(){
		console.log(123)
		window.open("https://www.baidu.com/")
	}

}
