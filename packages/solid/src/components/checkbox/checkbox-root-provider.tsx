import { mergeProps } from '@zag-js/solid'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import type { UseCheckboxReturn } from './use-checkbox'
import { CheckboxProvider } from './use-checkbox-context'

interface RootProviderProps {
  value: UseCheckboxReturn
}

export interface CheckboxRootProviderBaseProps extends PolymorphicProps<'label'> {}
export interface CheckboxRootProviderProps
  extends HTMLProps<'label'>,
    RootProviderProps,
    CheckboxRootProviderBaseProps {}

export const CheckboxRootProvider = (props: CheckboxRootProviderProps) => {
  const [{ value: checkbox }, labelprops] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(() => checkbox().getRootProps(), labelprops)

  return (
    <CheckboxProvider value={checkbox}>
      <ark.label {...mergedProps} />
    </CheckboxProvider>
  )
}
