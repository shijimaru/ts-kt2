abstract class Publisher { 
  title: string; 
  author: string; 
  pubYear: number; 
  copies: number;
  static count : number = 0
  constructor(){
    Publisher.count++
  }
 
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
 
class Reader extends Publisher implements Reception{ 
  firstName: string; 
  lastName: string; 
  static items: Publisher[];

  delivery(publisher: Publisher): void{
    if (this.copies == 0 || Publisher.count == Reader.items.length) return
    this.copies = this.copies - 1
  } 

  receive(publisher: Publisher): void{
    this.copies = this.copies + 1
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
} 
 
class Library { 
  publications: Publisher[]; 
 
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
