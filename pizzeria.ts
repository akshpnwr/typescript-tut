enum PizzaToppings {
    Tomato,
    BBQ,
    None,
    Cream
}

enum PizzaSizes {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
    XXl = 'xxl'
}

interface Ipizza {
    name: string,
    slices: number,
    cheescrust: boolean,
    // toppings: string[],
    // toppings: 't1' | 't2' | 't3' | 't4',
    toppings: PizzaToppings[],
    price: number,
    sizes: PizzaSizes[],
    vegan?: boolean,
    vegetarian?: boolean
}


const pizza: Ipizza = {
    name: 'Italian',
    slices: 4,
    cheescrust: false,
    // toppings: ['tomatoe','bbq suace'],
    // toppings: 't2',
    toppings: [PizzaToppings.BBQ, PizzaToppings.Tomato],
    price: 23,
    // sizes: [0,1,2,3,4]
    sizes: [PizzaSizes.M, PizzaSizes.L, PizzaSizes.XL]
}

class Pizza {
    name: string = ''
    slices: number = 8
    toppings: PizzaToppings[] = []
    cheescrust: boolean = false
    price: number = 20
    sizes: PizzaSizes[] = []
    vegan?: boolean = true
    vegetarian?: boolean = false

    constructor(data: Ipizza){
        this.name = data.name
        this.slices = data.slices
        this.toppings = data.toppings
        this.cheescrust = data.cheescrust
        this.price = data.price
        this.sizes = data.sizes

        if(data.vegan){
            this.vegan = data.vegan
        }
        if(data.vegetarian){
            this.vegetarian = data.vegetarian
        }
    }

}

const italianPizza = new Pizza(pizza);

const pizza2: Ipizza = {
    name: 'BBQ Chicken',
    slices: 4,
    cheescrust: false,
    toppings: [PizzaToppings.BBQ, PizzaToppings.Cream],
    price: 23,
    sizes: [PizzaSizes.M, PizzaSizes.L, PizzaSizes.XL],
    vegan: false,
}

const bbqPizza = new Pizza(pizza2);

class PizzaCatalog {
    list: Pizza[] = []

    constructor(pizzas: Pizza[]){
        this.list = pizzas
    }
}

const catalog = new PizzaCatalog([italianPizza, bbqPizza])

console.log('catalog', catalog);