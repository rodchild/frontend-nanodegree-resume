
//MODEL
//******************** VARIABLES \ OBJECS ************************************************
// declaration of object bio
		var bio =
     	{
     		"name": "Ducarmel Zephyr",
     		"role": "Web Developer",
     		"contacts": {
     				"mobile": "613 501 0347",
     				"email": "rodchild@gmail.com",
     				"github": "@rodchild",
                    "linkedin": "@ducarmel",
     				"location": "Ottawa ON",
     				},
     		"WelcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
     		"skills": ["Linux", "HTML", "Javascript", "CSS"],
     		//"biopic": "images/fry.jpg",

     	};


//declaration of object work
     	var work =
     	{
     		"jobs":
     		[
     			{
     				employer: "Revel",
     				title: "Programmer",
     				location: "Atlantic city, NJ",
     				dates: "2011 - 2013",
     				description : "Builds software applications, follows coding standards. Communicates continually with the client and project teams. Translates designs and style guides provided by the UI/UX team into functional user interfaces. Ensuring cross browser compatibility and performance. Manipulates text and graphics to produce consistent presentation across all browser platforms."

     	    	},


     	    	{
     	    	employer: "Defence Canada",
     			title: "Programmer",
     			location: "Montreal, QC",
     			dates: "2010 - 2011",
     			description : "Data table creation and stored procedures with MS SQL Server 2005. Convert existing MS Access applications into .NET applications using C#. Participate in the design of new applications. Program and debug an order management application."
     	     	},

     	     	{

     			employer: "Forum de Verdun",
     			title: "Web developer",
     			location: "Montreal, QC",
     			dates: "2009 - 2010",
     			description : "Develop a set of web sites for the organization. The PHP language has been used with Joomla, a content manager and EasyPHP."

     	     	},

     	     	{
     	     	employer: "ADP",
     			title: "Technical support",
     			location: "Roseland, NJ",
     			dates: "2006 - 2009",
     			description : "Install operating systems and appropriate software. Provide solutions to users hardware and software problems. Perform maintenance and updating of websites. Offer solutions to complex technical problems. Return defective products to vendors or technician for repair. Write technical documentation."


     	     	}
     	    ]
     	};

//declaration of object education
     		var education =
     		{

     			"schools":
     			[

                    {
                        "name": "Udacity",
                        "location": "Mountain View, CA Online",
                        "degree": "Front-End Web Developer",
                        "majors": [" Web development"],
                        "dates": 2015,
                        "url": "http://www.udacity.com",

                    },

     				{
     					"name": "College Bois de Boulogne",
     					"location": "Montreal, QC",
     					"degree": "Computer Programmer",
     					"majors": ["CS"],
     					"dates": 2000,
     					"url": "http://bdeb.qc.ca/",


     				}

     			],

     			"onlineCourses":
     			[
         			{

         				"title": "Introduction to Linux",
         				"school": "EDX",
         				"date" : 2014,
         				"url": "https://www.edx.org/"
         		 	},

         		 	{

         				"title": "Introduction to HTML AND CSS",
         				"school": "Udacity",
         				"date": 2015,
         				"url": "https://www.udacity.com/"
         		 	},

         		 	{

         				"title": "JavaScript Basics",
         				"school": "Udacity",
         				"date": 2015,
         				"url": "https://www.udacity.com/"
         		 	},

                    {

                        "title": "Intro to JQuery",
                        "school": "Udacity",
                        "date": 2015,
                        "url": "https://www.udacity.com/"
                    },

                    {

                        "title": "How to Use Git and GitHub",
                        "school": "Udacity",
                        "date": 2015,
                        "url": "https://www.udacity.com/"
                    },

                     {

                        "title": "Object Oriented JavaScripts",
                        "school": "Udacity",
                        "date": 2015,
                        "url": "https://www.udacity.com/"
                    },

                     {

                        "title": "HTML5 Canvas",
                        "school": "Udacity",
                        "date": 2015,
                        "url": "https://www.udacity.com/"
                    },

                     {

                        "title": "WebSite Performance Optimization",
                        "school": "Udacity",
                        "date": 2015,
                        "url": "https://www.udacity.com/"
                    },

                     {

                        "title": "Intro to AJAX",
                        "school": "Udacity",
                        "date": 2015,
                        "url": "https://www.udacity.com/"
                    },

                     {

                        "title": "JavaScript Design Patterns",
                        "school": "Udacity",
                        "date": 2015,
                        "url": "https://www.udacity.com/"
                    }
         		]

     		};


//declaration of object projects
     	var projects =
     	{
     		"myProjects":
     		[
     			{
     				"title": "Orange Udacity Mug",
     				"dates": 2015,
     				"description": "develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree ",
     				"image": ["images/udacityMockup.jpg"],
                    "url": "http://rodchild.github.io/Udacity-mug/"
     			},

                {
                    "title": "Interactive Resume",
                    "dates": 2015,
                    "description": "Demonstrate mastery of HTML, CSS and Javascript. Each multipart problem mimics a real-life challenge that front-end developers face. ",
                    "image": ["images/udacityMockup.jpg"],
                    "url": "http://rodchild.github.io/frontend-nanodegree-resume/"
                }


     		]
     	};

//VIEW



//CONTROLLER
 //function display of object bio

		bio.display = function()
        {

            var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
            $("#header").append(formattedMessage);

     	}

//function display footer
       function displayFooter(contact)
        {
            $('#footerContacts').append(HTMLmobile.replace("%data%", contact.mobile));
            $('#footerContacts').append(HTMLemail.replace("%data%", contact.email));
            $('#footerContacts').append(HTMLgithub.replace("%data%", contact.github));
            $('#footerContacts').append(HTMLlinkedin.replace("%data%", contact.linkedin));
            $('#footerContacts').append(HTMLlocation.replace("%data%", contact.location));

        }


//function display of object work

		work.display = function()
        {
     		for(job in work.jobs)
     		{
     			$("#workExperience").append(HTMLworkStart);
     			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
     			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
     			var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  				$(".work-entry:last").append(formattedEmployerTitle);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedDates);
                $(".work-entry:last").append(formattedWorkLocation);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);

     		}
     	}
//function to normalize the name
     	function inName(name)
     	{
     		name = name.trim().split();
     		name[1] = name[1].toUpperCase();
     		name[0] = name[0].slice(0,1).toUpperCase();
     		name[0].slice(1).toLowerCase();
     		return name[0] + "" + name[1];
     	}


//function display of object projects

		projects.display = function()
		{
			for(project in projects.myProjects)
			{
				$("#projects").append(HTMLprojectStart);
			}

		}

//function display of object education

		education.display = function()
		{

			for(school in education.schools)
			{

     			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
                //formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                $("#education").append(HTMLschoolStart);
     			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);


                var formattedSchoolDate = HTMLprojectDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedSchoolDate);


                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                $(".education-entry:last").append(formattedSchoolLocation);


     			var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
     			$(".education-entry:last").append(formattedSchoolMajors);

     		}

		}

//calling of the functions

		bio.display();
        displayFooter(bio.contacts);
		work.display();
		projects.display();
		education.display();
		$("#mapDiv").append(googleMap);




