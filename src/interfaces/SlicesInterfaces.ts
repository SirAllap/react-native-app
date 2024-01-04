import { ILogin } from './LoginInterfaces'

export interface IUserInfo {
	email: string
	name: string
	role: string
	photo: string
}

export type ILoginState = {
	loginInfo: IUserInfo
	status: 'idle' | 'pending' | 'rejected' | 'fulfilled'
	error: string | null
}
