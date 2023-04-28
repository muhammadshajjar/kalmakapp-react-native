import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../constants";

export const SPACES = [
  {
    id: 0,
    name: "Camp",
    icon: <Fontisto name="tent" size={30} color={COLORS.iconsLightGrey} />,
  },
  {
    id: 1,
    name: "Camper/RV",
    icon: (
      <FontAwesome5 name="caravan" size={30} color={COLORS.iconsLightGrey} />
    ),
  },
];

export const FACILITIES = [
  { id: 0, name: "Picnic table" },
  { id: 1, name: "Camp fire" },
  { id: 2, name: "Driking water" },
  { id: 3, name: "Pets allowed" },
  { id: 4, name: "Toilets" },
  { id: 5, name: "Trash cans" },
];
