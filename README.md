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

### Design
Warstwa użytkowa i rozgrywki jest wykonana za pomocą framework CSS, tailwindcss.

### Start
Na samym początku pogram uruchamia funkcje Menu.
Funkcja Menu:
- renderuje przycisk Graj
- renderuje przycisk Wyniki
- renderuje przycisk O grze

### Przycisk - O grze
Po naciśnięciu przycisku o nazwie: "O grze", przeglądarka w nowym oknie otwiera plik readme.md, czyli ten właśnie.

### Przycisk - Wyniki
Po naciśnięciu przycisku o nazwie: "Wyniki", uruchomiona zostaje funkcja ListaWynikow, która:
- renderuje widok dla listy wyników i uzupełnia wartości za pomocą funkcji PobierzWynik() z parametrem, który określa jaki element z localstorage ta funkcja pobierze i zwróci

### Przycisk - Graj
Po naciśnięciu przycisku o nazwie: "Graj", uruchomiona zostaje funkcja WybierzPoziom(), która:
- renderuje widok wyboru poziomu (5 przycisków z opisem, który to poziom(np. Poziom 4)) i przycisk "Powrót", który uruchamia funkcje Menu()

### Przycisk - Poziom [numer]
Po naciśnięciu przycisku o nazwie: "Poziom [numer poziomu]", uruchomiona zostaje funkcja Gra() z parametrem, którym jest Mapa
Funkcja Gra() renderuje widok mapy i korzysta z funkcji RenderMapy() z parametrem, którym jest mapa.
Funkcja ta następnie zwraca wartość przy pomocy stałej renderMapy (opis poniżej) i zwrócona wartość (mapa gry) pojawia się na ekranie gry

### Tablica - Mapa
Tablica tablic, która zawiera 8 8-elementowych tablic, służy jako plansza gry
Poszczególne numery w tablicy odpowiadają:
0 = podłoga, 1 = ściana, 2 = blok, 3 = gracz, 4 = pole do ustawienia bloku

### Stała - renderMapy
Przerabia za pomocą funkcji strzałkowej, tablice z elementami mapy na div bloku

### Tablica - Template
Tablica, której poszczególne indeksy odpowiadają elementowi gry jak w przypadku tablicy Mapa
Każdy element to tailwindowy zapis stylu bloku
