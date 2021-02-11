*** Creati 4 pagini html, in care sa includeti elemente de javascript si css(fisiere separate), care sa implementeze functionalitatile necesare unei aplicatii de genul magazin electronic (folositi tehnica AJAX si mapati raspunsul primit de la server pe clase javascript) ***

## index.html - lista produse 

1. pagina ce afiseaza lista de prodose pe care le primeste de la un server in format JSON
2. cererea catre server, se face folosind tehnica AJAX
3. in gif-ul de mai jos, este un exemplu despre cum ar putea arata implementarea acestei pagini
4. Pagina trebuie sa fie responsive


## details.html 

1. acesata pagina primeste id-ul produsului, ca si query parameter
2.  ajax/talcioc/details.html?id=0, unde 0 este id-ul produsului)
3. in aceasta pagina vor fi afisate: imaginea produsului, nume, descrierea, pretul, numarul de produse din stoc
4. tot in pagina va fi afisat si un buton "adauga in cos": la apasarea acestui buton, in partea de sus a ecranului
5. va aparea un mesaj ce va avertiza utilizatorul ca produsul din imagine a fost adaugat in cosul de cumparaturi
6. toate produsele adaugate in cos, vor fi stocate in memoria browserului, folosind functionalitatea localstorage
7. in gif-ul de mai jos, este un exemplu despre cum ar putea arata implementarea acestei pagini
8. Pagina trebuie sa fie reponsive
9. Nu trebuie sa te lase sa adaugi acelasi produs daca stocul a fost depasit
10. Daca adaugi de 2 ori acelasi produs, in cos trebuie sa apara produsul o singura data cu cantitatea adunata


## cart.html 

1. aceasta pagina citeste toate elementele salvate in localsorage si le afiseaza sub forma unui tabel
2. pe fiecare linie din tabel, ce reprezinta produsele cumparate se pot face mai multe actiuni:
3. sa modificam cantitatea unui produs adaugat in cos (increase/decrease)
4. sa renuntam la un produs adaugat in cos, printr-o functie de "Remove"
5. numele fiecarui produs din lista, contine un link catre pagina de detalii a produsului adaugat in cos 
6. de fiecare data cand continutul tabelului se modifica, totalul si subtotalurile vor fi calculate din nou
7. in gif-ul de mai jos, este un exemplu despre cum ar putea arata implementarea acestei pagini
8. Pagina trebuie sa fie responsive


## admin.html 

1. din pagina de admin, se pot gestiona produsele afisate in paginile index.html si details.html
2. acesata pagina este doar o interfata grafica, ce comunica prin cereri AJAX cu un server, folosind verbele GET, POST, PUT, DELETE pentru a adauga si a actualiza lista de produse disponibile
3. tabelul de produse, contine pe coloana de nume produs, un link care atunci cand va fi actionat de catre 
4. utilizator, va afisa pe ecran un formular de adaugare/editare a produselor
5. fiecare produs va contine urmatorele informatii: imagine, nume, descriere, pret, cantitate stoc
6. elementele din lista pot fi sterse din lista de pe server, folosind un buton "Remove"
7. pagina nu trebuie sa fie responsive si nu are nevoie de autentificare, doar sa fie o pagina separata