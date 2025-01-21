import badge1 from "assets/images/Badges/1.png";
import badge2 from "assets/images/Badges/2.png";
import badge3 from "assets/images/Badges/3.png";

const LeagueRewardData = [
  {
    id: "id",
    rank: "Rank",
    coins: "Coins",
    diamond: "Diamonds",
    booster: "Boosters",
    dice: "Dice",
  }, //Header

  {
    id: 1,
    rank: badge1,
    coins: "10k",
    diamond: "1000",
    booster: "3 days",
    dice: true,
  },
  {
    id: 2,
    rank: badge2,
    coins: "10k",
    diamond: "1000",
    booster: "2 days",
    dice: true,
  },
  {
    id: 3,
    rank: badge3,
    coins: "10k",
    diamond: "1000",
    booster: "1 days",
    dice: false,
  },
  
];

export default LeagueRewardData;
