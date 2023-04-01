export default function findSubcategories(x) {
    
    const sc = x.map(
                    node => node.subcategories?
                                    [...node.subcategories]:
                                    null
                    );
    return sc.flat();
  }