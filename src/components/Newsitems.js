import React from "react";

export default function Newsitems({
  title,
  desc,
  imgUrl,
  newsUrl,
  source,
  author,
  publishedAt,
}) {
  return (
    <div>
      <div className="my-3">
        <div className="card mb-3">
          <span
            className=" badge bg-danger"
            style={{
              position: "absolute",
              right: "0",
              borderRadius: "0px",
            }}
          >
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="text-muted">
              By <span style={{ fontWeight: "bold" }}>{author}</span> at{" "}
              <span style={{ fontWeight: "bold" }}>
                {new Date(publishedAt).toLocaleDateString()}
              </span>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-danger"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
