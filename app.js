let hitPoints = 100;
let hitPoints2 = 100;
let userDmg = document.getElementById("userDmg")
let aiDmg = document.getElementById("aiDmg")
let damage;
let userHp = document.getElementById("userHp")
let aiHp = document.getElementById("aiHp")



function attack() {
  damage = Math.floor((Math.random()*9)+1);
  userDmg.innerHTML = `User Damage: ${damage}`
  hitPoints2 = (hitPoints2 - damage)
  aiHp.innerHTML = `AI Hitpoints: ${hitPoints2}`

  if(hitPoints2 <= 0) {
    alert("YOU HAVE SLAIN THE LORD FROM ANOTHER LAND!")
  } else {
    setTimeout(function defend() {
      damage = Math.floor((Math.random()*9)+1);
      aiDmg.innerHTML = `AI Damage: ${damage}`
      hitPoints = (hitPoints - damage)
      userHp.innerHTML = `User Hitpoints: ${hitPoints}`
      if(hitPoints <= 0) {
        alert("YOU ARE A GIANT PUSSY! YOU HAVE BEEN SLAIN!")
      }
    }, 1500)

  }
}
