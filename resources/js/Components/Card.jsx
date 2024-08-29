import React from "react";

const Card = ({ news }) => {
    return (
        <>
            {news
                ? news.map((data, index) => {
                      return (
                          <div
                              className="card bg-white w-96 shadow-xl text-black"
                              key={index}
                          >
                              <figure>
                                  <img
                                      src="https://images.unsplash.com/photo-1660784670019-33a36fd82515?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1ZGdlfGVufDB8fDB8fHww"
                                      alt="Shoes"
                                  />
                              </figure>
                              <div className="card-body">
                                  <h2 className="card-title">
                                      {data.title}
                                      <div className="badge badge-primary">
                                          NEW
                                      </div>
                                  </h2>
                                  <p>{data.description}</p>
                                  <div className="card-actions justify-end">
                                      <div className="badge badge-ghost">
                                          {data.category}
                                      </div>
                                      <div className="badge badge-neutral">
                                          {data.author}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : null}
        </>
    );
};

export default Card;
