import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import MapContainer from "../components/MapContainer"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="lg:grid lg:grid-cols-3 lg:h-screen">
        <section className="flex flex-col items-center py-6 lg:col-span-1 min-w-fit bg-grey-700 drop-shadow-md shadow-md lg:drop-shadow-2xl lg:shadow-2xl shadow-black">
          <div className="flex flex-col items-center my-5 lg:my-14">
            <StaticImage
              src="../images/protires_logo_low_res.png"
              width={300}
              layout="fixed"
            />
            <h1 className="text-white text-center font-bold leading-loose tracking-wider italic text-2xl">Sitio en construcción</h1>
          </div>
          <h2 className="text-white text-center font-bold leading-loose tracking-wider italic text-xl">Visítanos en Mexicali:</h2>
          <MapContainer/>
        </section>
        <section className="flex flex-col justify-center lg:col-span-2 lg:px-20 pt-10 bg-red-600">
          <h1 className="text-gray-100 text-center italic font-extrabold text-2xl md:text-5xl mb-8">¡APROVECHA ESTA PROMOCIÓN!</h1>
          <StaticImage
            placeholder="dominantColor"
            src="../images/protires_flyer.jpeg"
            alt="Protires. Venta de limpia. Variedad de marcas, pregunta por las tuyas al 6861118679 6865571450"
          />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
