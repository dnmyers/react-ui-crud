/* eslint-disable react/prop-types */
import { Table, Button } from "reactstrap";

import RegistrationModal from "../form/RegistrationModal";
import { USERS_API_URL } from "../../constants";

const DataTable = ({ deleteItemFromState, items, updateState }) => {
    const deleteItem = (id) => {
        let confirmDeletion = window.confirm(
            "Do you really wish to delete it?"
        );

        if (confirmDeletion) {
            fetch(`${USERS_API_URL}/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                // eslint-disable-next-line no-unused-vars
                .then((_res) => {
                    deleteItemFromState(id);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <Table striped>
            <thead className='thead-dark'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Document</th>
                    <th>Phone</th>
                    <th style={{ textAlign: "center" }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {!items || items.length <= 0 ? (
                    <tr>
                        <td colSpan='6' align='center'>
                            <b>No Users Yet</b>
                        </td>
                    </tr>
                ) : (
                    items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th scope='row'>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.document}</td>
                                <td>{item.phone}</td>
                                <td align='center'>
                                    <div>
                                        <RegistrationModal
                                            isNew={false}
                                            user={item}
                                            updateUserInState={updateState}
                                        />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button
                                            color='danger'
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                )}
            </tbody>
        </Table>
    );
};

export default DataTable;
