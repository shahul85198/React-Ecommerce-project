# React-Ecommerce-project

# To create a react project we have to install
'npx create-react-app project name'

## get present working directroy
'pwd'

## navigate (change directroy) to react project folder (ecommerce)
'cd ecommerce'

## start reac t project (same has replit run)
'npm run start'

## we shold make popup public

## stop React project server(basically stop terminal process)
'CTRL + c'

## project features
- products listing
- products details
- shopping cart
- checkout
- user authentication
- order history
- search and filter


## React Snippet
`rfc` - React Functional Componet
`rcc` - React class component

### tailwindcss instalation
- `npm install -D tailwindcss`
- `npx tailwindcss init`
- update `tailwind.config.js`
- `content: ['./src/**/*.[html, js]]`

- include @tailwind in index.css 
  - ```css
          @tailwind base;
         @tailwind components;
         @tailwind utilities;
  
  ## Authentication 
  - (APIs) <--> Backend
  - third party

  - data -> firebase (user authentication / database)
  - supabse


    ## we apply filter mana degara unna arry ni to get perticular products or specified products
   
   ## filter dani kavalasina value a kakunda motam dani meeda apply avutundi
- products.filter((product) => product.id == 11)

- products.filter((product) => product.id > 11)

 let inloop = 1
 product.filter((value) => {
  console.log("inloop", inloop, value.id >= 11, value.id)
  inloop++
  return value.id >= 11
 })

let inloop = 1
 product.filter((value) => {
  console.log("inloop", inloop, value.id == 11, value.id)
  inloop++
  return value.id == 11
 })


 
  ## find anedi daniki kavalisina value dorikity next inko danikosam velladu akaditho agipotundi
let inloop = 1
 product.find((value) => {
  console.log("inloop", inloop, value.id == 11, value.id)
  inloop++
  return value.id == 11
 })


## ikada manaki perticular product id base meeda kavali anni loop avakudadu anty apudu manam productbyid ni us chestam 

var productsById = {}

product.forEach(product => {
  productById[product.id] = product;  
})

productById[4]


## title base meeda product find chaiyali anty
var productByTitle = {}

product.forEach(product => productByTitle[product.title] = product)

var productByTitle = {}

product.forEach(product => productByTitle[product.title] = product.price)

## localstorage 
- manam login ina tarvata manam a browser lo newtabe or new window open chesina mana information untundi

## sessionStorage

- mana information manam login iyyi kanaunty aapudu manam vere tab kani new window kani open chesty mana information undadu







