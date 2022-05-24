var moveset1 = null;
var moveset2 = null;
var moveset3 = null;
var moveset4 = null;

if (args != null) {
  moveset1 = service.value("%party_" + args[0] + "_moveset_1%");
  moveset2 = service.value("%party_" + args[0] + "_moveset_2%");
  moveset3 = service.value("%party_" + args[0] + "_moveset_3%");
  moveset4 = service.value("%party_" + args[0] + "_moveset_4%");
}

var out = "&7- " + moveset1;
if (moveset2 != "")
  out += " / " + moveset2;
if (moveset3 != "")
  out += " / " + moveset3;
if (moveset4 != "")
  out += " / " + moveset4;
