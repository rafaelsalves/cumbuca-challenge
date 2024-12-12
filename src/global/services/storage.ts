import { saveItemByKey, getItemByKey } from '@models/LocalStorageModel'

const keys = {
    auth: 'AUTH',
    avatar: 'AVATAR',
    user: 'USER',
    login: 'LOGIN',
    historyMaas: 'HISTORY_MAAS',
    historyCrashState: 'HISTORY_CRASH_STATE',
}

type AuthProps = {
    access_token: string
    refresh_token: string
}
export const setAuth = async (auth: AuthProps | string) => {
    await saveItemByKey(keys.auth, auth)
}

export const getAuth = async (): Promise<AuthProps> => {
    return await getItemByKey(keys.auth)
}

export const getToken = async (): Promise<string> => {
    const auth: AuthProps = await getItemByKey(keys.auth)

    return auth.access_token
}

export const getRefreshToken = async (): Promise<string> => {
    const auth: AuthProps = await getItemByKey(keys.auth)

    return auth.refresh_token
}

export const getHistoryMaas = async () => {
    const historyMaas = await getItemByKey(keys.historyMaas)
    return historyMaas
}

export const setHistoryMaas = async (maasList) => {
    await saveItemByKey(keys.historyMaas, maasList)
}

export const getHistoryCrashState = async () => {

    const historyCrashState = await getItemByKey(keys.historyCrashState)
    return historyCrashState
}

export const setHistoryCrashState = async (stateCrashList) => {
    await saveItemByKey(keys.historyCrashState, stateCrashList)
}

export const clear = async () => {
    await saveItemByKey(keys.auth, '')
    await saveItemByKey(keys.avatar, '')
}

export default {
    setAuth,
    getAuth,
    getToken,
    clear,
}
