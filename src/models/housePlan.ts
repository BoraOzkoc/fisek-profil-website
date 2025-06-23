export interface HousePlan {
  id: number;
  name: string;
  size: string;
  beds: number;
  baths: number;
  image: string;
}

export const housePlans: HousePlan[] = [
  {
    id: 1,
    name: "Truoba 320",
    size: "2354 sq. ft.",
    beds: 3,
    baths: 2.5,
    image: "/images/truoba320.jpg",
  },
  {
    id: 2,
    name: "Truoba Mini 419",
    size: "1170 sq. ft.",
    beds: 2,
    baths: 2,
    image: "/images/truoba-mini-419.jpg",
  },
  {
    id: 3,
    name: "Truoba Mini 220",
    size: "570 sq. ft.",
    beds: 1,
    baths: 1,
    image: "/images/truoba-mini-220.jpg",
  },
];
