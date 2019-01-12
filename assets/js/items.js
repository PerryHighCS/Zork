var GameItem = function(var_string, name, specialdesc, desc, contents, taken, readable, openable) {
    this.var_string = var_string;
    this.name = name;
    this.specialdesc = specialdesc;
    this.desc = desc;
    this.contents = contents;
    this.taken = taken;
    this.readable = readable;
};

var sack       = new GameItem("sack","sack","", "elongated brown sack, smelling of hot peppers","hot peppers",false, false, false);
var bottle     = new GameItem("bottle","bottle","A glass bottle is sitting on the table containing a quantity of water.", "A glass bottle is sitting on the table containing<br />a quantity of water.","a quantity of water", false, false, false);
var leaflet    = new GameItem("leaflet","leaflet","", "small leaflet","WELCOME TO ZORK!<br /><br />ZORK is a game of adventure, danger and low cunning.<br />In it you will explore some of the most amazing territory ever seen by mortals.<br />No computer should be without one!",false,true, false);
var mat        = new GameItem("mat","mat", "A rubber mat saying 'Welcome to Zork!' lies by the door.", "A rubber mat", "", false, false, false);
var egg        = new GameItem("egg","egg", "In the birds nest is a large egg encrusted with precious jewels, apparently scavenged by a childless songbird.<br /> The egg is covered with fine golf inlay, and ornamented in lapis lazuli and mother-of-pearl.<br /> Unlike most eggs, this one is hinged and closed with a delicate looking clasp.<br /> The egg appears extremely fragile.", "", "", false, false, true);
var leaves     = new GameItem("leaves","grating","On the ground is a pile of leaves.", "","",false, false, false);
var sword      = new GameItem("sword","elven sword","Above the trophy case hangs an elvish sword of great antiquity.", "","",false, false, false);
var lantern    = new GameItem("lantern","brass lantern","A battery-powered brass lantern is on the trophy case.", "","",false, false, false);
var itemArray = [
    'sack',
    'bottle',
    'leaflet',
    'egg',
    'leaves',
    'sword',
    'lantern'
];