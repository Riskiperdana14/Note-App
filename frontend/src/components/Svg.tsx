import { SvgXml } from 'react-native-svg';

export const PlusIcon = () => {
    const xml = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5833 18.4167H7.08334V15.5833H15.5833V7.08334H18.4167V15.5833H26.9167V18.4167H18.4167V26.9167H15.5833V18.4167Z" fill="white"/>
    </svg>`;

    return <SvgXml xml={xml} />;
};

export const CheckIcon = () => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.54998 18L3.84998 12.3L5.27498 10.875L9.54998 15.15L18.725 5.975L20.15 7.4L9.54998 18Z" fill="black"/>
    </svg> `;

    return <SvgXml xml={xml} />;
};
export const BackIcon = () => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="black"/>
    </svg>`;

    return <SvgXml xml={xml} />;
};
export const PenIcon = () => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.71 7.04C21.1 6.65 21.1 6 20.71 5.63L18.37 3.29C18 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87M3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25Z" fill="black"/>
    </svg>`;

    return <SvgXml xml={xml} />;
};
