import React, { useState } from 'react';
import {
    Table,
    Col,
    Button
} from 'react-bootstrap';

import AutoComplete from '../../../components/search/autoComplete';
import ModalOrder from './modalOrder';


function ListData() {
    const [data, setData] = useState([]);

    const search = (value) => {
        setData(value);
    }

    return (
        <div>
            <div className="search">
                <Col md="6">
                    <AutoComplete
                        callback={search}
                        api='hospitals'

                    />
                </Col>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Hospital Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td><ModalOrder id={data.id} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default ListData;