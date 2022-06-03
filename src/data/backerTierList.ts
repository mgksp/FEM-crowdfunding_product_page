interface iBackerTierList {
  title: string;
  subtitle: string;
  description: string;
  stockLeft: number;
}

export const backerTierList: iBackerTierList[] = [
  {
    title: "Bamboo Stand",
    subtitle: "Pledge $25 or more",
    description: `You get an ergonomic stand made of natural bamboo. You&apos;ve
    helped us launch our promotional campaign, and you&apos;ll be
    added to a special Backer member list.`,
    stockLeft: 101,
  },
  {
    title: "Black Edition Stand",
    subtitle: "Pledge $75 or more",
    description: `You get a Black Special Edition computer stand and a personal
    thank you. You&apos;ll be added to our Backer member list.
    Shipping is included.`,
    stockLeft: 64,
  },
  {
    title: "Mahogany Special Edition",
    subtitle: "Pledge $200 or more",
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt,
    and a personal thank you. You&apos;ll be added to our Backer
    member list. Shipping is included.`,
    stockLeft: 0,
  },
];
