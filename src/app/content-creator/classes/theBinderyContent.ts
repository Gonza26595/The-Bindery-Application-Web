export abstract class TheBinderyContent {

id:number;
title:string;
contentParagraph:string;
position:number;

  constructor(title:string, contentParagraph:string, position:number){
    this.title  =title;
    this.contentParagraph = contentParagraph;
    this.position = position;
  }
}