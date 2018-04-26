import React from 'react'

export default props => (
    <div className="row app">
                <div className="vert-align col s12 m10">
                    <div className="card grey lighten-4">
                        <div className="card-content">
                            <span className="card-title center">{props.title}</span>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
)