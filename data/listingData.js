import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { SimpleLineIcons } from "@expo/vector-icons";

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
  {
    id: 0,
    name: "Picnic table",
    icon: (
      <MaterialCommunityIcons
        name="table-picnic"
        size={24}
        color={COLORS.iconsLightGrey}
      />
    ),
  },
  {
    id: 1,
    name: "Camp fire",
    icon: (
      <MaterialCommunityIcons
        name="campfire"
        size={24}
        color={COLORS.iconsLightGrey}
      />
    ),
  },
  {
    id: 2,
    name: "Driking water",
    icon: (
      <MaterialCommunityIcons
        name="water-check-outline"
        size={24}
        color={COLORS.iconsLightGrey}
      />
    ),
  },
  {
    id: 3,
    name: "Pets allowed",
    icon: <MaterialIcons name="pets" size={24} color={COLORS.iconsLightGrey} />,
  },
  {
    id: 4,
    name: "Toilets",
    icon: (
      <MaterialCommunityIcons
        name="toilet"
        size={24}
        color={COLORS.iconsLightGrey}
      />
    ),
  },
  {
    id: 5,
    name: "Trash cans",
    icon: (
      <SimpleLineIcons name="trash" size={24} color={COLORS.iconsLightGrey} />
    ),
  },
];
