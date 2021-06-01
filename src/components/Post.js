import React from "react";

export const Post = ({text}) => (
    <div className="card" style={{width: "18rem", marginBottom: 10}}>
        <div className="card-body">
            <p className="card-title">{text}</p>
        </div>
    </div>
)