
import { ReactNode } from "react";

//Aquí ya vienen seteadas con el opcional.

export interface ClassNameProp{
    className?: string;
}

export interface LabelProp{
    label?: string;
}

export interface ChildrenProp{
    children?: ReactNode;
}

export interface AnyProp{
    [key:string]:any;
}