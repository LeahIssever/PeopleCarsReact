import React from "react";

export default function CarRow ({ car }) {
    const {make, model, year} = car;
    return (
        <tr>
            <td>{make}</td>
            <td>{model}</td>
            <td>{year}</td>
        </tr>
    )
}