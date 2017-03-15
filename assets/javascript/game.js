window.onload = function(){
	var attacker
	var defender
  var attackerName=""
  var defenderName=""
  var attackButton = document.getElementById("attack")
  var resetButton = document.getElementById("reset")
	var l1=document.getElementById("l1")
	var l2=document.getElementById("l2")

	var l3=document.getElementById("l3")
   var f1= document.querySelector(".f1")
   var f2= document.querySelector(".f2")
   var f3= document.querySelector(".f3")
   var f4= document.querySelector(".f4")

   resetButton.onclick=function(){
    window.location.assign("index.html")
   }

   attackButton.onclick=function(){
    var attackerHp = parseInt(attacker.querySelector(".hp").textContent)
    var defenderHp = parseInt(defender.querySelector(".hp").textContent)
    var attHp = Math.floor(Math.random() * 5 + 1)
    var defHp = Math.floor(Math.random() * 5 + 1)
    defenderHp -= defHp
    defender.querySelector(".hp").textContent = defenderHp
    var damageTotal1 = document.getElementById("damageTotal1")
    var damageTotal2 = document.getElementById("damageTotal2")
    damageTotal1.innerHTML = attackerName + " attacked " + defenderName + "for " + attHp + " HP"
    damageTotal2.innerHTML = defenderName + " attacked " + attackerName + "for " + defHp + " HP"

    if (defenderHp <= 0){
      defender.querySelector(".hp").textContent = "0"
      nextDefender()
      return
    }
    attackerHp -= attHp
    attacker.querySelector(".hp").textContent = attackerHp
      if (attackerHp <= 0){
        attacker.querySelector(".hp").textContent = "0"
      gameOver()
      return
    }
    

   }

   function nextDefender(){

   l3.removeChild(defender)
   attacker.querySelector(".hp").innerHTML = "100"
   var remaining = l2.querySelector(".fighter")
   if (!remaining){
    gameWon()
   }
   }

   function gameOver(){
    $("#message").html("YOU LOST!")
    attackButton.setAttribute("disabled" , "disabled")
   }
   function gameWon(){
    $("#message").html("YOU WON!")
    attackButton.setAttribute("disabled" , "disabled")

   }
   f1.onclick=function(){
    if (!attacker){
   	attacker=f1
    removeChoices()
   }
   	else {
      defender=f1
      moveFighter(f1)
    }
   	
   }
   f2.onclick=function(){
    if (!attacker){
     attacker=f2
     removeChoices()
   }
     else{
      defender=f2
       moveFighter(f2)
     }
   }
   f3.onclick=function(){
    if (!attacker){
     attacker=f3
     removeChoices()
   }
     else{
     defender=f3
      moveFighter(f3)
   }
   }
   f4.onclick=function(){
    if (!attacker){
     attacker=f4
     removeChoices()
   }
     else{
      defender=f4
       moveFighter(f4)
   }
     
   }

   function moveFighter(fighter){
    l2.removeChild(fighter)
    l3.appendChild(fighter)
    defenderName=defender.querySelector(".fighterName").textContent
   }
   function removeChoices(){
    attackerName=attacker.querySelector(".fighterName").textContent
   	var choices=[f1, f2, f3, f4]
   	choices.forEach(function(fighter){
   		if(fighter != attacker){
   			l1.removeChild(fighter)
   			l2.appendChild(fighter)
   		}

   	})
   }
   		}

   









