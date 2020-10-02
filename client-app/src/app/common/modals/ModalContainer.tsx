import Modal from 'antd/lib/modal/Modal';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { RootStoreContext } from '../../stores/rootStore';

const ModalContainer = () => {

    const rootStore = useContext(RootStoreContext);
    const {modal:{open, body}, closeModal} = rootStore.modalStore;

    return (
        <>
            <Modal visible={open} onCancel={closeModal} centered={true} footer={null}>
                {body}
            </Modal>
        </>
    )
}

export default observer(ModalContainer);