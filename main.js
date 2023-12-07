function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	four.value = four.value.replace(/\s+/g, "");
	five.value = five.value.replace(/\s+/g, "");
	six.value = six.value.replace(/\s+/g, "");
	
	
	if (one.value == "voidsetup()"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：void setup()";
	}

	if (two.value == "voiddraw()"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：void draw()";
	}

	if (three.value == "floattargetX=mouseX;"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：float targetX = mouseX;";
	}

	if (four.value == "floattargetY=mouseY;"){
		text4.innerHTML = "正解";
	}else{
		text4.innerHTML = "不正解　解答：float targetY = mouseY;";
	}

	if (five.value == "floatweight=dist(x,y,px,py);"){
		text5.innerHTML = "正解";
	}else{
		text5.innerHTML = "不正解　解答：float weight = dist(x, y, px, py);";
	}

	if (six.value == "strokeWeight(weight);"){
		text6.innerHTML = "正解";
	}else{
		text6.innerHTML = "不正解　解答：strokeWeight(weight);";
	}

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");

//解答欄4
var textBox4 = document.getElementById("four");
const text4 = document.getElementById("text4");

//解答欄5
var textBox5 = document.getElementById("five");
const text5 = document.getElementById("text5");

//解答欄6
var textBox6 = document.getElementById("six");
const text6 = document.getElementById("text6");

let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);