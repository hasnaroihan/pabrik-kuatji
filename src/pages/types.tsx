import Module from "module";
import { RefObject } from "react";

export type NavProp = {
    title: string;
    ref: RefObject<HTMLInputElement>;
    id: string;
};

export type SkillCard = {
    id: string | null;
    desc: string[];
    position: string;
    background: string;
};

export type ITProjectDesc = {
    src: string;
    title: string;
    link: string;
    desc: string;
    stack: string[];
    status: string;
    repo: string;
};
