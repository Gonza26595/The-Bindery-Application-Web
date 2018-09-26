import { TheBinderyContent } from "./theBinderyContent";

export class News extends TheBinderyContent {

  newsDate:string;
  author:string;
  section:string;
  position:number;

  constructor(title:string,contentParagraph:string,newsDate:string,author:string,section:string){
    super(title,contentParagraph)
    this.newsDate = newsDate;
    this.author = author;
    this.section = section;
  }

}