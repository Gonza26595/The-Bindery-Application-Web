import { TheBinderyContent } from "./theBinderyContent";

export class GalleryImage extends TheBinderyContent {

  author:string;

  constructor(title:string,contentParagraph:string,author:string,position:number){
    super(title,contentParagraph,position);
    this.author = author;
  }

}