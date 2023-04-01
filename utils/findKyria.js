export default function findKyria(x) {
    
    const ky = x.map(
                    node => node.kyria_ylika?
                                    [...node.kyria_ylika.flat()]:
                                    findKyria(node.subcategories)
                    );
    return ky.flat();
  }