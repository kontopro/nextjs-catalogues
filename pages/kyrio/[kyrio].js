import Link from 'next/link'
import eidos from '../../data/eidos/eidos.json'

export default function kyrioPage({kyrio}) {   
    
    const ecat = kyrio.kyrio_catalogues
    console.log(ecat)
    return(
        <div>
            <p>hello [kyrio]</p>
            <p>Ονομασία: {kyrio.kyrio_name}</p>
            <p>id: {kyrio.kyrio_id}</p>
            <div>
              {!ecat.length?<div><p>no catalogues</p></div>:ecat.map(x => <div key={x.cat_id}><Link href={`/catalogue/${x.catalogue_slug}`}><a>{x.catalogue_gr}</a></Link></div>)}
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
  
    const ky = eidos.map(x => x.kyria_ylika).flat()
    const paths = ky.map(x => ({params: {kyrio: x.kyrio_slug}}))
    
    return {
      paths,
      fallback:false
    }
}

export const getStaticProps = async ({params}) => {
    
const ky = eidos.map(x => x.kyria_ylika).flat()  
const kyrio = ky.find(x => x.kyrio_slug === params.kyrio)
 console.log(kyrio)
return {
    props:{
      kyrio
    }
  }
}