import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

export default function PembayaranSukses() {
  return (
	<main id="pembayaran">
	<div className="container align-items-center d-flex justify-content-center">
		<div className="container-lg text-center" >
			<br />
			<br />
			<FontAwesomeIcon 
				icon={faCircleCheck} 
				className="mb-4"
				style={{
					color: "Green",
					borderRadius: "2rem",
					height: "100px",
					width: "100px",
				}}></FontAwesomeIcon>
				
			<h1 className="mb-4">Pembayaran Sukses</h1>
			<p className="mb-5 w-75 mx-auto">
				Silahkan mempelajari materi kelas yang telah <br/>kami design dengan baik
				untuk mencapai goals Anda
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
