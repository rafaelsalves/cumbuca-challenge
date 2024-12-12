import styled from 'styled-components/native'

import colors from '@assets/colors'

interface WrapperActivityIndicatorProps {
	bgColor: string
}
export const WrapperActivityIndicator = styled.View<WrapperActivityIndicatorProps>`
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0px;
	left: 0px;
	top: 0px;
	bottom: 0px;
	background: ${(props) =>
		props.bgColor === 'transparent'
			? 'rgba(0, 0, 0, 0.6)'
			: props.bgColor};
`

export const ActivityIndicator = styled.ActivityIndicator.attrs((props) => ({
	size: props.size,
	color: props.color ? props.color : colors.BLACK,
	hidesWhenStopped: true,
	animating: true,
}))``


export const Modal = styled.Modal``