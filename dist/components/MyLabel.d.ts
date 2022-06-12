/// <reference types="react" />
import "./myLabel.css";
declare type Size = "normal" | "h1" | "h2" | "h3";
declare type Color = "primary" | "secondary" | "tertiary";
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
export declare const MyLabel: ({ label, size, allCaps, color, customFontColor, cleanCustomColor, backgroundColor, }: MyLabelProps) => JSX.Element;
export {};
