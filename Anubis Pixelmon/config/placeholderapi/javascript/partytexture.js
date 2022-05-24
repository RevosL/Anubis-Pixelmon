var customtextures = ["form1", "form2", "form3"]
var out;

if (args != null) {
  out = service.value("%party_" + args[0] + "_texturelocation%");
  for (var i = 0; i < customtextures.length; i++) {
    if (out.indexOf(customtextures[i]) > -1) {
      var shiny = service.value("%party_" + args[0] + "_shiny%");
      if (shiny)
        out.replace("custom-" + customtextures[i], "shinypokemon")
      else
        out.replace("custom-" + customtextures[i], "pokemon")
      break;
    }
  }
}
