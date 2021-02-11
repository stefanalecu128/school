// 1.O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict

function equals(a, b) {
  return a === b;
}

console.log(equals(2, 3))

// O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea

function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else {
        return 1
    }
}
console.log(compare(1,1));

// 3.O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2


function max(maxNum,minNum) {
    if(maxNum > minNum) {
      return maxNum;
    } else {
      return minNum;
    }
  }
  


// 4.O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2

function min(a, b) {
    return a > b ? b : a;
  }



// 5.O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6)

function suma(a) {
  var sum = 0;
  for (let i = 1; i <= a; i++) {
    sum = sum + i;
  }
  return sum;
}


// 6.O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0)

function prim(a) {
  for (let i = 2; i <= a / 2; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}

// 7.O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28)

function sumaPrime(N) {
  var sum = 0;
  var nrPrime = 0;

  let i = 2;

  while(nrPrime < N) {
    if (prim(i)) {
      sum = sum + i;
      nrPrime++;
    }
    i++;
  }
  return sum;
}



// 8.O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321)

function invers(x) {
  var inv = 0;
  var nrCifre = (x + "").length;

  for (let i = 1; i <= nrCifre; i++) {
    var cifra = x % 10;
    var modifier = Math.pow(10, nrCifre - i);

    inv += modifier * cifra;

    x = Math.floor(x/10);
  }
  return inv;
}

// 9.O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945)
  function produsImpare(a) {
    var produs = 1;

    for (let i = 1; i < 2*a; i+=2) {
      produs *= i;
    }
    return produs;
  }

// 10.O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false)
  function contains(arr, x) {
    for (let i=0; i<arr.length; i++) {
      if(arr[i] === x) {
        return true;
      }
    } 
    return false;
  }


// 11.O functie "maxArray" care primeste un array si returneaza valoarea maxima (ar trebui sa functioneze si pentru numere si pentru stringuri)
  function maxArray(arr) {
    var maxNo = arr[0];
    for(let i=1; i<arr.length; i++) {
      if(arr[i] > maxNo) {
        maxNo = arr[i];
      }
    }
    return maxNo;
  }

// 12.O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima
  function sumMinMax(arr) {
    var maxNo = arr[0];
    for(let i=1; i<arr.length; i++) {
      if(arr[i] > maxNo) {
        maxNo = arr[i];
      }
    }
    var minNo = arr[0];
    for(let i=1; i<arr.length; i++) {
      if(arr[i] < minNo) {
        minNo = arr[i];
      }
    }
    return maxNo + minNo;
  }

// 13.O functie "hasDuplicates" care primeste un array si returneaza daca exista duplicate intr-un array primit ca parametru (true/false)
  function hasDuplicates(arr) {
    var found = [];
    for(let i=0; i < arr.length;i++) {
      if(contains(found, arr[i])) {
        return true;
      }
      found.push(arr[i]);
    }
    return false
  }

// 14.O functie "produsPozitive" care primeste un array si returneaza produsul numerelor pozitive intr-un array primit ca parametru
  function produsPozitive(arr) {
    var produs = 1;
    for(let i=0; i < arr.length; i++) {
      if(arr[i] > 0) {
        produs *= arr[i];
      }
    }
    return produs;
  }

// 15.O functie "palindrom" care primeste un string si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false)
  function palindrom(str) {
    var inv = "";
    for(let i=str.length-1; i >= 0; i-- ) {
      inv += str[i];
    } 
    return str == inv;
  }


// O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv
O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv
O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate
O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
Calculeaza factorialul unui numar ("factorial")
Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")