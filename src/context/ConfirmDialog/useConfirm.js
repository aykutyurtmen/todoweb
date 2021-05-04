import { useContext } from 'react';
import {Context} from './ConfirmProvider';

const useConfirm = () => useContext(Context);

export default useConfirm;
