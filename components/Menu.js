// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
*/
function menuMaker(items) {
  const menu = document.createElement('div')
  const list = document.createElement('ul')

  menu.classList.add('menu')


  menu.append(list)
/*
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>
*/
  items.forEach(element => {
    const item = document.createElement('li')
    item.textContent = element
    list.append(item) 
  });

/*
  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
*/
  const menuButton = document.querySelector('.menu-button')

/*
  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
*/
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open')
  })

/*
  Step 5: Don't forget to return your div.menu.
*/
return menu
}

/*
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
const header = document.querySelector('.header')
const menu = menuMaker(menuItems)

header.append(menu)