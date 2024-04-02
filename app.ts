abstract class Publisher { 
  title: string; 
  author: string; 
  pubYear: number; 
  copies: number; 
 
  constructor(title: string, author: string, pubYear: number, copies: number) { 
    this.title = title; 
    this.author = author; 
    this.pubYear = pubYear; 
    this.copies = copies; 
  } 
 
  getTitle(): string { 
    return this.title; 
  } 
 
  setTitle(title: string): void { 
    this.title = title; 
  } 
 
  getAuthor(): string { 
    return this.author; 
  } 
 
  setAuthor(author: string): void { 
    this.author = author; 
  } 
 
  getPubYear(): number { 
    return this.pubYear; 
  } 
 
  setPubYear(pubYear: number): void { 
    this.pubYear = pubYear; 
  } 
 
  getCopies(): number { 
    return this.copies; 
  } 
 
  setCopies(copies: number): void { 
    this.copies = copies; 
  } 
} 
 
class Book extends Publisher { 
  pages: number; 
 
  constructor(title: string, author: string, pubYear: number, copies: number, pages: number) { 
    super(title, author, pubYear, copies); 
    this.pages = pages; 
  } 
 
  getPages(): number { 
    return this.pages; 
  } 
 
  setPages(pages: number): void { 
    this.pages = pages; 
  } 
} 
 
class Magazine extends Publisher { 
  issue: number; 
 
  constructor(title: string, author: string, pubYear: number, copies: number, issue: number) { 
    super(title, author, pubYear, copies); 
    this.issue = issue; 
  } 
 
  getIssue(): number { 
    return this.issue; 
  } 
 
  setIssue(issue: number): void { 
    this.issue = issue; 
  } 
} 
 
interface Reception { 
  delivery(publisher: Publisher): void; 
  receive(publisher: Publisher): void; 
} 
 
class Reader { 
  firstName: string; 
  lastName: string; 
  items: object[]; 
 
  constructor(firstName: string, lastName: string, items: object[]) { 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.items = items; 
  } 
 
  getFirstName(): string { 
    return this.firstName; 
  } 
 
  setFirstName(firstName: string): void { 
    this.firstName = firstName; 
  } 
 
  getLastName(): string { 
    return this.lastName; 
  } 
 
  setLastName(lastName: string): void { 
    this.lastName = lastName; 
  } 
 
  getItems(): object[] { 
    return this.items; 
  } 
 
  setItems(items: string): void { 
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
  private publications: object[]; 
 
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
