import { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import DataTable from "../DataTable/DataTable";
import RegistrationModal from "../form/RegistrationModal";
import { USERS_API_URL } from "../../constants";

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        fetch(USERS_API_URL)
            .then((res) => res.json())
            .then((res) => setItems(res))
            .catch((err) => console.log(err));
    };

    const addUserToState = (user) => {
        setItems((prev) => [...prev, user]);
    };

    // eslint-disable-next-line no-unused-vars
    const updateState = (_id) => {
        getItems();
    };

    const deleteItemFromState = (id) => {
        const updated = items.filter((item) => item.id !== id);
        setItems(updated);
    };

    return (
        <Container style={{ paddingTop: "100px" }}>
            <Row>
                <Col>
                    <h3>My First React + ASP.NET CRUD App</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataTable
                        items={items}
                        updateState={updateState}
                        deleteItemFromState={deleteItemFromState}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <RegistrationModal
                        isNew={true}
                        addUserToState={addUserToState}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
