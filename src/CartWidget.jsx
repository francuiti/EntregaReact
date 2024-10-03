import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const CartWidget = () => {
    return (
        <div className="d-flex align-items-center">
            <FaShoppingCart size={30} color="white" />
            <span className="badge bg-danger rounded-pill ms-1">5</span> {}
        </div>
    );
};

export default CartWidget;
