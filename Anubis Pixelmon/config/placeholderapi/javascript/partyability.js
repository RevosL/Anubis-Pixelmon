var ability;
var hiddenability;
var out;

if (args != null) {
  ability = service.value("%party_" + args[0] + "_ability%");
  hidden_ability = service.value("%party_" + args[0] + "_ability_H%");

  out = ability;
  if (ability.replace(" ", "") == hidden_ability)
    out += " (HA)";
}
