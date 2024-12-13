import Toast from 'react-native-toast-message'
import { CommonActions } from '@react-navigation/native'
import removeAccents from 'remove-accents'
import { MaskService } from 'react-native-masked-text'

/**
 * @param {Object} toast
 * @param {string} toast.title
 * @param {string} toast.message
 * @param {('success'|'info'|'error')} toast.type
 * @param {boolean} toast.autoHide
 * @param {Object} toast.options
 */
export const showToast = ({
	title = '',
	message = '',
	type = 'error',
	autoHide = true,
	options = {}
}) => {
	Toast.show({
		autoHide,
		topOffset: 60,
		type,
		text1: title,
		text2: message,
		...options
	})
}

export const isEmpty = (obj: any) => {
	const hasOwnProperty = Object.prototype.hasOwnProperty;
	if (obj === undefined) return true;
	if (obj === null) return true;
	if (obj.length > 0) return false;
	if (obj.length === 0) return true;
	if (typeof obj !== "object") return true;
	for (var key in obj) {
		if (hasOwnProperty.call(obj, key)) return false;
	}

	return true;
}

export const convertStringToLowerCaseAndRemovedAccents = (text) => {
	return removeAccents(text.toLowerCase())
}

export const resetStack = (navigation, initialRoute, params = {}) => {
	navigation.dispatch(
		CommonActions.reset({
			index: 1,
			routes: [{ name: initialRoute, params }]
		})
	)
}

export const convertToClearedString = (value: string) => {
	return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const isValidCPF = (text: string): boolean => {
	return MaskService.isValid('cpf', text)
}

export const formatToMoney = (value: number) => {
	return MaskService.toMask('money', (`${value}`), {
		precision: 2,
		separator: ',',
		delimiter: '.',
		unit: 'R$',
		suffixUnit: ''
	})
}