import React from "react";

const NewsItems = (props) => {
  return (
    <div className="card text-white mb-2" style={{ width: "18rem" ,backgroundColor:"black",border:"5px white solid"}}>
      <img
        className="card-img-top "
        src={
          props.imageURL
            ? props.imageURL
            : "https://www.shutterstock.com/image-vector/no-image-available-icon-template-260nw-1340428865.jpg"
        }
        alt="cricket"
        style={{
          objectFit: "cover",
          height: "200px",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.title ? props.title.slice(0, 88) : ""}...
        </h5>
        <p className="card-text">
          {props.description ? props.description.slice(0, 88) : ""}...
        </p>
        <a
          rel="noreferrer"
          href={props.newsURL}
          target="_blank"
          className="btn btn-sm btn-dark"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
