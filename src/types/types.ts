export type Token = string | null;

export interface ISignupBody {
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
}

// Signup Response does not contain a body upon successful registration
// tslint:disable-next-line: no-empty-interface
export interface ISignupResponse {}

export interface ILoginBody {
	email: string;
	password: string;
}

export interface ILoginResponse {
	accessToken: string;
	refreshToken: string;
}

export interface ICreateLogbookBody {
	timestamp: string;
	insulinDose: number;
	bloodGlucose: number;
}

interface ILogbook {
	id: number;
	timestamp: string;
	insulinDose: number;
	bloodGlucose: number;
	userId: number;
}

export interface IGetLogbookResponse {
	logbooks: Array<ILogbook>;
	pageCount: number;
}
