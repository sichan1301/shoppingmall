import {clothesType} from './dataType';
import {v4 as uuidv4} from 'uuid';

export const category:string[] = ["전체","셔츠", "바지", "아우터"]

export const color:string[] = [""]
export const clothes:clothesType[] =  [
  {
    id:"1",
    name:"메탈 벤트 테크 숏슬리브 셔츠 2.0",
    price:58000,
    imgSrc : "shirts.jpg",
    category: "셔츠",
    color:["Cosmic Static Sonic Pink/Wild Berry","Cosmic Static Electric Lemon/Raw Linen"," Asphalt Grey/Rhino Grey","Mineral Blue/True Navy","Midnight Shadow/Tempest Blue"],
    size:["XS","S","M","L","XL","XXL"]
  },
  {
    id:"2",
    name:"ABC 풀온 팬츠 27",
    price:18400,
    imgSrc : "pants.jpg",
    category: "바지",
    color:["Bold Beige","Obsidian","Natural Ivory","Black","Army Green"],
    size:["M","L","XL","XXL"]
  },
  {
    id:"3",
    name:"다운 포 잇 올 베스트",
    price:139000,
    imgSrc : "jacket.jpg",
    category: "아우터",
    color:["Pink Peony"],
    size:["0","2","4","6","8","10","12"]
  },
  
  {
    id:"4",
    name:"밸런서 숏슬리브 셔츠",
    price:109000,
    imgSrc : "shirts2.jpg",
    category: "셔츠",
    color:["Heathered Wild Indigo","eathered Bone","Heathered Black"],
    size:["XS","S","M","L","XL","XXL"]
  },
  {
    id:"5",
    name:"릴랙스드 테이퍼드 트라우저",
    price:29000,
    imgSrc : "pants2.jpg",
    category: "바지",
    color:["Nomad","Trench","Bone","Black","Army Green","True Navy"],
    size:["M","L","XL","XXL"]
  },
  {
    id:"6",
    name:"패스트 앤 프리 재킷",
    price:198000,
    imgSrc : "jacket2.jpg",
    category: "아우터",
    color:["Pixel Diffuse Multi","Black","Wild Indigo"],
    size:["0","2","4","6","8","10","12"]
  },
  {
    id:"7",
    name:"앳 이즈 후디",
    price:139000,
    imgSrc : "shirts3.jpg",
    category: "셔츠",
    color:["Heathered Melody Light","Cassis","Psychic","Mineral Blue/True Navy","Heathered Powder Blue/White"],
    size:["XS","S","M","L","XL","XXL"]
  },
  {
    id:"8",
    name:"ABC 스키니 핏 조거 Warpstreme 온라인 한정",
    price:184000,
    imgSrc : "pants3.jpg",
    category: "바지",
    color:["Black","Grey Sage","True Navy","Obsidian"],
    size:["M","L","XL","XXL"]
  },
  {
    id:"9",
    name:"프리시피테이션 재킷",
    price:99000,
    imgSrc : "jacket3.jpg",
    category: "아우터",
    color:["Solar Orange","Black","Psychic"],
    size:["0","2","4","6","8","10","12"]
  },

]