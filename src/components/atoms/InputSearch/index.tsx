import {
   forwardRef,
   InputHTMLAttributes,
   ForwardRefRenderFunction,
   useState
} from 'react'

import * as S from './styles'

export type TextFieldProps = {
   placeholder: string
   inputOnChange?: (value: string) => void
   defaultValue?: string
   error?: string
   inputOnFocus?: () => void
   inputOnBlur?: () => void
   label?: string
   isRequired?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
   {
      placeholder,
      inputOnChange,
      error,
      inputOnFocus,
      inputOnBlur,
      defaultValue,
      ...rest
   },
   ref
) => {
   const [value, setValue] = useState('')
   const [filled, setFilled] = useState(false)
   const [focused, setFocused] = useState(false)

   const handleOnFocus = () => {
      setFocused(true)

      !!inputOnFocus && inputOnFocus()
   }

   const handleOnBlur = () => {
      setFocused(false)
      setFilled(!!value)

      !!inputOnBlur && inputOnBlur()
   }

   const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)

      !!inputOnChange && inputOnChange(event.currentTarget.value)
   }

   return (
      <S.Container>
         <S.Wrapper filled={filled} focused={focused} error={!!error}>
            <S.Input
               placeholder={placeholder}
               onKeyUp={(event) => handleOnChange(event)}
               onFocus={() => handleOnFocus()}
               onBlurCapture={() => handleOnBlur()}
               ref={ref}
               {...(!!defaultValue && { defaultValue: defaultValue })}
               {...rest}
            />
         </S.Wrapper>
      </S.Container>
   )
}

export const InputSearch = forwardRef(InputBase)
