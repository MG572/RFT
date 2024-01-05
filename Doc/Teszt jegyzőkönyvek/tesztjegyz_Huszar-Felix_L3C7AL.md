# Suika Game teszt jegyzőkönyv
Tesztelést végezte: Huszár Félix
Operációs rendszer: Windows 10
Böngésző: Brave
Dátum: 2024.01.05
Talált hibák száma: 1

# Labdák összeolvadási sorrendje
A labdák összeolvadása helyesen működik.
A pirosakból kék lesz és a kékekből pedig zöld, míg a zöldek sárgákká olvadnak össze és azok nem módosulnak azután.

# Kollíziók megfigyelése
Mind a 4 szín egymással való kollíziója jónak tűnik,
de csak amíg azok meg nem érintik a talajt,
talaj érintése után a labdák képesek kigurulni a megszabott játéktéren kívülre.
A probléma úgy tűnik, hogy amiatt történik,
hogy a külömböző színű és a sárga labdák érintekezéskor próbálják egymást kitaszítani egymás mellől.

# Pontszám növelő működése
A pont számláló müködése tökéletes, de még alakítható,
hogy a felhasználót méginkább megragadja,
minnél nagyobb labdák összeolvasztása után,
minnél nagyon jutalom pontot lehetne adni.

# Megjelenítő golyó és ledobható golyó színei
Mind a megjelenító golyó és a ledobható golyók jól működnek.
A megjelenítő mindig azt jelzi, amit ejt és a ledobható golyó mindig vagy kék, vagy piros.