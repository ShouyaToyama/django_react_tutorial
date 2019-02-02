import React from "react";
import PropTypes from "prop-types";


const Home = ({data}) => 
    !data.length ? (
        <p>データがありません</p>
    ) : (
        data.map(d => 
            <div className="item" key={d.id}>
                <h2>d.name</h2>
            </div>
        )
    );

Table.propTypes = {
    data: PropTypes.array.isRequired
};

export default Home;