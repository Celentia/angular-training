## [Task 1. Introduction]

## 2021-01-19
### Added
- A test component to learn how to display data
- List of products
- Cart with several goods for a purchasing imitation 

## 2021-01-30
### Added
- Ability to add, remove items from a cart and change their count
- Сalculation of the cost of goods in the cart
- A directive to change cart item's background color on hover
- A template variable that contains a title
### Changed
- Split app into modules - card, orders, products, shared
- Communication between product and product-list component

## 2021-02-03
### Added
- Methods to manage data in cart service
- ConfigOptionsService to get and set data
- ConstantsService as object literal
- GeneratorService that generates random sequence of data
- LocalStorageService for working with window.localStorage
- Methods introduction in FirstComponent
- A directive to change font size on click via ElementRef+Renderer2

## 2021-02-08
### Added
- Currency pipe to price value in cart items
- Uppercade pipe to the name of product
- Async pipe to display list of products asyncronously via observable
- Custom OrderBy pipe to sort items in cart by price, count and name

## 2021-03-01
### Added
- Routes to /products-list, /product/:productID, /cart
- Route to ProcessOrderComponent with CanLoad guard that allows to display the component unless the cart isn't empty
- Admin page with routes to the list of products, product item with resolve and CanDeactivate guard, and orders
- Routing modules for products, cart, admin features
- LocalStorage for keeping data with cart items

## 2021-03-10
### Added
- JSON server with `products` and `orders` data arrays
- Service with HttpClient
- TimingInterceptor for displaying products requests duration 
- Methods for creating, editing, getting and deleting products via Promise Service and the same methods for orders via Observable Service
### Changed
- Tsconfig