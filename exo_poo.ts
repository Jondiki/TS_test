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

class Book{
    private title: string;
    private autor: string;
    private isbn: string;
    private available: boolean;

    constructor( title :string, autor:string, isbn :string , available:string  )
    {
        this.title = title;
        this.autor = autor;
        this.isbn = isbn;
        this.available = true;

    }

}

class User
{
    private name: string;
    private userld: number;

    constructor(name: string, userId: number)
    {
        this.name = name;
        this.userld = userId;

    }
    
}



class Liberian extends User{

    constructor(name: string, userId: number)
    {
        super(name,userId)
    }

    manageBook() {
        
    }
}