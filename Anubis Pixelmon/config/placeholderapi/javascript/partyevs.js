var total = null;
var hp = null;
var atk = null;
var def = null;
var spa = null;
var spd = null;
var spe = null;

if (args != null) {
  total = service.value("%party_" + args[0] + "_stats_evs_total%");
  hp = service.value("%party_" + args[0] + "_stats_evs_hp%");
  atk = service.value("%party_" + args[0] + "_stats_evs_atk%");
  def = service.value("%party_" + args[0] + "_stats_evs_def%");
  spa = service.value("%party_" + args[0] + "_stats_evs_spa%");
  spd = service.value("%party_" + args[0] + "_stats_evs_spd%");
  spe = service.value("%party_" + args[0] + "_stats_evs_spe%");
}

var count = 0;
var out = "";
if (total > 0)
  out += "&7- ";

if (hp > 0) {
  count += 1;
  out += "&a" + hp + " HP";
} if (atk > 0) {
    if (count > 0)
      out += " &7/ ";
    count += 1;
    out += "&c" + atk + " Atk";
} if (def > 0) {
    if (count > 0)
      out += " &7/ ";
    count += 1;
    out += "&6" + def + " Def";
} if (spa > 0) {
    if (count > 0)
      out += " &7/ ";
    count += 1;
    out += "&d" + spa + " SpA";
} if (spd > 0) {
    if (count > 0)
      out += " &7/ ";
    count += 1;
    out += "&e" + spd + " SpD";
} if (spe > 0) {
    if (count > 0)
      out += " &7/ ";
    count += 1;
    out += "&b" + spe + " Spe";
}

if (count == 0)
  count = "";
