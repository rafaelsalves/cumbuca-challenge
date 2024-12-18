import React from 'react'
import {
    G,
    Path,
} from 'react-native-svg'

type IconType = {
    svg: JSX.Element
    viewBox: string
}

export type IconName = 'caution' |
    'arrowRightWithCircle' |
    'error' |
    'eyeOpened' |
    'eyeClosed' |
    'info' |
    'logout' |
    'menu'

const icons: Record<string, IconType> = {
    caution: {
        svg: (
            <G>
                <Path
                    fill="#FF7E7E"
                    d="M148.285 35.701L114.3 1.717C113.2.617 111.71 0 110.156 0H39.844C38.29 0 36.8.617 35.7 1.717L1.717 35.7C.617 36.8 0 38.29 0 39.844v70.312c0 1.554.617 3.044 1.717 4.143L35.7 148.283c1.099 1.1 2.589 1.717 4.143 1.717h70.312c1.554 0 3.044-.617 4.144-1.717l33.985-33.984c1.098-1.099 1.715-2.589 1.715-4.143V39.844c0-1.554-.617-3.044-1.715-4.143zm-10.004 72.028l-30.552 30.552H42.271L11.719 107.73V42.271L42.27 11.719h65.458l30.552 30.552v65.458zM80.86 32.031v62.5c0 3.236-2.623 5.859-5.859 5.859-3.236 0-5.86-2.623-5.86-5.86v-62.5c0-3.236 2.624-5.859 5.86-5.859s5.86 2.625 5.86 5.86zm0 85.938c0 3.237-2.623 5.86-5.859 5.86-3.236 0-5.86-2.623-5.86-5.86 0-3.236 2.624-5.86 5.86-5.86s5.86 2.624 5.86 5.86z"
                />
            </G>
        ),
        viewBox: '0 0 150 150',
    },
    arrowRightWithCircle: {
        svg:
            <G filter="url(#filter0_d_152_1936)">
                <Path
                    d="M14.9225 17H27.0775"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill={'none'}
                />
                <Path
                    d="M22.105 12.0275L27.0775 17L22.105 21.9725"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill={'none'}
                />
            </G>,
        viewBox: '0 0 42 42'
    },
    error: {
        svg:
            <G>
                <Path
                    d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                    stroke="#F5441D"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    fill={'none'}
                />
                <Path
                    d="M12.5 7.5L7.5 12.5"
                    stroke="#F5441D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M12.5 12.5L7.5 7.5"
                    stroke="#F5441D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>,
        viewBox: '0 0 20 20'
    },
    eyeOpened: {
        svg: (
            <G>
                <Path
                    d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
                    fill="gray"
                />
            </G>
        ),
        viewBox: '0 0 22 16',
    },
    eyeClosed: {
        svg: (
            <G>
                <Path
                    d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z"
                    fill="gray"
                />
            </G>
        ),
        viewBox: '0 0 24 24',
    },
    info: {
        svg: (
            <G>
                <Path
                    d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    fill={'transparent'}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
        ),
        viewBox: '0 0 24 24'
    },
    logout: {
        svg: (
            <G>
                <Path
                    d="M12.6667 13.4583L16.625 9.5M16.625 9.5L12.6667 5.54167M16.625 9.5H7.125M7.125 2.375H6.175C4.84488 2.375 4.17981 2.375 3.67177 2.63386C3.22489 2.86156 2.86156 3.22489 2.63386 3.67177C2.375 4.17981 2.375 4.84488 2.375 6.175V12.825C2.375 14.1551 2.375 14.8202 2.63386 15.3282C2.86156 15.7751 3.22489 16.1384 3.67177 16.3661C4.17981 16.625 4.84488 16.625 6.175 16.625H7.125"
                    stroke="#F35151"
                    fill={'transparent'}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
        ),
        viewBox: '0 0 19 19',
    },
    menu: {
        svg: (
            <G>
                <Path
                    d="M3 12H21M3 6H21M9 18H21"
                    stroke="#256AE3"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
        ),
        viewBox: '0 0 24 24'
    },
}

export default icons