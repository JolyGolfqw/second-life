const initialState = {
	items: [],
	err: null,
	loading: false
}

export default function shelters(state = initialState, action) {
	switch (action.type) {
		case 'shelters/get/fulfilled':
			return {
				...state, 
				items: action.payload
			};
		case 'shelters/get/pending':
			return {
				...state,
				loading: true
			};
		case 'shelters/get/rejected':
			return {
				...state,
				error: action.payload
			}
		
		default:
			return state;
	}
}
