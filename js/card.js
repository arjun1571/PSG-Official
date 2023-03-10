const playerObj1={
    name: "Lionel Messi",
    image: "https://images.psg.media/media/209026/card-season-22-23-messi.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",

}
const playerObj2={
    name: "Neymar jr",
    image: "https://images.psg.media/media/27051/card-season-22-23-neymar-temp.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75"
}
const playerObj3={
    name: "Kylian Mbappe",
    image: "https://images.psg.media/media/27048/card-season-22-23-mbappe.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75"
}
const playerObj4={
    name: "Keylor Navas",
    image: "https://images.psg.media/media/33317/card-season-22-23-navas.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75"
}
const playerObj5={
    name: "Sergio Ramos",
    image: "https://images.psg.media/media/207480/card-season-22-23-ramos.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75"
}
const playerObj6={
    name: "Marquinhos",
    image: "https://images.psg.media/media/27046/card-season-22-23-marquinhos.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75"
}

const playerArray = [playerObj1,playerObj2,playerObj3,playerObj4,playerObj5,playerObj6];

const playerNameArray =[];
const arr=[];


function displayCard(player){
    const cardSection = document.getElementById("card-detail");
    const playerString = JSON.stringify(player);
    const createDiv = document.createElement("div");
    createDiv.innerHTML=`
    <div class="card me-2 mb-3" style="width: 16rem;">
            <img src=${player.image} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${player.name}</h5>
            <p class="card-text"> </p>
            <button onclick='handlePlayer(${playerString})' class="btn-dis btn btn-primary">SELECT</button>
        </div>
    </div>
    
      `
    cardSection.appendChild(createDiv);
}

function displayPlayersArray(arr){
    for(let i=0; i<arr.length; i++){
        const element = arr[i];
        displayCard(element)
      }
}

displayPlayersArray(playerArray);

function handlePlayer(ply){
    const playerName = document.getElementById("player-name");
    const createList = document.createElement("li");
    arr.push(createList);
    const playerNameList=createList.innerHTML=ply.name;
    console.log(playerNameList);
    playerNameArray.push(playerNameList);
    if (arr.length >=6) {
        alert('you can not buy more than 5 players');
        return
        }
  
        playerName.appendChild(createList);
}

document.getElementById("calculate-btn").addEventListener("click",function(){
    const perPlayerValue= document.getElementById("per-player-price");
    const playerValue = perPlayerValue.value;
    const total =playerValue * arr.length;
    const setTotal = document.getElementById("plyer-total");
    setTotal.innerText=total;
    perPlayerValue.value="";
})


document.getElementById("calculate-total-btn").addEventListener("click",function(){
    const managerValue = document.getElementById("manager-value");
      const managerAmount = managerValue.value;
      const managerAmountInt =parseInt( managerAmount);
      const coachValue = document.getElementById("coach-value");
      const coachAmount = coachValue.value;
      const coachAmountInt =parseInt(coachAmount);
      const manageAndCochTotal = managerAmountInt + coachAmountInt;
      const expence = document.getElementById("plyer-total");
      const expenceTotal = expence.innerHTML;
      const expenceTotalInt =parseInt(expenceTotal)
      const subTotal = manageAndCochTotal + expenceTotalInt;
      const totalAmount =document.getElementById("sub-tatal-amount");
      totalAmount.innerText=subTotal;
      managerValue.value="";
      coachValue.value="";
      
})

