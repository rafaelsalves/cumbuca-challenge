import React, { useState } from 'react'
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native'

import Icon from '@components/Icon'

import {
    Container,
    TitleText,
    TextInputWrapper,
    ButtonVisiblePassword,
    TextInputContainer,
    ErrorText,
    IconView,
} from './style'
import { isEmpty } from '@helpers/functions'

export interface TextInputComponentProps {
    title?: string
    value: string
    error?: string
    textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | undefined
    placeholderTextColor?: string
    keyboardType?: KeyboardTypeOptions
    placeholder?: string
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
    underlineColorAndroid?: string
    secureTextEntry?: boolean
    editable?: boolean
    height?: number
    autoCorrect?: boolean
    autoComplete?:
    | 'additional-name'
    | 'address-line1'
    | 'address-line2'
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'country'
    | 'current-password'
    | 'email'
    | 'family-name'
    | 'gender'
    | 'given-name'
    | 'honorific-prefix'
    | 'honorific-suffix'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'new-password'
    | 'nickname'
    | 'one-time-code'
    | 'organization'
    | 'organization-title'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'url'
    | 'username'
    | 'username-new'
    | 'off'
    | undefined;
    spellCheck?: boolean
    onChangeText: (text: string) => void
    returnKeyType?: ReturnKeyTypeOptions
    multiline?: boolean
    numberOfLines?: number
    maxLength?: number
    onSubmitEditing?: () => void
    onBlur?: () => void
    ref?: any
}

const TextInputComponent = React.forwardRef(
    (props: TextInputComponentProps, ref) => {
        const {
            title = '',
            value = '',
            error = '',
            autoCorrect = false,
            autoComplete = 'off',
            spellCheck = false,
            textContentType = 'oneTimeCode',
            placeholderTextColor = 'transparent',
            keyboardType = 'default',
            placeholder = '',
            autoCapitalize = 'none',
            underlineColorAndroid = 'transparent',
            secureTextEntry = false,
            editable = true,
            height = 38,
            onChangeText,
            returnKeyType = 'done',
            multiline = false,
            numberOfLines,
            maxLength,
            onSubmitEditing,
            onBlur,
        } = props

        const [isFocused, setFocus] = useState(false)
        const [showPassword, setShowPassword] = useState(false)
        const [alreadyFocus, setAlreadyFocus] = useState(false)

        const onChangeFocus = state => {
            setFocus(state)
            setAlreadyFocus(true)

            if (!state && onBlur) {
                onBlur()
            }
        }

        return (
            <Container>
                <TitleText isFocused={isFocused}>{title}</TitleText>
                <TextInputContainer height={height} isFocused={isFocused} hasError={!isEmpty(error)}>
                    <TextInputWrapper
                        ref={ref}
                        autoComplete={autoComplete}
                        autoCorrect={autoCorrect}
                        spellCheck={spellCheck}
                        inputAccessoryViewID="hideDoneButton"
                        textContentType={textContentType}
                        secureTextEntry={secureTextEntry && !showPassword}
                        value={value}
                        editable={editable}
                        onFocus={() => onChangeFocus(true)}
                        onBlur={() => onChangeFocus(false)}
                        onChangeText={typedText => onChangeText(typedText)}
                        placeholderTextColor={placeholderTextColor}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        autoCapitalize={autoCapitalize}
                        underlineColorAndroid={underlineColorAndroid}
                        returnKeyType={returnKeyType}
                        onSubmitEditing={onSubmitEditing}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        maxLength={maxLength}
                    />
                    {secureTextEntry && (
                        <ButtonVisiblePassword
                            onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                name={showPassword ? 'eyeOpened' : 'eyeClosed'}
                                width={18}
                                height={16}
                            />
                        </ButtonVisiblePassword>
                    )}
                    {alreadyFocus &&
                        !isFocused &&
                        error !== '' &&
                        !secureTextEntry && (
                            <IconView>
                                <Icon name="caution" width={20} />
                            </IconView>
                        )}
                </TextInputContainer>
                <ErrorText>
                    {alreadyFocus && !isFocused && error !== '' ? error : ''}
                </ErrorText>
            </Container>
        )
    },
)

export default TextInputComponent
