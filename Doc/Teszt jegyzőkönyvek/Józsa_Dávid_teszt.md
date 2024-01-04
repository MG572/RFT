# Suika Game teszt jegyzőkönyv
Tesztelést végezte: Józsa Dávid
Operációs rendszer: Windows 11
Böngésző: Google Chrome
Dátum: 2024.01.04
Talált hibák száma: 1

# Új labda megjelenése
A kurzor megmozdítása során a pálya felső részén megjelennek a különböző színű és méretű golyók és a kurzorral együtt mozognak a platform tetején oldalirányba . A megjelenésük sorrendje véletlenszerű, a piros és a kék golyók jelennek meg, azok összeolvadásával kapjuk meg a többi golyót, jelen esetben a zöld és a sárga színűt.

# Kattintásra elengedés és gravitációs hatás
A golyók kattintás következtében leesnek a platform tetejéről. Zuhanás közben a sebességük folyamatosan gyorsul egészen addig, amíg elérik a pálya alját, ahonnan visszapattannak és fokozatosan veszítenek a sebességükből. A golyóknak nem csak a platform aljáról, hanem az oldalairól is vissza kell pattanniuk.

# Ütközés a többi golyóval
Az ugyanolyan színű és méretű golyók ha egymáshoz érnek, összeolvadnak, és egy nagyobb méretű, másik színű golyó lesz belőle. Két piros golyó összeolvadásával kapunk egy kék golyót, két kékből egy zöld színűt, végül két zöldből egy sárgát. Ha két különböző golyó találkozik egymással, akkor elpattannak egymástól. A sárga golyók nem olvadnak össze, és nem változik a mozgásuk.

# Pontszám megjelenítése
A golyók összeolvadásával 1 ponttal növekszik az aktuális pontérték, amelyet a platform mellett elhelyezett Score mező értéke folyamatosan frissít.