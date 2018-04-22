var elements = {
  partido : document.querySelector('.partido'),
  boton : document.querySelector('.button')
}

var equipos = [];

class team {
  constructor(equipo,goles,wins){
    this.equipo = equipo;
    this.goles = goles;
    this.wins = wins; //Partidos ganados
  }
  getEquipo(){
    return this.equipo;
  }
  setEquipo(equipo){
    this.equipo = equipo;
  }
  getGoles(){
    return this.goles;
  }
  setGoles(goles){
    this.goles = goles;
  }
  getWins(){
    return this.wins;
  }
  setWins(wins){
    this.wins = wins;
  }
}

//Creamos los equipos
equipos[0] = new team('RealMadrid',0,0);
equipos[1] = new team('FCBarcelona',0,0);
equipos[2] = new team('AtleticoMadrid',0,0);
equipos[3] = new team('Manchester',0,0);

function reparto(){ //Se reparte aleatoriamente los goles de cada equipo
  for(var i in equipos){
    equipos[i].setGoles(Math.floor((Math.random() * 7) + 1));
  }
}

function ganador(equipo1,equipo2){
  if(equipo1.getGoles > equipo2.getGoles){
    equipo1.wins++;
  } else {
    equipo2.wins++;
  }
}

function randNum(top){ //Funcion que devuelve un num aleatorio hasta el parametro que se le pase
  let num = Math.floor((Math.random() * top));
  return num;
}

function newGame(){ // Se dispone el juego
  reparto();
  let num = randNum(equipos.length); // Eleccion aleatoria del primer equipo
  let num2 = randNum(equipos.length); // Eleccion aleatoria del segundo equipo

  console.log(num,num2);
  ganador(equipos[num],equipos[num2]);
  //console.log(equipos[0].wins,equipos[1].wins,equipos[2].wins,equipos[3].wins);



  elements.partido.textContent = equipos[num].getEquipo() + ' ' + equipos[num].getGoles()
   + ' -- ' + equipos[num2].getGoles() + ' ' + equipos[num2].getEquipo();


}
