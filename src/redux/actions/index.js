export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI()); // Chamando a action responsável pelo Loading...
      const response = await fetch('https://aws.random.cat/meow');
      const data = await response.json();
      dispatch(getPicture(data)); // Enviar para a action o retorno da nossa APi
    } catch (error) {
      console.error(error);
    }
  }
};
