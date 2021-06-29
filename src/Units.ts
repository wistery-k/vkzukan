export type Unit = {
    name: string;
    symbols: string[];
}

function u(name: string, symbols: string[]) {
    return { name, symbols };
}

export const YELLOW = 'Yellow_abb';
export const BLUE = 'Lightblue_abb';
export const RED = 'Red_abb';
export const BROWN = 'Brown_abb';
export const GREEN = 'Green_abb';
export const PINK = 'Pink_abb';
export const PURPLE = 'Purple_abb';
export const BLACK = 'Black_abb';
export const ORANGE = 'Orange_abb';
export const RANDOM_COLOR = 'Random2';
export const WHITE = 'White_abb';

export const JUSTICE = 'Justice';
export const CHARIOT = 'Chariot';
export const MAGICIAN = 'Magician';
export const SHIELD = 'Shield';
export const SUN = 'Sun';
export const WOODS = 'Woods';
export const MOON = 'Moon';
export const HUNGEDMAN = 'HungedMan';
export const FORTUNE = 'Fortune';
export const FOOL = 'Fool';
export const PLUM = 'Plum';
export const STAR = 'Star';
export const RANDOM_NONCOLOR = 'Random3';
export const TOWER = 'Tower';

export const SYMBOLS: string[] = [
    YELLOW,
    BLUE,
    RED,
    BROWN,
    GREEN,
    PINK,
    PURPLE,
    BLACK,
    ORANGE,
    RANDOM_COLOR,
    WHITE,
    JUSTICE,
    CHARIOT,
    MAGICIAN,
    SHIELD,
    SUN,
    WOODS,
    MOON,
    HUNGEDMAN,
    FORTUNE,
    FOOL,
    PLUM,
    STAR,
    RANDOM_NONCOLOR,
    TOWER
]

export const UNITS: Unit[] = [
    u('Heliodor', [YELLOW, JUSTICE]),
    u('Blues', [BLUE, CHARIOT]),
    u('Garnet', [RED, MAGICIAN]),
    u('KingdomSoldier', [BROWN, SHIELD]),
    u('KingdomArcher', [BROWN, SUN]),
    u('Sphen', [GREEN, WOODS]),
    u('Reddle', [RED, SUN]),
    u('Flint', [BROWN, CHARIOT]),
    u('Lapis', [BLUE, MOON]),
    u('Morgana', [PINK, WOODS]),
    u('Claude', [BLUE, SHIELD]),
    u('Gibeon', [CHARIOT, HUNGEDMAN]),
    u('Citrin', [YELLOW, FORTUNE]),
    u('Eleschal', [PURPLE, FOOL]),
    u('Kokyou', [BLACK, PLUM]),
    u('Spesa', [ORANGE, ORANGE]),
    u('Jade', [GREEN, MOON]),
    u('Libyan', [YELLOW, WOODS]),
    u('Dumol', [BLUE, HUNGEDMAN]),
    u('Carnelia', [ORANGE, SUN]),
    u('Zircon', [RANDOM_COLOR, RANDOM_NONCOLOR]),
    u('Amethyst', [PURPLE, MAGICIAN]),
    u('Jet', [BLACK, FOOL]),
    u('Kogyok', [RED, PLUM]),
    u('Gemsilica', [GREEN, WOODS]),
    u('Diamond', [WHITE, JUSTICE]),
    u('Rhodo', [PINK, JUSTICE]),
    u('Allin', [PURPLE, HUNGEDMAN]),
    u('Pinto', [PINK, STAR]),
    u('Tolphen', [YELLOW, MAGICIAN]),
    u('Jasper', [RED, TOWER]),
    u('Reno', [ORANGE, FOOL]),
    u('Selen', [PURPLE, TOWER]),
    u('Chrom', [GREEN, SHIELD]),
    u('Petri', [BROWN, JUSTICE]),
    u('Mosco', [RED, CHARIOT]),
    u('Amber', [ORANGE, FORTUNE]),
    u('Onyx', [BLACK, MOON]),
    u('Pappalachia', [PINK, MAGICIAN]),
    u('Leos', [BLACK, HUNGEDMAN]),
    u('Labra', [RANDOM_COLOR, RANDOM_NONCOLOR]),
    u('Sly', [PURPLE, MOON]),
    u('Morion', [BLACK, PLUM]),
    u('Bron', [BROWN, SHIELD]),
    u('Sun', [ORANGE, SUN]),
    u('Moon', [WHITE, MOON]),
    u('Sapphire', [BLUE, WOODS]),
    u('Rubella', [RED, FOOL]),
    u('Shirishia', [PINK, SUN]),
    u('Topaz', [YELLOW, TOWER]),
    u('Peridot', [GREEN, MAGICIAN]),
];