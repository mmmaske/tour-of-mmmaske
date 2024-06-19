export interface Pet {
    id: string;
    name: string;
    display_badge: string;
    kingdom: string;
    species: string;
    birthday: Date;
    weight?: number;
    image?: string;
}