// actionType
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

// action
interface SendMessageAction {
	type: typeof SEND_MESSAGE;
	payload: Message;
}

interface DeleteMessageAction {
	type: typeof DELETE_MESSAGE;
	meta: {
		timestamp: number;
	}
}

// types
export interface Message {
	user: string;
	message: string;
	timestamp: string;
}

export interface ChatState {
	messages: Message[];
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;