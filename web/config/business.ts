export type BusinessInfo = {
    name: string;
    tagline: string;
    serviceArea: string;
    phone: {
        display: string;
        href: string;
    };
};

export const business: BusinessInfo = {
    name: "VisonGird Security LLC",

    tagline: "Protected. Connected. Always Secure.",

    serviceArea: "Tyler, Texas - East Texas",

    phone: {
        display: "(903) 474-7520",
        href: "tel:+19034747520",
    },
};