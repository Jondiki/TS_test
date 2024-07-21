// Exercice : Création d'une Application de Gestion de Bibliothèque en TypeScript
// Objectif
// Créer une application de gestion de bibliothèque en utilisant les concepts de la programmation orientée objet (POO) en TypeScript.

// Description du Projet
// Vous allez développer une application permettant de gérer une bibliothèque avec des livres, des utilisateurs (membres et bibliothécaires), et les interactions entre eux. L'application doit permettre d'ajouter des livres, de s'inscrire en tant que membre, de gérer les emprunts et les retours de livres.

// Étapes à Suivre
// Définir les Classes de Base

// Créez une classe Book avec les propriétés : title, author, isbn, et available.
// Créez une classe User avec les propriétés : name et userId.
// Héritage et Polymorphisme

// Créez une classe Librarian qui hérite de User et ajoute une méthode manageBook(book: Book, action: 'borrow' | 'return').
// Créez une classe Member qui hérite de User et ajoute des méthodes borrowBook(book: Book), returnBook(book: Book), et listBorrowedBooks().
// Encapsulation et Abstraction

// Créez une classe Library avec les propriétés : books et members.
// Ajoutez des méthodes à la classe Library pour : addBook(book: Book), registerMember(member: Member), findBook(isbn: string), et findMember(userId: number).
// Utilisation

// Instanciez des objets de Library, Book, Member, et Librarian.
// Ajoutez des livres à la bibliothèque.
// Inscrivez des membres.
// Gérez les emprunts et retours de livres à travers les méthodes définies.


//Classe Book
class Book {
    private title: string;
    private author: string;
    private isbn: string;
    private available: boolean;

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true;
    }

    public borrowBook(): void {
        if (this.available) {
            this.available = false;
            console.log(`Book "${this.title}" borrowed.`);
        } else {
            console.log(`Book "${this.title}" is not available.`);
        }
    }

    public returnBook(): void {
        this.available = true;
        console.log(`Book "${this.title}" returned.`);
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public isAvailable(): boolean {
        return this.available;
    }
}

// Classe User
class User {
    private name: string;
    private userId: number;

    constructor(name: string, userId: number) {
        this.name = name;
        this.userId = userId;
    }

    public getName(): string {
        return this.name;
    }

    public getUserId(): number {
        return this.userId;
    }
}

// Classe Librarian qui hérite de User
class Librarian extends User {
    constructor(name: string, userId: number) {
        super(name, userId);
    }

    public manageBook(book: Book, action: 'borrow' | 'return'): void {
        if (action === 'borrow') {
            book.borrowBook();
        } else {
            book.returnBook();
        }
    }
}

// Classe Member qui hérite de User
class Member extends User {
    private borrowedBooks: Book[] = [];

    constructor(name: string, userId: number) {
        super(name, userId);
    }

    public borrowBook(book: Book): void {
        if (book.isAvailable()) {
            book.borrowBook();
            this.borrowedBooks.push(book);
        } else {
            console.log(`Book "${book.getTitle()}" is not available.`);
        }
    }

    public returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`Book "${book.getTitle()}" not found in borrowed books.`);
        }
    }

    public listBorrowedBooks(): void {
        console.log(`${this.getName()} has borrowed:`);
        this.borrowedBooks.forEach(book => console.log(`- ${book.getTitle()} by ${book.getAuthor()}`));
    }
}

// Classe Library
class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book "${book.getTitle()}" added to the library.`);
    }

    public registerMember(member: Member): void {
        this.members.push(member);
        console.log(`Member "${member.getName()}" registered.`);
    }

    public findBook(isbn: string): Book | undefined {
        return this.books.find(book => book.getIsbn() === isbn);
    }

    public findMember(userId: number): Member | undefined {
        return this.members.find(member => member.getUserId() === userId);
    }
}

// Utilisation
const library = new Library();

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', '123456789');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '987654321');
library.addBook(book1);
library.addBook(book2);

const member1 = new Member('Alice', 1);
const member2 = new Member('Bob', 2);
library.registerMember(member1);
library.registerMember(member2);

const librarian = new Librarian('Charles', 3);
librarian.manageBook(book1, 'borrow');
librarian.manageBook(book1, 'return');

member1.borrowBook(book1);
member1.listBorrowedBooks();
member1.returnBook(book1);
member1.listBorrowedBooks();
