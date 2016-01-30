export const RECEIVE_DATA = "RECEIVE_DATA";
export const CLEAR_DATA = "CLEAR_DATA";

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    content: data
  };
}