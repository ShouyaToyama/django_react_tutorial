import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { List, Button } from "semantic-ui-react";

const ItemList = ({data}) => 
    !data.length ? (
        <p>データがありません</p>
    ) : (
        <List>
            {data.map(d => 
                <List.Item key={d.id}>
                    <List.Icon name="users" />
                    <List.Content>
                        <Link to={`/table/${d.id}`}><h2>{d.name}</h2></Link>
                    </List.Content>
                </List.Item>
            )}
        </List>
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