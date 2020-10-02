/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");

  // for each person in the array
  arrayOfPeople.forEach( person => {
  // create a new element h1
  let h1 = document.createElement('h1')
  // set inner text of the h1 to the name value of array
  h1.innerText = person.name
  // create a new element h2
  let h2 = document.createElement('h2')
  // set inner text of the h2 into the name value of array
  h2.innerText = person.job
  // append child h1 to the content 
  content.appendChild(h1)
  // append child h2 to the content
  content.appendChild(h2)
})

}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  // find the div with id #content
  let content = document.querySelector('#content')
  // create a new ul element
  let ul = document.createElement('ul')
  // for each element in the shopping list:
  shopping.forEach(itemName => {
    //   create a new li element
    let li = document.createElement('li')
    //   set the inner text to the shopping list element
    li.innerText = itemName
    //   appendChild the li element to the ul element
    ul.appendChild(li)
  })
  // appendChild the ul elment to the content element
  content.appendChild(ul)
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  // Write your code in here
  // find div tag and use queryselector on it
  let content = document.querySelector('#content')
  // create the ul element 
  let ul = document.createElement('ul')
  // foreach element in the book array
  books.forEach(book => {
    // create the li elemnt
    let li = document.createElement('li')
    // create the p element
    let p = document.createElement('p') 
    // innertext of the p element
    p.innerText = book.title + ' - ' + book.author
    // create img element 
    let img = document.createElement('img')
    // set the src property of the image
    img.src = book.imgUrl
    // change the color of background green if value is tru
    if(book.alreadyRead) {
      li.style.backgroundColor = 'green'
    }
    // else
    else {
      // change the color pf background color into red if value is false
      li.style.backgroundColor = 'red'
    }
    // append child img to the li
    li.appendChild(p)
    // append child p to li
    li.appendChild(img)
    // append child ui to ul
    ul.appendChild(li)
  })
  // append child ul to div
  content.appendChild(ul)
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imgUrl: './images/design.jpg'
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imgUrl:  './images/human.jpg'
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imgUrl: './images/pragmatic.jpg'
  }
];

exerciseThree(books);
