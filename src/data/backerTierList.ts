interface iBackerTierList {
  title: string;
  subtitle: string;
  description: string;
  stockLeft: number;
}

export const backerTierList: iBackerTierList[] = [
  {
    title: "Pledge with no reward",
    subtitle: "",
    description: `Choose to support us without a reward if you simply believe
    in our project. As a backer, you will be signed up to
    receive product updates via email.`,
    stockLeft: -1,
  },
  {
    title: "Bamboo Stand",
    subtitle: "Pledge $25 or more",
    description: `You get an ergonomic stand made of natural bamboo. You've
    helped us launch our promotional campaign, and you'll be
    added to a special Backer member list.`,
    stockLeft: 101,
  },
  {
    title: "Black Edition Stand",
    subtitle: "Pledge $75 or more",
    description: `You get a Black Special Edition computer stand and a personal
    thank you. You'll be added to our Backer member list.
    Shipping is included.`,
    stockLeft: 64,
  },
  {
    title: "Mahogany Special Edition",
    subtitle: "Pledge $200 or more",
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt,
    and a personal thank you. You'll be added to our Backer
    member list. Shipping is included.`,
    stockLeft: 0,
  },
];
