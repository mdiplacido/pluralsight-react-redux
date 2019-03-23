import React from "react";
import { connect } from "react-redux";
import { ICartActionsProp, IPurchaseBlendsState, mapCartActionsToProps } from "@microsoft-commerce/purchase-blends-component-library";

// the ICartActionsProp is also provided by redux
export type ConnectedCartProps = ICartActionsProp;

// at the moment all props are provided by redux connector
export type CartProps = ConnectedCartProps;

const Cart = (props: any) => {
    const onHandleLoadCartClick = () => {
        props.cartActions.createCart([
            { 
                additionalData: {
                    billingCycle: "Monthly"
                },
                productId: "4F7C74AF-24CC-4CB4-B91F-4DA6ACF69E49",
                quantity: 1
            } as any], "US");
    };

    return (
        <div>
            <h1>Bootstrapping cart</h1>
            <button onClick={onHandleLoadCartClick}>Checkout</button>
        </div>
    );
};

export default connect<{}, ICartActionsProp, CartProps, IPurchaseBlendsState>(null, mapCartActionsToProps)(Cart);
