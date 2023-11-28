import * as zagSwitch from '@zag-js/switch'
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/vue'
import { computed, type ComputedRef } from 'vue'
import { useEnvironmentContext } from '../environment'
import type { Optional } from '../types'
import { useId } from '../utils'

export interface UseSwitchProps extends Optional<zagSwitch.Context, 'id'> {
  modelValue?: zagSwitch.Context['checked']
}

export interface UseSwitchReturn extends ComputedRef<zagSwitch.Api<PropTypes>> {}

export const useSwitch = (props: UseSwitchProps, emit: CallableFunction): UseSwitchReturn => {
  const getRootNode = useEnvironmentContext()

  const context = computed(() => {
    const { modelValue, ...rest } = props
    return {
      ...rest,
      checked: modelValue,
    }
  })

  const [state, send] = useMachine(
    zagSwitch.machine({
      ...context.value,
      id: context.value.id || useId().value,
      getRootNode,
      onCheckedChange(details) {
        emit('checked-change', details)
        emit('update:modelValue', details.checked)
      },
    }),
    { context },
  )

  return computed(() => zagSwitch.connect(state.value, send, normalizeProps))
}
