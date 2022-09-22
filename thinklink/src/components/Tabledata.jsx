import React from 'react';
import data from './db';
import { Table } from 'react-bootstrap';
import styles from './main.module.css';
export const Tabledata = () => {
  return (
    <div
      className={styles.table_main}
      style={{ width: '60%', marginLeft: '20%', marginTop: '30px' }}>
      <h5>Inventory</h5>
      <Table
        striped
        bordered
        hover
        size='sm'
        style={{ fontSize: '13px', marginRight: '25px', marginTop: '20px' }}>
        <thead>
          <tr>
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

                  <label>
                    {el.name}
                    <br />
                    {el.name1}
                  </label>
                </td>
                <td>{el.Rating}</td>
                <td>{el.VINTAGE}</td>
                <td>{el.QTY}</td>
                <td>{el.VOLUME}</td>
                <td>{el.COST}</td>
                <td>{el.PRICE}</td>
                <img
                  heigth='20px'
                  width='35px'
                  src='https://banner2.cleanpng.com/20180712/lej/kisspng-arrow-down-computer-icons-drop-down-list-pfeil-symbol-5b47f7e7686699.9674250915314431754276.jpg'
               style={{marginTop:'25px'}} />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
