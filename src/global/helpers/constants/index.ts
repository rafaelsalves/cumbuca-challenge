import { Platform } from 'react-native'
import colors from '@assets/colors'

export const fontFamily = Platform.OS === 'ios' ? 'Inter' : 'Inter-Regular'

export const defaultHeaderStyle = {
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: colors.BACKGROUND_COLOR,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    headerTintColor: colors.BUTTON_COLOR,
    headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: fontFamily,
        fontSize: 16,
        color: colors.TEXT_COLOR
    },
    headerBackTitle: ' ',
    headerBackTitleStyle: { color: 'transparent' },
}

export const PERMISSIONS_TYPES = {
    USER: 'USER',
}

export const LEVELS = {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD',
}
