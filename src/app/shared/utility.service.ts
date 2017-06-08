interface Product {
    id: number;
    type: string;
    name: string;
    price: number;
    smallimg: string;
    colors?: Colors | null;
    activities?: any[] | null;
    action?: string[] | null;
    description?: string;
    largeimg?: string;
    material?: string;
    dimensions?: string;
}

interface Colors {
  "Matte Black"? : string,
  "Slate Grey"? : string,
  "Burgundy"? : string,
  "Mocha Brown"? : string,
  "Royal Purple"? : string,
  "Aqua"? : string,
  "Coral"? : string,
  "Stainless Steel"? : string,
  "Winter White"? : string,
  "Crater Blue"? : string,
  "Lime Green"? : string,
  "Olive Green"? : string,
  "Solar Orange"? : string,
  "Cherry Red"? : string,
  "Lipstick Pink"? : string,
  "Chardonnay Silver"? : string,
  "Champagne Gold"? : string,
  "Pearl White"? : string,
  "Shiraz Red"? : string,
  "Pinot Noir Black"? : string
}

export class UtilityService {
  fixProduct(product: {}): {} {
    let newProduct : Product = {
      id: null,
      type: null,
      name: null,
      price: null,
      smallimg: null,
      colors: null,
      activities: null,
      action: null,
      description: null,
      largeimg: null,
      material: null,
      dimensions: null,
    }
    if (product['activites']) {
      newProduct['activities'] = product['activities'].split('_');
    }
    newProduct['colors'] = {
      "Matte Black" : product["matte_black"],
      "Slate Grey" : product["slate_grey"],
      "Burgundy" : product["burgundy"],
      "Mocha Brown": product["mocha_brown"],
      "Royal Purple": product["royal_purple"],
      "Aqua": product["aqua"],
      "Coral": product["coral"],
      "Stainless Steel": product["stainless_steel"],
      "Winter White": product["winter_white"],
      "Crater Blue": product["crater_blue"],
      "Lime Green": product["lime_green"],
      "Olive Green": product["olive_green"],
      "Solar Orange": product["solar_orange"],
      "Cherry Red": product["cherry_red"],
      "Lipstick Pink": product["lipstick_pink"],
      "Chardonnay Silver": product["chardonnay_silver"],
      "Champagne Gold": product["champagne_gold"],
      "Pearl White": product["pearl_white"],
      "Shiraz Red": product["shiraz_red"],
      "Pinot Noir Black": product["pinot_noir_black"]
    };
    newProduct['action'] = [product['actionimg1'],product['actionimg2'],product['actionimg3'],product['actionimg4']];
    newProduct['description'] = product['description'];
    newProduct['id'] = product['id'];
    newProduct['largeimg'] = product['largeimg'];
    newProduct['dimensions'] = product['dimensions'];
    newProduct['material'] = product['material'];
    newProduct['price'] = product['price'];
    newProduct['smallimg'] = product['smallimg'];
    newProduct['type'] = product['type'];
    newProduct['name'] = product['name'];
    return this.clearNull(newProduct)
    // return newProduct
  }

  clearNull(obj: Product){
    if (obj.action){
      for (let i = 3; i > 0; i--){
        if (!obj.action[i]){
          obj.action.splice(i,1)
        }
      }
      if (!obj.action[0]){
        obj.action = null;
      }
    }
    // if (!obj.activities){
    //     obj.activities;
    // }

    for (let key in obj.colors){
      if (!obj.colors[key]){
        delete obj.colors[key]
      }
    }

    if (Object.keys(obj.colors).length === 0){
      delete obj.colors
    }

    for (let key in obj){
      if (!obj[key] || obj[key]===[] || obj[key]==={}){
        delete obj[key]
      }
    }
    return obj
  }

  limitRandomProducts(randomProducts: object[], limit: number){
    return randomProducts.splice(0,limit)
  }
}
