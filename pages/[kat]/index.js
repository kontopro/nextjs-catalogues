import eidos from '../../data/eidos/eidos.json'

export default function katigoria({kat}) {
    return(
        <div>
            <p>hello [kat]</p>
            <p>Ονομασία: {kat.kat_gr}</p>
            <p>id: {kat.kat_id}</p>
            {/* Προσθήκη ΚΥ κατηγορίας */}
        </div>
    )
}

export const getStaticPaths = async () => {
    
    const paths = eidos.map(x => ({params: {kat: x.katigoria}}))

    return {
      paths,
      fallback:false
    }
}

export const getStaticProps = async ({params}) => {
    
const kat = eidos.find(x => x.katigoria === params.kat)

  return {
    props:{
      kat
    }
  }
}