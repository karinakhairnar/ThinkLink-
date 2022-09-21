import React from 'react';
import styles from './main.module.css';
import { useState } from 'react';
export const Dashboard = () => {
  const [isActive, setIsActive] = useState(true);
  const [invo, setInvo] = useState(false);
  const [order, setOrder] = useState(false);
  const [custom, setCustom] = useState(false);
  const [report, setReport] = useState(false);
  const [setting, setSetting] = useState(false);
  const handleDash = () => {
    setIsActive(true);
    setInvo(false);
    setOrder(false);
    setReport(false);
    setCustom(false);
    setSetting(false);
  };
  const handleOrder = () => {
    setIsActive(false);
    setInvo(false);
    setOrder(true);
    setReport(false);
    setCustom(false);
    setSetting(false);
  };
  const handleInvo = () => {
    setIsActive(false);
    setInvo(true);
    setOrder(false);
    setReport(false);
    setCustom(false);
    setSetting(false);
  };
  const handleCustom = () => {
    setIsActive(false);
    setInvo(false);
    setOrder(false);
    setReport(false);
    setCustom(true);
    setSetting(false);
  };
  const handleReport = () => {
    setIsActive(false);
    setInvo(false);
    setOrder(false);
    setReport(true);
    setCustom(false);
    setSetting(false);
  };
  const handleSetting = () => {
    setIsActive(false);
    setInvo(false);
    setOrder(false);
    setReport(false);
    setCustom(false);
    setSetting(true);
  };

  return (
    <div className={styles.dash_main}>
      <div
        className={styles.dash}
        style={{
          backgroundColor: isActive ? '#f7f1f3' : '',
          color: isActive ? '#811434' : '',
          border: isActive ? '1px solid #811434' : '',
        }}
        onClick={handleDash}>
        <img src='https://store-images.s-microsoft.com/image/apps.19708.13905095937073278.3535a7d7-2d14-4a6d-be50-ebf19b65471f.76bb08db-1422-4c9d-bc5e-14bc3dfa7efe' />
        <p>Dashboard</p>
      </div>
      <div
        className={styles.dash}
        style={{
          backgroundColor: invo ? '#f7f1f3' : '',
          color: invo ? '#811434' : '',
          border: invo ? '1px solid #811434' : '',
        }}
        onClick={handleInvo}>
        <img src='https://www.shutterstock.com/image-vector/inventory-concept-icon-color-line-600w-1908716065.jpg' />
        <p>Inoventory</p>
      </div>
      <div
        className={styles.dash}
        style={{
          backgroundColor: order ? '#f7f1f3' : '',
          color: order ? '#811434' : '',
          border: order ? '1px solid #811434' : '',
        }}
        onClick={handleOrder}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIVTBQtiEcGcmz61lh08uf4BYCWyxj-69rQ&usqp=CAU' />
        <p>Orders</p>
      </div>
      <div
        className={styles.dash}
        style={{
          backgroundColor: custom ? '#f7f1f3' : '',
          color: custom ? '#811434' : '',
          border: custom ? '1px solid #811434' : '',
        }}
        onClick={handleCustom}>
        <img src='https://cdn1.vectorstock.com/i/thumb-large/56/65/returning-client-icon-customers-interaction-vector-31005665.jpg' />
        <p>Customers</p>
      </div>
      <div
        className={styles.dash}
        style={{
          backgroundColor: report ? '#f7f1f3' : '',
          color: report ? '#811434' : '',
          border: report ? '1px solid #811434' : '',
        }}
        onClick={handleReport}>
        <img src='https://static.psa.gov.in/psa-prod/publication/Report%20logo.png' />
        <p>Reports</p>
      </div>
      <div
        className={styles.dash}
        style={{
          backgroundColor: setting ? '#f7f1f3' : '',
          color: setting ? '#811434' : '',
          border: setting ? '1px solid #811434' : '',
        }}
        onClick={handleSetting}>
        <img src='https://img.favpng.com/5/1/8/logo-setting-png-favpng-2bV5C3tpD4hJJFSR5YsVDrWt4.jpg' />
        <p>Settings</p>
      </div>
    </div>
  );
};
