/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import RegistrationForm from "./RegistrationForm";

const RegistrationModal = ({
    isNew,
    addUserToState,
    updateUserInState,
    user,
}) => {
    const [modal, setModal] = useState(false);

    let title = "Edit User";
    let button = "";

    const toggle = () => {
        setModal((prev) => !prev);
    };

    if (isNew) {
        title = "Add User";
        button = (
            <Button
                color='success'
                onClick={toggle}
                style={{ minWidth: "200px" }}
            >
                Add
            </Button>
        );
    } else {
        button = (
            <Button color='warning' onClick={toggle}>
                Edit
            </Button>
        );
    }

    return (
        <>
            {button}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <RegistrationForm
                        addUserToState={addUserToState}
                        updateUserInState={updateUserInState}
                        toggle={toggle}
                        user={user}
                    />
                </ModalBody>
            </Modal>
        </>
    );
};

export default RegistrationModal;
