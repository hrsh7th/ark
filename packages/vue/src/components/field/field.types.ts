export interface ElementIds {
  root?: string
  control?: string
  label?: string
  errorText?: string
  helperText?: string
}

export interface RootProps {
  /**
   * Indicates whether the field is disabled.
   */
  disabled?: boolean
  /**
   * The id of the field.
   */
  id?: string
  /**
   * The ids of the field parts.
   */
  ids?: ElementIds
  /**
   * Indicates whether the field is invalid.
   */
  invalid?: boolean
  /**
   * Indicates whether the field is read-only.
   */
  readOnly?: boolean
  /**
   * Indicates whether the field is required.
   */
  required?: boolean
}
