import { initialState, messagesReduser } from '../reducer';

describe('messagesReduser', () => {

  it('вызов редьюсера без экшена вернет initialState', () => {
    const result = messagesReduser();

    expect(result).toEqual(initialState);
  });

})