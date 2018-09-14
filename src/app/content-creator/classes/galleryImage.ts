import { TheBinderyContent } from "./theBinderyContent";

export class GalleryImage extends TheBinderyContent {

  author:string;

  constructor(title:string,contentParagraph:string,author:string){
    super(title,contentParagraph);
    this.author = author;
  }

}