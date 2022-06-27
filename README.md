# SNHU-CS465
Architecture:
	For this project, we utilized Express HTML, JavaScript, and SPA. The initial “iteration” of the website was developed using Express, but we saw that we did not have the ability to communicate with a database due to the static nature of Express. Using JavaScript and SPA, we were able to create a dynamic website that allowed us to communicate with our databases set up with MongoDB. We utilized NoSQL with MongoDB because this allowed the flexibility of modifying schema which allowed us to scale the database as we needed it.

Functionality:
	JSON allowed us the ability to create Javascript objects that could be stored and then called in different ways, depending on what the frontend was requesting. One instance of refactoring our code would be when we created an array to hold all of the trip information in a separate object, and swapped out the hard coding for functions that called the requested information.

Testing:
	Testing API endpoints allows us to see that the required functionality is there, and everything acts accordingly. The types of testing depend on the type of endpoint that we are looking at. If we are looking at an endpoint that only retrieves information from a database, then we need to test that the correct information/data is called, as well as ensuring that only the required data will be displayed. One of the easiest ways to test for functionality is to create a local server and then load the page through local hosting. This allows developers the ability to test functionality as if it were a live website.

Reflection:
	Throughout this course, I was challenged with bringing together all of my knowledge in software development, as well as trying to obtain new skills along the way. I find that my exposure to the different tools we used in this course has only spurred a deeper understanding than what I have at this point. This also was a great look at everything that goes into creating a website as well as the different methods in which they are created.
