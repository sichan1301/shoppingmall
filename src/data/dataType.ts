export interface clothesType {
  id:string,
  name:string,
  price:number,
  imgSrc:string,
  category:categoryType,
  color:string[],
  size:string[]
}


export type categoryType = "셔츠" | "바지" | "아우터"