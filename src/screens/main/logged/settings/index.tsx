import PathRoutes from "@routes/PathRoutes"

import SettingsView from "./view"

const Settings = (props) => {
    const navigation = props.navigation

    const onPressLogout = async () => {
        navigation.navigate(PathRoutes.SIGN_IN)
    }

    const viewProps = {
        onPressLogout
    }
    return <SettingsView {...viewProps} />
}

export default Settings