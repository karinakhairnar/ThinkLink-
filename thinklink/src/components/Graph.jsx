import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import styles from './main.module.css';

export const Graph = () => {
  const options = {
    animationEnabled: true,
    axisX: {
      valueFormatString: 'DDD',
    },
    axisY: {
      title: 'Sales (in USD)',
      prefix: '$',
    },
    data: [
      {
        yValueFormatString: '$#,##K',
        xValueFormatString: 'Week',
        type: 'spline',
        dataPoints: [
          { x: new Date(2022, 0), y: 25060 },
          { x: new Date(2022, 1), y: 27980 },
          { x: new Date(2022, 2), y: 42800 },
          { x: new Date(2022, 3), y: 32400 },
          { x: new Date(2022, 4), y: 35260 },
          { x: new Date(2022, 5), y: 33900 },
          { x: new Date(2022, 6), y: 40000 },
          { x: new Date(2022, 7), y: 52500 },
          { x: new Date(2022, 8), y: 32300 },
          { x: new Date(2022, 9), y: 42000 },
          { x: new Date(2022, 10), y: 37160 },
          { x: new Date(2022, 11), y: 38400 },
        ],
      },
    ],
  };

  return (
    <div className={styles.main_overview}>
      <div className={styles.sales_overiew}>
        <div className={styles.total_sales}>
          <label>
            Total Sales Overview <p>7-13 Agust,2020 </p>
          </label>
        </div>
        <div className={styles.total_sales1}>
          <span>Filter by | </span>
          <span>This Week</span>
        </div>
      </div>
      <div className={styles.data_week}>
        <div>
          <h3>$74,729.00</h3>
          <span style={{ color: '#4cf34f' }}>
            <img
              width='20px'
              src='https://store-images.s-microsoft.com/image/apps.26602.13977111684761394.0bfe3d3f-121c-48a5-90a1-fd5f3f8a6484.b1cdaa65-f278-4f9c-b6fa-fc7fda795165'
            />
            +21% form last week
          </span>
        </div>
        <div>
          <span>
            <img
              width='20px'
              src='https://store-images.s-microsoft.com/image/apps.26602.13977111684761394.0bfe3d3f-121c-48a5-90a1-fd5f3f8a6484.b1cdaa65-f278-4f9c-b6fa-fc7fda795165'
            />{' '}
            Highest revenue since 2 weeks ago
          </span>
        </div>
      </div>

      <div className={styles.chart_data}>
        <CanvasJSChart options={options} />
        <div style={{ marginLeft: '50px' }}>
          <p>Total Profite</p>
          <h3>$12,545.00</h3>
          <div className={styles.data_week}>
            <img
              width='25px'
              height='25px'
              src='https://store-images.s-microsoft.com/image/apps.26602.13977111684761394.0bfe3d3f-121c-48a5-90a1-fd5f3f8a6484.b1cdaa65-f278-4f9c-b6fa-fc7fda795165'
            />
            <label>23% from last week</label>
          </div>

          <label
            style={{ color: 'grey', fontSize: '17px', fontWeight: 'bold' }}>
            Total Product Sold
            <h4 style={{ color: 'grey', fontSize: '17px' }}>329</h4>
          </label>
        </div>
      </div>
    </div>
  );
};
