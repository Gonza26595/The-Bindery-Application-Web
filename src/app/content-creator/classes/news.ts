import { TheBinderyContent } from "./theBinderyContent";

export class News extends TheBinderyContent {

  newsDate:string;
  author:string;
  section:string;


  constructor(title:string,contentParagraph:string,newsDate:string,author:string,section:string,position:number){
    super(title,contentParagraph,position)
    this.newsDate = newsDate;
    this.author = author;
    this.section = section;
  }

}