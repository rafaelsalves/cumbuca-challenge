import { resetStack } from "@helpers/functions"

import PathRoutes from "@routes/PathRoutes"

import SettingsView from "./view"

const Settings = (props) => {
    const navigation = props.navigation

    const onPressLogout = async () => {
        resetStack(navigation, PathRoutes.SIGN_IN)
    }

    const viewProps = {
        onPressLogout
    }
    return <SettingsView {...viewProps} />
}

export default Settings