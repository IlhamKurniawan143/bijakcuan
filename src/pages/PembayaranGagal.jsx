import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"


export default function PembayaranGagal() {
    return (
      <main id="pembayaran">
      <div className="container align-items-center d-flex justify-content-center">
          <div className="container-lg text-center" >
              <br />
              <br />
              <FontAwesomeIcon 
                  icon={faTimesCircle}
                  className="mb-4"
                  style={{
                      color: "Red",
                      borderRadius: "2rem",
                      height: "150px",
                      width: "150px",
                  }}></FontAwesomeIcon>
                  
              <h1 className="mb-4">Pembayaran Gagal</h1>
              <p className="mb-5 w-75 mx-auto">
              Silahkan lakukan pembayaran pesanan Anda
              </p>
              <Link href={"/profil"} className="btn btn-primary">
                  Mulai Belajar
              </Link>
              <br />
              <br />
              <br />
              <br />
          </div>
      </div>
  </main>
    )
  }
  