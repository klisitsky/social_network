export const SET_USER_DATA = 'SET_USER_DATA'
export const AUTH_STATUS_CHANGING = 'AUTH_STATUS_CHANGING'


export const setAuthUserData = (id: number, email: string, login: string) => ({
  type: SET_USER_DATA,
  payload: {
    data: {
      id,
      email,
      login
    }
  }
} as const)

export const AuthStatusChanging = () => ({
  type: AUTH_STATUS_CHANGING,
} as const)