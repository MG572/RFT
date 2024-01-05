# Suika teszt jegyzőkönyv
Tesztelést végezte: Márton Gergely

Operációs rendszer: Windows 11

Böngésző: Mozilla Firefox, Microsoft Edge és Vivaldi

Dátum:2024.01.05

Talált hibák száma: 2

# Kompatibilitás
A játék megfelelően müködik Chromium és Mozilla böngészőn is. Se a Mozzila Firefox,se a Microsoft Edge, se pedig a Vivaldi számára nem okozott problémát a felület. A teszteket a teszt időpontjában legfrissebb böngésző verzióval hajtottam végre. Az összes lépés meg lett vizsgálva az összes webböngészőn.

# A felület megfelelő megjelenése
A felület a tervnek megfelelően megjelenik, alapvető asztétikai szempontoknak megfelel.
Az elért pontszám egyértelműen leolvasható és az hogy a felület nagy része üres (képernyő mérettől függő mértékben)
letisztultá és könnyen átláthatóvá teszi. A golyók az elvárásnak megfelelően jelennek meg és különböző méretük és szinükből adodóan könnyen megkülönbeztethetőek egymástól, ahogyaz az a követelményekben szerepel.
Minden előre megfogalmazott kritériumnak eleget tesz.

# Képernyő méretezése
A játéktér alkalmazkodik az ablak méretéhez egy bizonyos pontig. Azonban van egy minimum mérete ami alá látszólag nem képes lecsökkeni anélkül hogy a játékélményből ne rontson. Ez egy kellően késői ponton történik meg azonban, ezért ez elvárásoknak megfelel.

# A játék logikája
A játékban 4 különböző szintű golyó szerepel:

1. Piros, a legkissebb
2. Kék, a második legkisebb
3. Zöld
4. Sárga, a legnagyobb

Amikor a labdák egymáshoz érnek megfelelően érzékelik az ütközést, egybeolvadnak az egyel nagyobbik golyóvá válva. A pontszám megnövelődik eggyel, a golyók értékétől függetlenül. Ez tudomásom alapján nem így müködik a játék eredeti verziójában, ott a nagyobbik gyümölcsök létrejötte több pontot ért mint a kisebbik. Ezt én nem számítom hibának, a specifikáció nem vonatkozott erre és a cél nem csak lemásolni az eredetit egy az egyben.

# Preview golyók
A preview golyók megjelennek és lehet velük célozni. Csak piros és kék szinű golyók jelennek meg kezdésként, ez így megfelelően müködik.

# Gravitáció
A gravitáció létezése miatt minél többet utazik a golyó lefele annál gyorsabban halad tovább. Ennek így is kellene történie. Azonban valami oknál fogva amikor a játékos elengedi a golyót az ahelyett hogy leesne egyenesen ahogyan azt a felhasználó elvárná azért hogy tudjon rendesen célozni a golyóval, a golyó látszólag véletlenszerű irányva kezdi meg útját. Időnként balra, jobbra vagy éppen relatívan középre, de gyakorlatilag soha sem... engedi csak úgy el magát a golyó. Ezt egy kisebb hibának számítom mivelhogy megnehezíti és frusztrálóbbá teszi a golyók elhelyezését mint kéne. 
Maga a golyók egymáson maradása látszólag megfelelően müködik azonban ennek tesztelése nehézségekbe ütközött. A golyók pattogni is képesek és ezt az elvárt módon teszik.

# Játékhatárok
A fentebb említett nehézség az a játékhatár müködése. A játékhatár sikeresen rákényszerití a felhasználót hogy a teren belül engedje el a golyót, és ha a golyó felpattan a falra, lepattan arról. Ez eddig remek. A probléma a játéktérrel az az hogy a golyók míg nem képesek elhagyni a játékteret alapból a tesztek alapján... ha egy másik golyó hatással van rájuk akkor nagyon is képesek. Ezt azt jelenti hogy ahelyett hogy egymásra épülnének a golyók mint ahogyan az az eredeti elképzelés volt, a golyók beerőszakoljuk magukat egymás közé majd a fizika kilöki a kintebbi golyókat a játéktérből. Ez egy hiba mert így a kivánt játékmenet nem teljesen az eredeti, azonban ez nem teszi játszhatatlanná a játékot.

# Pontszám mérés
A pontszám mérése az elvártaknak megfelelően müködik, ha egymásba olvad két golyó a játékos kap egy pontot. A pontszám számolását át lehetne dolgozni úgy hogy a golyók különböző pontszámokat érjenek attól függően hogy mennyit érnek, de ez csak egy felvetés, nem hiba.

# Optimális stratégia kidolgozása
Az optimális stratégia a lehető legtöbb pontszámra az a játékhatárok nyitottsága miatt sajnos egy autoclicker. Révén hogy a golyók ebben az esetben össze vissza fognak landolni és lökdösik egymást így gyakran összeolvadnak és ezzel pontot érnek. Mivelhogy a játéktér végtelen egy hibának köszönhetően így ha a játékot futni hadjuk egy ideig egy autoclickerrel akkor így tudjuk elérni a legtöbb pontot a legkevesebb erőfeszítéssel. Azonban nem egy játék osztozik ezen és az hogy az optimális stratégia egy exploit ami nem a játékmenet része az nem újdonság, ez egy gyakori probléma. Ebben az esetben a megoldás az lenne, hogy a 2 felismert hibát kijavítsuk, ezzel a játéktér megfelelő kihasználása fontossá válna és a golyók is csak egymásra esnének ha cask otthagyjuk, ezzel az autoclicker helyett a játékmenetet maximalizálva érhetnénk el az optimális pontszámot, ami nem végtelen lenne, mivelhogy megtelne a pálya. Most nem telik meg így végtelen.