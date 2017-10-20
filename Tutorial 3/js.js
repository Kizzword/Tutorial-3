var chatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace(":(", "<img class ='emoji' src='img/feelsbadman.png' />");
    chatStr = chatStr.replace("feelsbadman", "<img class ='emoji' src='img/feelsbadman.png' />");
    
    chatStr = chatStr.replace("whine", "<img class ='emoji' src='img/whine.png' />");
    chatStr = chatStr.replace(":)", "<img class ='icon' src='img/rofl.png' />");
    
    chatStr = chatStr.replace("haha", "<img class ='icon' src='img/lol.png' />");
    
    chatStr = chatStr.replace("nerd", "<img class ='icon' src='img/nerd.png' />");
    
    chatStr = chatStr.replace("love", "<img class ='icon' src='img/Heart.png' />");
    
    chatStr = chatStr.replace("umm", "<img class ='icon' src='img/think.png' />");
    
   
    chatStr = chatStr.replace("幹", "*");
    chatStr = chatStr.replace("12345678", "********");
    
    
    chatStr = chatStr.replace("emoji", "<div id='command'>Emoji list: whine, :), haha, nerd, love, umm");
}

/* p1Chat */
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";
    
    replaceEmojis()
}
/* p2Chat */
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    
    replaceEmojis()
}
/* chatDisplay */
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    if (chatNum == 1){
        ndiv.style.backgroundColor = "#AFA"
    }
    else if (chatNum == 2){
        ndiv.style.backgroundColor = "#AAF"
    }
    
    ndiv.style.padding = "10px";
    
    document.getElementById("chatDisplay").appendChild(ndiv);
}
/* Interactions */
document.getElementById("p1Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr();
        createChat(1);
    }
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr2();
        createChat(2);
    }
});
