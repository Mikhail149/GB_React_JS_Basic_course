export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_DATA = 'SET_DATA';

export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status,
});

export const setError = (status) => ({
    type: SET_ERROR,
    payload: status,
});

export const setData = (todos) => ({
    type: SET_DATA,
    payload: todos,
});

const userAPI = 'https://reqres.in/api/users?page=2';

export const getUserWithThunk = (page = 1) => async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(setData([]));

    try {
        const responce = await fetch(`https://reqres.in/api/users?page=${page}`);

        if (!responce.ok) {
            throw new Error('any error');
        }
        const result = await responce.json();
        dispatch(setData(result));
    } catch (error) {
        console.error(error);
        dispatch(setError(true))
    }

    dispatch(setLoading(false))
}