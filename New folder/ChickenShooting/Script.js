var player = document.getElementById("player");
var bullets = document.getElementById("bullets");
var chickens = document.getElementById("chickens");
var score = 0;

document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
	if (event.keyCode == 37) {
		var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
		if (left > 0) {
			player.style.left = left - 10 + "px";
		}
	}
	if (event.keyCode == 39) {
		var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
		if (left < 750) {
			player.style.left = left + 10 + "px";
		}
	}
	if (event.keyCode == 32) {
		fireBullet();
	}
}

function fireBullet() {
	var bullet = document.createElement("div");
	bullet.className = "bullet";
	bullets.appendChild(bullet);
	var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
	bullet.style.left = left + 23 + "px";
	var bulletInterval = setInterval(moveBullet, 10);
	
	function moveBullet() {
		var top = parseInt(window.getComputedStyle(bullet).getPropertyValue("top"));
		if (top < -20) {
			clearInterval(bulletInterval);
			bullets.removeChild(bullet);
		}
		else {
			bullet.style.top = top - 10 + "px";
			checkCollision();
		}
	}
}

function createChicken() {
	var chicken = document.createElement("div");
	chicken.className = "chicken";
	chickens.appendChild(chicken);
	var rand = Math.floor(Math.random() * 750);
	chicken.style.left = rand + "px";
	var chickenInterval = setInterval(moveChicken, 100);
	
	function moveChicken() {
		var top = parseInt(window.getComputedStyle(chicken).getPropertyValue("top"));
		if (top > 550) {
			clearInterval(chickenInterval);
			chickens.removeChild(chicken);
		}
		else {
			chicken.style.top = top + 10 + "px";
			checkCollision();
		}
	}
}

function checkCollision() {
	var bulletsChildren = bullets.children;
	for (var i = 0; i < bulletsChildren.length; i++) {
		var bullet = bulletsChildren[i];
		var bulletTop = parseInt(window.getComputedStyle(bullet).getPropertyValue("top"));
		var bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
		var chickenChildren = chickens.children;
		for (var j = 0; j < chickenChildren.length; j++) {
			var chicken = chickenChildren[j];
			var chickenTop = parseInt(window.getComputedStyle(chicken).getPropertyValue("top"));
			var chickenLeft = parseInt(window.getComputedStyle(chicken).getPropertyValue("left"));
			if (bulletLeft > chickenLeft && bulletLeft < chickenLeft + 50 && bulletTop < chickenTop + 50 && bulletTop > chickenTop) {
				score++;
				document.getElementById("score").innerHTML = "Score: " + score;
				chickens.removeChild(chicken);
				bullets.removeChild(bullet);
			}
		}
	}
}

setInterval(createChicken, 1000);