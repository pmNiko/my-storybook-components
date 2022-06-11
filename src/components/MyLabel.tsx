import "./myLabel.css";

type Size = "normal" | "h1" | "h2" | "h3";
type Color = "primary" | "secondary" | "tertiary";

export interface MyLabelProps {
  /**
   * Texto del label
   */
  label: string;
  /**
   * Tamaño del elemento
   */
  size: Size;
  /**
   * Capitalización de la palabra
   */
  allCaps: boolean;
  /**
   * Color del elemento
   */
  color: Color;
  /**
   * Color de fondo del label
   */
  customFontColor?: string;
  /**
   * Color de fondo del label
   */
  backgroundColor?: string;
  /**
   * clean CustomFontColor
   */
  cleanCustomColor: boolean;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  customFontColor,
  cleanCustomColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  customFontColor = cleanCustomColor ? "" : customFontColor;

  return (
    <span
      className={`label ${size} ${
        customFontColor !== "" ? "" : `text-${color}`
      }`}
      style={{ color: customFontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
