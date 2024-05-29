import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/beach_cat.jpg",
    label: "JABALPUR",
    icon: <TbBeach />,
    description: "This property is close to the Jabalpur!",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "BHOPAL",
    icon: <GiWindmill />,
    description: "This property is has Bhopal!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "INDORE",
    icon: <MdOutlineVilla />,
    description: "This property is Indore!",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "BANGLORE",
    icon: <TbMountain />,
    description: "This property is in the Banglore!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "PUNE",
    icon: <TbPool />,
    description: "This is property has a beautiful pool!",
  },
  {
    img: "assets/island_cat.webp",
    label: "AGRA",
    icon: <GiIsland />,
    description: "This property is on the Tajmahal",
  },
  {
    img: "assets/lake_cat.webp",
    label: "DELHI",
    icon: <GiBoatFishing />,
    description: "This property is near a Red-Fort!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "MUMBAI",
    icon: <FaSkiing />,
    description: "This property has skiing activies!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "GUJARAT",
    icon: <GiCastle />,
    description: "This property is an Narendra Modi stadium!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "AMTITSAR",
    icon: <GiCaveEntrance />,
    description: "This property is in a Golden temple!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "JAIPUR",
    icon: <GiForestCamp />,
    description: "This property is near by Hawa Mahal!",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "ODISHA",
    icon: <BsSnow />,
    description: "This property is in Jagannath Temple!",
  },
  {
    img: "assets/desert_cat.webp",
    label: "SIKAR",
    icon: <GiCactus />,
    description: "This property is in the KHATU SHYAM TEMPLE!",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "AJMER",
    icon: <GiBarn />,
    description: "This property is in a DARGAH!",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "AYODHYA",
    icon: <IoDiamond />,
    description: "This property is near by shree Ram Temple!",
  },
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];
