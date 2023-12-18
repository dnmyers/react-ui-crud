/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { USERS_API_URL } from "../../constants";

const RegistrationForm = ({
    user,
    addUserToState,
    updateUserInState,
    toggle,
}) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (user) {
            const { id, name, document, email, phone } = user;
            setId(id);
            setName(name);
            setDocument(document);
            setEmail(email);
            setPhone(phone);
        }
    }, [user]);

    const onChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "name":
                setName(value);
                break;
            case "document":
                setDocument(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                break;
        }
    };

    const submitNew = (e) => {
        e.preventDefault();

        fetch(`${USERS_API_URL}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                document,
                email,
                phone,
            }),
        })
            .then((res) => res.json())
            .then((user) => {
                addUserToState(user);
                toggle();
            })
            .catch((err) => console.log(err));
    };

    const submitEdit = (e) => {
        e.preventDefault();

        fetch(`${USERS_API_URL}/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                document,
                email,
                phone,
            }),
        })
            .then(() => {
                toggle();
                updateUserInState(id);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Form onSubmit={user ? submitEdit : submitNew}>
            <FormGroup>
                <Label for='name'>Name:</Label>
                <Input
                    type='text'
                    name='name'
                    value={name === "" ? "" : name}
                    onChange={onChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for='document'>Document:</Label>
                <Input
                    type='text'
                    name='document'
                    value={document === null ? "" : document}
                    onChange={onChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for='email'>Email:</Label>
                <Input
                    type='email'
                    name='email'
                    value={email === null ? "" : email}
                    onChange={onChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for='phone'>Phone:</Label>
                <Input
                    type='text'
                    name='phone'
                    value={phone === null ? "" : phone}
                    onChange={onChange}
                    placeholder='+1 999-999-9999'
                />
            </FormGroup>
            <Button color='primary'>Send</Button>
        </Form>
    );
};

export default RegistrationForm;
