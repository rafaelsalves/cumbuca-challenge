import TextComponent from "@components/TextComponent"

import { Button, Container } from "./style"

const SettingsView = (props) => {
    const {
        onPressLogout
    } = props
    return (
        <Container>
            <Button onPress={onPressLogout}>
                <TextComponent fontWeight={'bold'}>Sair</TextComponent>
            </Button>
        </Container>
    )
}

export default SettingsView