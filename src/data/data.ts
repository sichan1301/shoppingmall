import {clothesType} from './dataType';
import {v4 as uuidv4} from 'uuid';

export const category:string[] = ["전체","셔츠", "바지", "아우터"]

export const clothes:clothesType[] =  [
  {
    id:uuidv4(),
    name:"메탈 벤트 테크 숏슬리브 셔츠 2.0",
    price:58000,
    imgSrc : "shirts.jpg",
    category: "셔츠",
  },
  {
    id:uuidv4(),
    name:"ABC 풀온 팬츠 27",
    price:18400,
    imgSrc : "pants.jpg",
    category: "바지"
  },
  {
    id:uuidv4(),
    name:"다운 포 잇 올 베스트",
    price:139000,
    imgSrc : "jacket.jpg",
    category: "아우터"
  },
  
  {
    id:uuidv4(),
    name:"메탈 벤트 테크 숏슬리브 셔츠 2.0",
    price:65000,
    imgSrc : "shirts.jpg",
    category: "셔츠"
  },
  {
    id:uuidv4(),
    name:"ABC 풀온 팬츠 27",
    price:29000,
    imgSrc : "pants.jpg",
    category: "바지"
  },
  {
    id:uuidv4(),
    name:"다운 포 잇 올 베스트",
    price:109000,
    imgSrc : "jacket.jpg",
    category: "아우터"
  },
  {
    id:uuidv4(),
    name:"메탈 벤트 테크 숏슬리브 셔츠 2.0",
    price:70000,
    imgSrc : "shirts.jpg",
    category: "셔츠"
  },
  {
    id:uuidv4(),
    name:"ABC 풀온 팬츠 27",
    price:84000,
    imgSrc : "pants.jpg",
    category: "바지"
  },
  {
    id:uuidv4(),
    name:"다운 포 잇 올 베스트",
    price:99000,
    imgSrc : "jacket.jpg",
    category: "아우터"
  },

]