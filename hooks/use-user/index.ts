import { useContext } from 'react';

import UserContext, { IUserContext } from '../../context/user';

const useUser = (): IUserContext => useContext(UserContext);

export default useUser;
