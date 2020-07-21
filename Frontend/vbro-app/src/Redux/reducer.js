const initState = {
	arr: [],
};

export function reducer(state = initState, action) {
	switch (action.type) {
		case "Add": {
			return {
				...state,
			};
		}
		default: {
			return { ...state };
		}
	}
}
