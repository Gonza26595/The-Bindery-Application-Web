export abstract class TheBinderyContent {

id:number;
title:string;
contentParagraph:string;

  constructor(title:string, contentParagraph:string){
    this.title  =title;
    this.contentParagraph = contentParagraph;
  }
}