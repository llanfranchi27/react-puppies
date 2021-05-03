import React from "react";
import { Link } from "react-router-dom";
import "./PuppyListItem.css";

export default function PuppyListItem({ puppy, handleDeletePuppy }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{puppy.name}</h3>
      </div>
      <div className="panel-footer PuppyListItem-action-panel">
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/puppies/details",
            state: { puppy },
          }}
        >
          DETAILS
        </Link>
        <Link
          className="btn btn-xs btn-warning"
          to={{
            pathname: "/puppies/edit",
            state: { puppy },
          }}
        >
          EDIT
        </Link>
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => handleDeletePuppy(puppy._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}