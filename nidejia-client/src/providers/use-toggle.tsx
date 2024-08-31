import { useCallback, useState } from 'react'

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState)

  const toggle = useCallback(
    (): void => setState((state: boolean) => !state),
    []
  )
  return [state, toggle]
}
