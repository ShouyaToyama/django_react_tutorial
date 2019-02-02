import React from "react";
import PropTypes from "prop-types";


const Item = ({data}) => 
    !data.length ? (
        <p>データがありません</p>
    ) : (
        <div className="column">
            {data.map(d => 
                <div className="item" key={d.id}>
                    <h2>{d.name}</h2>
                </div>
            )}
        </div>
    );

Item.propTypes = {
    data: PropTypes.array.isRequired
};

export default Item;