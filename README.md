# Sokoban

## Czym jest ta gra?

Sokoban to gra, w której gracz zajmuje się przesuwaniem pudeł w wyznaczone do tego miejsce.
Nie jest to gra zaawansowana graficznie i konstrukcyjnie. Cała grafika jest dwuwymiarowa i opiera się na kwadratowych blokach.
Gracz nie może przechodzić nad ścianami i blokami. W zależności od wydania, twórcy ustalają swoje dodatkowe zasady.

## Sokoban według mnie

Według moich założeń:
- Gra liczy czas(tak naprawde nie liczy) oraz ilość kroków wykonanych przez gracza
- Gra zapisuje kroki i wyniki gracza na danej mapie do local storage
- Zakładka wyniki w menu pokazuje najlepsze wyniki na każdej mapie
- Gracz nie może przesunąć dwóch bloków jednocześnie
- Gracz porusza się za pomocą strzałek lub WASD na klawiaturze
- Gracz może popychać pudła, ale nie może ich ciągnąć
- Mapy 8x8
- 2 bloki do odstawienia do 2 punktów

## Jak działa gra

#Design
Warstwa użytkowa i rozgrywki jest wykonana za pomocą framework CSS, tailwindcss.

#Start
Na samym początku pogram uruchamia funkcje Menu.
Funkcja Menu:
- renderuje przycisk Graj
- renderuje przycisk Wyniki
- renderuje przycisk O grze

#Przycisk - O grze
Po naciśnięciu przycisku o nazwie: "O grze", przeglądarka w nowym oknie otwiera plik readme.md, czyli ten właśnie.

#Przycisk - Wyniki
Po naciśnięciu przycisku o nazwie: "Wyniki", uruchomiona zostaje funkcja ListaWynikow, która:
-
