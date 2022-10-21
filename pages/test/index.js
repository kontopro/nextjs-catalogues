import { useRouter } from 'next/router'
import eidos from '../../data/eidos/eidos.json'

export default function testPage() {   
    
  
    // Όλα τα Κύρια Υλικά
  const kyria = eidos.map(x => x.kyria_ylika).flat()
  
  // Όλες οι υποκατηγορίες
  // const subcats = kyria.kat_subcategories?kyria.kat_subcategories.map(x=>x):null
//   Όλοι οι κατάλογοι
    const ecat = kyria.map(x => x.kyrio_catalogues).flat()
  console.log(kyria)

    return(
        <div>
            <p>hello [kyrio]</p>
            
            {/* Προσθήκη ΚΥ κατηγορίας */}
        </div>
    )
}
