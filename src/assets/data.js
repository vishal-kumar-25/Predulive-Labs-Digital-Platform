import p1_img from './product_1.jpeg';
import p2_img from './product_2.jpeg';
import p3_img from './product_3.jpeg';
import p4_img from './product_4.webp';

let data_product = [
    {
        id: 1,
        name: "Drones",
        image: p1_img,
        new_price: 1500.00,  
        old_price: 2300.00,
    },
    {
        id: 2,
        name: "Cameras",    
        image: p2_img,      
        new_price: 1800.00, 
        old_price: 2500.00, 
    },
    {
        id: 3,
        name: "Smartphones", 
        image: p3_img,
        new_price: 1200.00,
        old_price: 1600.00,
    },
    {
        id: 4,
        name: "Laptops",  
        image: p4_img,
        new_price: 2200.00,
        old_price: 3000.00,
    }
];

export default data_product;
