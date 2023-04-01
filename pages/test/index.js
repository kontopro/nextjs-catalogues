import test from '../../data/eidos/test_routes.json'
import findKyria from '../../utils/findKyria';
import findSubcategories from '../../utils/findSubcategories';

export default function testPage() {
  
  // Όλα τα Κύρια υλικά σε ένα πίνακα
  const kyria = findKyria(test);
  const subcat = findSubcategories(test);
  
  // Όλες οι υποκατηγορίες
  // const subcats = kyria.kat_subcategories?kyria.kat_subcategories.map(x=>x):null
//   Όλοι οι κατάλογοι
    // const ecat = kyria.map(x => x.kyrio_catalogues).flat()
  
  // console.log(kyria)
  console.log(subcat)

    return(
        <div>
            <p>hello [kyrio]</p>
            
            {/* Προσθήκη ΚΥ κατηγορίας */}
        </div>
    )
}
