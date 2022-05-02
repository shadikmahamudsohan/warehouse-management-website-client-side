import React from 'react';
import { AiFillDelete } from 'react-icons/ai'

const TableItem = ({ data, deleteData }) => {
    const { _id, name, img } = data;

    return (
        <tr >
            <td>
                <img src={img} style={{ maxWidth: '50px' }} className='' alt="" />
            </td>
            <td>{name}</td>
            <td onClick={() => deleteData(_id)} ><AiFillDelete size={25} className="text-danger" style={{ cursor: 'pointer' }} title="Delete this item" /></td>
        </tr >
    );
};

export default TableItem;