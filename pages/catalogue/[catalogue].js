import { useRouter } from 'next/router'
import eidos from '../../data/eidos/eidos.json'

export default function cataloguePage({catalogue}) {   
    
    return(
        <div>
            <p>hello [catalogue]</p>
            <p>Ονομασία: {catalogue.catalogue_gr}</p>
            <p>id: {catalogue.cat_id}</p>
            {/* Προσθήκη καταλόγου */}

        </div>
    )
}

export const getStaticPaths = async () => {
  
    const ky = eidos.map(x => x.kyria_ylika).flat()
    const ecat = ky.map(x => x.kyrio_catalogues).flat()
    const paths = ecat.map(x => ({params: {catalogue: x.catalogue_slug}}))
    console.log(paths)
    return {
      paths,
      fallback:false
    }
}

export const getStaticProps = async ({params}) => {
    
const ky = eidos.map(x => x.kyria_ylika).flat() 
const ecat = ky.map(x => x.kyrio_catalogues).flat() 
const catalogue = ecat.find(x => x.catalogue_slug === params.catalogue)
console.log(catalogue)  
return {
    props:{
      catalogue
    }
  }
}