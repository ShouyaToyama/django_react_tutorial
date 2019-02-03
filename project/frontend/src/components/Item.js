import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";

const ItemList = ({data}) => 
    !data.length ? (
        <p>データがありません</p>
    ) : (
        <div className="column">
            {data.map(d => 
                <div className="item" key={d.id}>
                    <Link to={`/table/${d.id}`}><h2>{d.name}</h2></Link>
                </div>
            )}
        </div>
    );

ItemList.propTypes = {
    data: PropTypes.array.isRequired
};

export const ItemView = ({data}) => 
    !data ? (
        <p>データがありません</p>
    ) : (
        <div className="item">
          <h2>{data.name}</h2>
          <p>{data.id}</p>
          <p>{data.email}</p>
        </div>
    )

export default ItemList;