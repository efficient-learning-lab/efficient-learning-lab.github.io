export interface Member {
  id: string;
  name: string;
  position: string;
  homepage?: string;
  description?: string;
}

const members: Member[] = [
  {
    id: "@hankook",
    name: "Hankook Lee",
    position: "Professor",
    homepage: "/members/hankook",
  },
  {
    id: "@jaebin.lee",
    name: "Jaebin Lee",
    position: "MS",
  },
  {
    id: "@haemin.lee",
    name: "Haemin Lee",
    position: "MS",
  },
  {
    id: "@kangryun.moon",
    name: "Kangryun Moon",
    position: "MS",
  },
  {
    id: "@cheolseok.kang",
    name: "Cheolseok Kang",
    position: "MS",
  },
  {
    id: "@hyeonho.kim",
    name: "Hyeonho Kim",
    position: "MS",
  },
  {
    id: "@taewoo.you",
    name: "Taewoo You",
    position: "MS",
  },

  // Alumni
  {
    id: "@seoyoungp",
    name: "Seoyoung Park",
    position: "alumni",
    description: "(MS 2026), Samsung Electronics",
  },
];

export default members;
