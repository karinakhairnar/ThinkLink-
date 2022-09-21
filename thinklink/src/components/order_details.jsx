import React from "react";
import styles from "./main.module.css"
export const OrderDetails = ()=>{
    return <div className={styles.order_main}>
            <div className={styles.order_box}>
                <div className={styles.open_order}>
                    <p>Open Orders</p>
                    <img src="https://thumbs.dreamstime.com/b/order-now-logo-business-website-online-shop-order-now-logo-business-website-online-shop-190114132.jpg"/>
                    
                </div>
                
                <span>239</span>
            </div>
            <div className={styles.order_box} style={{borderTop:"2px solid blue"}}>
                <div className={styles.open_order}>
                    <p>Orders in transit</p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/paddy-1464097-1239314.png"/>
                    
                </div>
                
                <span>126</span>
            </div>
            <div className={styles.order_box} style={{borderTop:"2px solid #4cf34f"}}>
                <div className={styles.open_order}>
                    <p>Fulfilled orders</p>
                    <img src="https://c.tenor.com/ZPimOGG4WGoAAAAC/credit-card.gif"/>
                    
                </div>
                
                <span>1,254</span>
            </div>
            <div className={styles.order_box} style={{borderTop:"2px solid #f60d25"}}>
                <div className={styles.open_order}>
                    <p>Cancelled orders</p>
                    <img src="https://img.lovepik.com/free-png/20220107/lovepik-polygon-close-button-png-image_401253379_wh300.png"/>
                    
                </div>
                
                <span>35</span>
            </div>
    </div>
}