import * as CONSTANT from '../Constant';
import * as BALANCE from '../Constant/Balance';

export const fetchBalance = num => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [BALANCE.GET_BALANCE, BALANCE.GET_BALANCE_SUCCESS, BALANCE.GET_BALANCE_ERROR, BALANCE.GET_BALANCE_REQUESTED],
  args: [num],
});
