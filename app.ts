abstract class Publisher { 
  title: string; 
  author: string; 
  pubYear: number; 
  copies: number; 
 
  get getTitle(): string { 
    return this.title; 
  } 
 
  set setTitle(title: string){ 
    this.title = title; 
  } 
 
  get getAuthor(): string { 
    return this.author; 
  } 
 
  set setAuthor(author: string){ 
    this.author = author; 
  } 
 
  get getPubYear(): number { 
    return this.pubYear; 
  } 
 
  set setPubYear(pubYear: number){ 
    this.pubYear = pubYear; 
  } 
 
  get getCopies(): number { 
    return this.copies; 
  } 
 
  set setCopies(copies: number){ 
    this.copies = copies; 
  } 
} 
 
class Book extends Publisher implements Reception{ 
  pages: number; 
 
  constructor(title: string, author: string, pubYear: number, copies: number, pages: number) { 
    super(title, author, pubYear, copies); 
    this.pages = pages; 
  } 
 
  delivery(publisher: Publisher): void{
    
  } 

  receive(publisher: Publisher): void{
    
  }
} 
 
class Magazine extends Publisher implements Reception{ 
  issue: number; 
 
  delivery(publisher: Publisher): void{
    
  } 

  receive(publisher: Publisher): void{
    
  }
} 
 
interface Reception { 
  delivery(publisher: Publisher): void; 
  receive(publisher: Publisher): void; 
} 
 
class Reader implements Reception{ 
  firstName: string; 
  lastName: string; 
  items: Publisher[];

  delivery(publisher: Publisher): void{
    
  } 

  receive(publisher: Publisher): void{
    
  }
 
  get getFirstName(): string { 
    return this.firstName; 
  } 
 
  set setFirstName(firstName: string){ 
    this.firstName = firstName; 
  } 
 
  get getLastName(): string { 
    return this.lastName; 
  } 
 
  set setLastName(lastName: string){ 
    this.lastName = lastName; 
  } 
 
  get getItems(): object[] { 
    return this.items; 
  } 
 
  set setItems(items: string){ 
    this.lastName = items; 
  } 
 
  addItem(item: object[]): void {     
    if (this.items.length < 3) { 
      this.items.push(item); 
    } 
  } 
 
  removeItem(item: Publisher): void {     
    const index = this.items.indexOf(item); 
    if (index > -1) { 
      this.items.splice(index, 1); 
    } 
  } 
} 
 
class Library { 
  publications: object[]; 
 
  constructor(publications: object[]) { 
    this.publications = publications; 
  } 
 
  getPublications(): object[] { 
    return this.publications; 
  } 
 
  addPublication(publication: object[]): void { 
    this.publications.push(publication); 
  } 
 
  removePublication(publication: object[]): void { 
    const index = this.publications.indexOf(publication); 
    if (index > -1) { 
      this.publications.splice(index, 1); 
    } 
  } 
}
