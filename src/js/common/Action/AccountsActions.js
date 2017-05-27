import * as CONSTANT from '../Constant';
import * as ACCOUNTS from '../Constant/Accounts';


export const fetchAccount = () => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [ACCOUNTS.GET_ACCOUNTS, ACCOUNTS.GET_ACCOUNTS_SUCCESS, ACCOUNTS.GET_ACCOUNTS_ERROR],
});
