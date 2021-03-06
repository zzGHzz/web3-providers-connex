'use strict';

export const Err = {
	MethodNotFound: (method: string) => {
		return new Error(`Method not supported: method=${method}`);
	},

	MethodParamNotSupported: (method: string, index: number) => {
		return new Error(`Parameter not supported: method=${method}, index=${index}`);
	},

	ArgumentMissingOrInvalid: (method: string, arg?: string) => {
		let err = `Argument missing or invalid: method=${method}`;
		if (arg) { err += `, arg=${arg}` };
		return new Error(err);
	},

	SubscriptionIdNotFound: (id: string) => {
		return new Error(`Subscription not found: id=${id}`);
	},

	SubscriptionAlreadyExist: (id: string) => {
		return new Error(`Subscription already exists: id=${id}`);
	},

	InvalidSubscriptionName: (name: string) => {
		return new Error(`Invalid subscription: name=${name}`);
	}
}