import { Component } from '@angular/core';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css'],
})
export class BookComponentComponent {
  books: any[] = [
    {
      id: 1,
      naziv: 'Sapiens: Kratka povijest čovječanstva',
      autor: 'Yuval Noah Harari',
      zanr: 'Povijesna non-fikcija',
      opis: 'Ova knjiga predstavlja jedinstveni prikaz evolucije ljudske vrste, od pojave Homo sapiensa u Africi prije 70.000 godina pa sve do sadašnjosti.',
      slika: 'https://picsum.photos/id/1/200/300',
      cijena: 25.99,
      datumIzdavanja: new Date(2014, 4, 15),
      jezik: 'Hrvatski',
      brojStranica: 466,
      prikazOpisa: true,
    },
    {
      id: 2,
      naziv: 'The Lord of the Rings',
      autor: 'J.R.R. Tolkien',
      zanr: 'Fantasy',
      opis: 'Ovo je epska fantastična trilogija koja prati avanture hobita Froda i njegovih prijatelja dok pokušavaju uništiti Zlatni Prsten.',
      slika: 'https://picsum.photos/id/2/200/300',
      cijena: 34.99,
      datumIzdavanja: new Date(1954, 6, 29),
      jezik: 'Engleski',
      brojStranica: 1178,
      prikazOpisa: true,
    },
    {
      id: 3,
      naziv: "The Hitchhiker's Guide to the Galaxy",
      autor: 'Douglas Adams',
      zanr: 'Science Fiction',
      opis: 'Ova knjiga prati avanture Arthura Denta, posljednjeg preživjelog nakon što je Zemlja slučajno uništena kako bi se napravio prostor za prolaz intergalaktičke autoceste.',
      slika: 'https://picsum.photos/id/3/200/300',
      cijena: 19.99,
      datumIzdavanja: new Date(1979, 9, 12),
      jezik: 'Engleski',
      brojStranica: 193,
      prikazOpisa: true,
    },
    {
      id: 4,
      naziv: 'The Da Vinci Code',
      autor: 'Dan Brown',
      zanr: 'Misterija',
      opis: 'Ova knjiga prati profesora simbologije Roberta Langdona u potrazi za istinom iza ubistva kustosa u Luvru i njegovog skrivenog znanja.',
      slika: 'https://picsum.photos/id/4/200/300',
      cijena: 22.99,
      datumIzdavanja: new Date(2003, 2, 18),
      jezik: 'Engleski',
      brojStranica: 454,
      prikazOpisa: true,
    },
    {
      id: 5,
      naziv: 'The Girl on the Train',
      autor: 'Paula Hawkins',
      zanr: 'Misterija',
      opis: 'Roman prati alkoholičarku koja svakodnevno putuje vozom u London i promatra ljude i kuće dok prolazi kroz predgrađa. Jednog dana, svjedoči nečemu što bi moglo biti ključno za rješavanje misterioznog nestanka jedne žene.',
      slika: '',
      cijena: 15.99,
      datumIzdavanja: new Date(2015, 1, 13),
      jezik: 'Engleski',
      brojStranica: 316,
      prikazOpisa: true,
    },
    {
      id: 6,
      naziv: 'One Hundred Years of Solitude',
      autor: 'Gabriel Garcia Marquez',
      zanr: 'Magični realizam',
      opis: 'Roman prati život porodice Buendía u imaginarnom gradu Macondo u Kolumbiji tokom više od jednog vijeka. Prepun fantastičnih i magičnih elemenata, ovo djelo predstavlja jedno od najvećih dostignuća književnosti 20. vijeka.',
      slika: '',
      cijena: 19.99,
      datumIzdavanja: new Date(1967, 5, 30),
      jezik: 'Španski',
      brojStranica: 417,
      prikazOpisa: true,
    },
    {
      id: 7,
      naziv: 'The Hobbit',
      autor: 'J.R.R. Tolkien',
      zanr: 'Fantazija',
      opis: 'Priča prati hobita po imenu Bilbo Baggins koji odlazi na epsku avanturu sa družinom patuljaka kako bi osvojili zlato čuvenog zmaja Smauga. Ovo djelo je preteča kultne trilogije Gospodar prstenova.',
      slika: '',
      cijena: 14.99,
      datumIzdavanja: new Date(1937, 9, 21),
      jezik: 'Engleski',
      brojStranica: 310,
      prikazOpisa: true,
    },
    {
      id: 8,
      naziv: 'The Picture of Dorian Gray',
      autor: 'Oscar Wilde',
      zanr: 'Roman',
      opis: "The Picture of Dorian Gray is a Gothic and philosophical novel by Oscar Wilde, first published complete in the July 1890 issue of Lippincott's Monthly Magazine.",
      slika: '',
      cijena: 12.99,
      datumIzdavanja: new Date(1890, 6, 20),
      jezik: 'Engleski',
      brojStranica: 254,
      prikazOpisa: true,
    },
    {
      id: 9,
      naziv: 'The War of the Worlds',
      autor: 'H.G. Wells',
      zanr: 'Znanstvena fantastika',
      opis: "The War of the Worlds is a science fiction novel by English author H. G. Wells, first serialized in 1897 by Pearson's Magazine in the UK and by Cosmopolitan magazine in the US.",
      slika: '',
      cijena: 8.99,
      datumIzdavanja: new Date(1897, 3, 28),
      jezik: 'Engleski',
      brojStranica: 192,
      prikazOpisa: true,
    },
    {
      id: 10,
      naziv: "The Hitchhiker's Guide to the Galaxy",
      autor: 'Douglas Adams',
      zanr: 'Znanstvena fantastika',
      opis: "The Hitchhiker's Guide to the Galaxy is a comedic science fiction series created by Douglas Adams. Originally a radio comedy broadcast on BBC Radio 4 in 1978, it was later adapted to other formats.",
      slika: '',
      cijena: 10.99,
      datumIzdavanja: new Date(1979, 8, 17),
      jezik: 'Engleski',
      brojStranica: 224,
      prikazOpisa: true,
    },
    {
      id: 11,
      naziv: 'The Great Gatsby',
      autor: 'F. Scott Fitzgerald',
      zanr: 'Roman',
      opis: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      slika: '',
      cijena: 11.99,
      datumIzdavanja: new Date(1925, 3, 10),
      jezik: 'Engleski',
      brojStranica: 180,
      prikazOpisa: true,
    },
  ];

  showImage: boolean = true;

  prikazSlike() {
    this.showImage = !this.showImage;
  }

  toggleOpis(id: number) {
    for (var i = 0; i < this.books.length; i++) {
      if (this.books[i].id == id)
        this.books[i].prikazOpisa = !this.books[i].prikazOpisa;
    }
  }

  formatPrice: boolean = true;
  FormatirajCijenu() {
    this.formatPrice = !this.formatPrice;
  }

  formatDate: boolean = true;
  FormatirajDatum() {
    this.formatDate = !this.formatDate;
  }

  formatJezik: boolean = true;
  FormatirajJezik() {
    this.formatJezik = !this.formatJezik;
  }

  formatPage: boolean = true;
  FormatirajStranice(){
      this.formatPage = !this.formatPage
  }
}
