export const LIGHT_TEXT_COLOR = "#000";
export const DARK_TEXT_COLOR = "#FFF";

/**
 * Returns the primary and text color for the specified type.
 * @param {string} type The type to retrieve colors for.
 * @returns An object containing the primary and text colors for the type.
 */
export function getColorForType(type) {
  switch (type) {
    case "normal":
      return { primary: "#A8A77A", text: DARK_TEXT_COLOR };
    case "fighting":
      return { primary: "#C22E28", text: DARK_TEXT_COLOR };
    case "flying":
      return { primary: "#A98FF3", text: LIGHT_TEXT_COLOR };
    case "poison":
      return { primary: "#A33EA1", text: DARK_TEXT_COLOR };
    case "ground":
      return { primary: "#E2BF65", text: LIGHT_TEXT_COLOR };
    case "rock":
      return { primary: "#B6A136", text: LIGHT_TEXT_COLOR };
    case "bug":
      return { primary: "#A6B91A", text: DARK_TEXT_COLOR };
    case "ghost":
      return { primary: "#735797", text: DARK_TEXT_COLOR };
    case "steel":
      return { primary: "#B7B7CE", text: LIGHT_TEXT_COLOR };
    case "fire":
      return { primary: "#EE8130", text: LIGHT_TEXT_COLOR };
    case "water":
      return { primary: "#6390F0", text: DARK_TEXT_COLOR };
    case "grass":
      return { primary: "#7AC74C", text: LIGHT_TEXT_COLOR };
    case "electric":
      return { primary: "#F7D02C", text: LIGHT_TEXT_COLOR };
    case "psychic":
      return { primary: "#F95587", text: DARK_TEXT_COLOR };
    case "ice":
      return { primary: "#96D9D6", text: LIGHT_TEXT_COLOR };
    case "dragon":
      return { primary: "#6F35FC", text: DARK_TEXT_COLOR };
    case "dark":
      return { primary: "#705746", text: DARK_TEXT_COLOR };
    case "fairy":
      return { primary: "#D685AD", text: LIGHT_TEXT_COLOR };
    case "unknown":
    case "shadow":
    default:
      return { primary: "#000000", text: LIGHT_TEXT_COLOR };
  }
}
