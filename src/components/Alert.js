import React from "react";

export const Alert = ({text}) => (
    <div className="alert alert-warning" role="alert" style={{width: '80%'}}>
        {text}
    </div>
)