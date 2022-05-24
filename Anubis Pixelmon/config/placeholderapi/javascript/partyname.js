var name = null;
var nickname = null;
var gender = null;
var helditem = null;
var shiny = null;

if (args != null) {
  name = service.value("%party_" + args[0] + "_name%");
  nickname = service.value("%party_" + args[0] + "_nickname%");
  gender = service.value("%party_" + args[0] + "_gender%");
  helditem = service.value("%party_" + args[0] + "_helditem%");
  shiny = service.value("%party_" + args[0] + "_shiny%");
}

var out;
if (name != nickname)
  out = nickname + " &7(" + name + ")";
else
  out = name;

if (gender == "Male")
  out += " &7(&9M&7)";
else if (gender == "Female")
  out += " &7(&dF&7)";

if (shiny == "true")
  out += " &7(&6*&7)"

if (helditem != "None")
  out += " &7@ " + helditem;
