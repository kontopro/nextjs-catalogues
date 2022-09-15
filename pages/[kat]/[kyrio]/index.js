import eidos from '../../../data/eidos/eidos.json'

export default function katigoria({kyrio}) {
    return(
        <div>
            <p>hello [kyrio]</p>
            <p>Ονομασία: {kyrio.kyrio_name}</p>
            <p>id: {kyrio.kyrio_id}</p>
            {/* Προσθήκη ΚΥ κατηγορίας */}
        </div>
    )
}

export const getStaticPaths = async () => {
    
    const paths = eidos.map(x => x.kyria_ylika.map(y => ({params: {kat: x.katigoria, kyrio: y.kyrio_slug}})))

    return {
      paths,
      fallback:false
    }
}

export const getStaticProps = async ({params}) => {
    
const kat = eidos.find(x => x.katigoria === params.kat)
const kyrio = kat.kyria_ylika.find(x => x.kyrio_slug === params.kyrio)

  return {
    props:{
      kyrio
    }
  }
}