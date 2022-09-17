import Link from 'next/link'
import eidos from '../../data/eidos/eidos.json'

export default function categoryPage({kat}) {
    return(
        <div>
            <p>hello [kat]</p>
            <p>Ονομασία: {kat.kat_gr}</p>
            <p>id: {kat.kat_id}</p>
            {/* Προσθήκη ΚΥ κατηγορίας */}
            {!kat.kyria_ylika.length?
            <div><p>Δεν έχουν προστεθεί ακόμη Κύρια Υλικά στην κατηγορία!</p></div>:
              kat.kyria_ylika.map(x =>
            <div key={x.kyrio_id}>
              <Link href={`/kyrio/${x.kyrio_slug}`}>
                <a>{x.kyrio_name}</a>
              </Link>
            </div>
                                  )}
        </div>
    )}

export const getStaticPaths = async () => {
    const paths = eidos.map(x => ({params: {kat: x.katigoria}}))
    return {
      paths,
      fallback:false
    }
}

export const getStaticProps = async ({params}) => {    
  const kat = eidos.find(x => x.katigoria === params.kat)
  return { props:{kat} }
}