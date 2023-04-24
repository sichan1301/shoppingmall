export interface clothesType {
  id:string,
  name:string,
  price:number,
  imgSrc:imgSrcType,
  category:categoryType
}



export type imgSrcType = "shirts.jpg" | "pants.jpg" | "jacket.jpg"
export type categoryType = "셔츠" | "바지" | "아우터"