// Your code here

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var directionNames = "n ne e se s sw w nw".split(" ");

function SmartPlantEater() 
{
  this.energy = 20;
  this.digest = 0; // turns taken to digest food
  this.heading = randomElement(directionNames);
}
  
SmartPlantEater.prototype.act = function(context) {
  if (this.digest > 0) this.digest--; //critter digests
  var space = context.find(" ");
  if (this.energy > 100 && space)
    return {type: "reproduce", direction: space};
  var plant = context.find("*");
  if (plant && this.digest === 0) //only eat when hungry
  {
    this.digest = 2; //can only eat a plant every 3 turns
    return {type: "eat", direction: plant};
  };
  if (context.look(this.heading) == ' ')
    return {type: "move", direction: this.heading}; //follow heading if possible
  this.heading = space; //get a new heading 
  if (space)
    return {type: "move", direction: space}; //go on
};

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));

// Your code here
function Tiger() 
{
  this.energy = 50;
  this.digest = 0; // counter turns taken to digest food
  this.heading = randomElement(directionNames);
}
  
Tiger.prototype.act = function(context) {
  if (this.digest > 0) this.digest--; //critter digests
  var space = context.find(" ");
  if (this.energy > 100 && space)
    return {type: "reproduce", direction: space};
  var food = context.find("O");
  if (food && this.digest === 0) //only eat when hungry
  {
    this.digest = 3; //can only eat food every 3 turns
    return {type: "eat", direction: food};
  };
  if (context.look(this.heading) == ' ')
    return {type: "move", direction: this.heading}; //follow heading if possible
  this.heading = space; //get a new heading 
  if (space)
    return {type: "move", direction: space}; //go on
};


animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));
