import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/promo.css";
import promoData from "../data/promoData.json";
import { Helmet } from "react-helmet";

export default function Promo() {
  const [copySuccess, setCopySuccess] = useState("");
  const handleCopyClick = (kode) => {
    navigator.clipboard.writeText(kode);
    setCopySuccess(`Kode promo "${kode}" berhasil dicopy!`);
  };

  return (
    <main id="promo">
      <Helmet>
        <title>Promo | Bijakcuan.</title>
      </Helmet>
      <div className="container pt-4 pb-5">
        <h2 className="mb-4">Promo</h2>
        <div className="text-center4">
          <div className="row">
            {promoData.map((promo) => (
              <div className="col-lg-3 col-md-6 mb-4" key={promo.id}>
                <div className="card ">
                  <div className="card-body">
                    <p className="fw-bold text-sm-start ">{promo.bold}</p>
                    <p className="text-sm-start pb-4">{promo.text}</p>
                  </div>
                  <div className="card-footer">
                    <p className="fw-bold text-sm-start">
                      Kode Promo <br />{" "}
                      <span className="fw-light">{promo.kode} </span>
                      <button
                        className="btn btn-primary btn-sm float-end"
                        onClick={() => handleCopyClick(promo.kode)}
                      >
                        Copy
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {copySuccess && (
          <div className="alert alert-success mt-3" role="alert">
            {copySuccess}
          </div>
        )}
      </div>

      <div className="hero2">
        <div className="container text-center">
          <div className="row justify-content-center flex-column-reverse flex-lg-row">
            <div className="col-lg-8">
              <h1 className="text-white px-5 mb-5">
                Buka Kesuksesan Finansial Anda Sekarang Bersama Bijakcuan
              </h1>
              <Link to={"/program"} className="btn btn-primary mb-10">
                Gabung Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}