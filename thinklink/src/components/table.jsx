import React from 'react';
import data from './db';
import { Table } from 'react-bootstrap';
import styles from './main.module.css';
export const Tabledata = () => {
  return (
    <div
      className={styles.table_main}
      style={{ width: '80%', marginLeft: '20%', marginTop: '30px' }}>
      <h5>Inventory</h5>
      <Table
        striped
        bordered
        hover
        size='sm'
        style={{ fontSize: '13px', marginRight: '15px' }}>
        <thead>
          <tr>
            <input type='checkbox' />
            <th>PRODUCT</th>
            <th>RATING</th>
            <th>VINTAGE</th>
            <th>QTY</th>
            <th>VOLUME</th>
            <th>COST</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr>
                <input type='checkbox' />
                <td className={styles.product}>
                  <img src={el.img} />

                  <label style={{ marginLetf: '10px' }}>
                    {el.name}
                    <p>{el.name1}</p>
                  </label>
                </td>
                <td>{el.Rating}</td>
                <td>{el.VINTAGE}</td>
                <td>{el.QTY}</td>
                <td>{el.VOLUME}</td>
                <td>{el.COST}</td>
                <td>{el.PRICE}</td>
                <img
                  heigth='10px'
                  width='20px'
                  src='https://freepngimg.com/thumb/web_design/24747-5-down-arrow-transparent-picture.png'
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
