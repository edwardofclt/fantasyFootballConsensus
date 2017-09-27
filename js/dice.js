/****
32 Team array
**********/
var NFLTeams = ["Arizona","Atlanta", "Baltimore", "Buffalo", "Carolina", "Chicago", "Cincinnati", "Cleveland", "Dallas", "Denver", "Detroit", "Green Bay", "Houston", "Indianapolis", "Jacksonville", "Kansas-City", "LA-Rams", "LA-Chargers", "Miami", "Minnesota", "New-England", "New-Orleans", "NY-Jets", "NY-Giants", "Oakland", "Philadelphia", "Pittsburgh", "San Francisco", "Seattle", "Tampa-Bay", "Tennessee", "Washington"];

/***
Rosters Array
******/
  var rosters = ['teamTy', 'teamTravis', 'teamBryant', 'teamElijah', 'teamBrad', 'teamKiran', 'teamMiller', 'teamKnox', 'teamDaniel', 'teamMatt'];

var arrayLength = rosters.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(rosters[i]);
    //Do something
    var
}

/***
Drag and drop functionality
******/
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

/***
Select Keepers and remove them from NFLTeams array
******/

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
      arr.splice(found, 1);
      found = arr.indexOf(what);
  }
}

  function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      console.log(data);

    for (var i = 0; i < NFLTeams.length; i++)
      if (NFLTeams[i] === data) {
          NFLTeams.splice(i, 1);
          break;
      }
      console.log(NFLTeams);
};


/****
Shuffle NFLTeams array
*******/
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

/****
Loop through teams  === 3, and print randomized teams to rosterTeam
*******/

/*for (var index = 0; index < NFLTeams.length; index++)
    {
        NFLTeams[index] = (NFLTeams[index]);
        document.getElementById(rosters[index]).innerHTML = NFLTeams[index];
        console.log(NFLTeams[index]);
    }*/
