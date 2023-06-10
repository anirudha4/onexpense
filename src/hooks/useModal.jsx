import { ModalContext } from '@components/common/Modal'
import { useContext } from 'react'

const useModal = () => useContext(ModalContext);

export default useModal