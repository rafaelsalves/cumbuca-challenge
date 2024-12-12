import styled from 'styled-components/native'

import { fontFamily } from '@helpers/constants'

type TextProps = {
    fontSize?: number
    color?: string
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number
    textAlign?: 'center' | 'left' | 'right'
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    underline?: boolean
}

export const Text = styled.Text<TextProps>`
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: ${({ fontWeight }) => fontWeight};
    font-family: ${fontFamily};
    color: ${({ color }) => color};
    text-align: ${({ textAlign }) => textAlign};
    margin-top: ${({ marginTop }) => marginTop}px;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    margin-left: ${({ marginLeft }) => marginLeft}px;
    text-decoration-line: ${({ underline }) => underline ? 'underline' : 'none'};
`
