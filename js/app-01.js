/* 01 - UI TABS :: Complete AFTER variables */

var membershipHTML = `
  <h2>Join Us Today!</h2>
  <p>
    You can be part of the Paley Center Community as an <em>Individual Member</em>, <em>Patron Member</em>,
    <em>Media Council Member</em> or <em>Corporate Member</em>. All include very special benefits for YOU
    while supportin the Paley Center's essential programs.
  </p>
  <p>
    <small>The Paley Center is a 501(c)3 nonprofit organization; our work and our programs are dependent on your
    support</small>
  </p>
`

var programsHTML = `
  <h2>Public Programs</h2>
  <ul>
    <li>PaleyLive LA</li>
    <li>PaleyLive NY</li>
    <li>Paley Impact</li>
    <li>Patron Circle & President Circle</li>
  </ul>
`

var screeningsHTML = `
  <h2>Join us Today!</h2>
  <p>
    Saturdays and Sundays in New York and Los Angeles.
  </p>
  <p>
    12:00 to 4:00 local time • FREE ADMISSION.
  </p>

  <p>
    <a href="#">Visit New York</a> | Visit Los Angeles
  </p>

  <p>
    Weekend Screenings from the Paley Archive on the Big Screen in
    NY & LA offer great family entertainment, PLUS programming
    selected for our members and screened for the public. You haven't
    really experienced TV until you've seen it on a movie screen with
    fellow fans.
  </p>
`

var pressHTML = `
  <h2>Press Info</h2>
  <hr/>
  <h4>Current Press Release</h4>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Press Release Archive</h4>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Press Kit/Logos</h4>
  <p>View and download press materials</p>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Register for Press Information</h4>
  <p><a href="#">Click to download and fill out form</a></p>
  <hr/>
`

document.querySelector('.ui-tabs__content').innerHTML = membershipHTML
/* 01 - UI TABS :: Your code below.... */
var tabContainer = document.querySelector('.ui-tabs__content')

var listItemsContainer = document.querySelector('.ui-tabs__tabslist')

var listItems = document.querySelectorAll('.ui-tabs__tab')

listItemsContainer.addEventListener('click', function(e) {

listItems.forEach(function(item){

  if (e.target.dataset.tab === item.dataset.tab) {
// si se le da click se agrega la clase para dar estilo
item.classList.add("ui-tabs__tab--selected")

  if (e.target.dataset.tab === "membership") {

    tabContainer.innerHTML = membershipHTML

      } else if (e.target.dataset.tab === "programs") {

        tabContainer.innerHTML = programsHTML

      } else if (e.target.dataset.tab === "screenings") {

        tabContainer.innerHTML = screeningsHTML

      } else if (e.target.dataset.tab === "press") {

        tabContainer.innerHTML = pressHTML
        }

      } else {

        item.classList.remove("ui-tabs__tab--selected")
      }
  })
})
