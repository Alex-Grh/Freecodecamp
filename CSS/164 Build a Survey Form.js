/*
Build a Survey Form
Objective: Build an app that is functionally similar to https://survey-form.freecodecamp.rocks

User Stories:

You should have a page title in an h1 element with an id of title
You should have a short explanation in a p element with an id of description
You should have a form element with an id of survey-form
Inside the form element, you are required to enter your name in an input field that has an id of name and a type of text
Inside the form element, you are required to enter your email in an input field that has an id of email
If you enter an email that is not formatted correctly, you will see an HTML5 validation error
Inside the form, you can enter a number in an input field that has an id of number
If you enter non-numbers in the number input, you will see an HTML5 validation error
If you enter numbers outside the range of the number input, which are defined by the min and max attributes, you will see an HTML5 validation error
For the name, email, and number input fields, you can see corresponding label elements in the form, that describe the purpose of each field with the following ids: id="name-label", id="email-label", and id="number-label"
For the name, email, and number input fields, you can see placeholder text that gives a description or instructions for each field
Inside the form element, you should have a select dropdown element with an id of dropdown and at least two options to choose from
Inside the form element, you can select an option from a group of at least two radio buttons that are grouped using the name attribute
Inside the form element, you can select several fields from a series of checkboxes, each of which must have a value attribute
Inside the form element, you are presented with a textarea for additional comments
Inside the form element, you are presented with a button with id of submit to submit all the inputs
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

Note: Be sure to add <link rel="stylesheet" href="styles.css"> in your HTML to link your stylesheet and apply your CSS

Tests
Waiting:You should have an h1 element with an id of title.
Waiting:Your #title should not be empty.
Waiting:You should have a p element with an id of description.
Waiting:Your #description should not be empty.
Waiting:You should have a form element with an id of survey-form.
Waiting:You should have an input element with an id of name.
Waiting:Your #name should have a type of text.
Waiting:Your #name should require input.
Waiting:Your #name should be a descedant of #survey-form.
Waiting:You should have an input element with an id of email.
Waiting:Your #email should have a type of email.
Waiting:Your #email should require input.
Waiting:Your #email should be a descedant of #survey-form
Waiting:You should have an input element with an id of number.
Waiting:Your #number should be a descedant of #survey-form.
Waiting:Your #number should have a type of number.
Waiting:Your #number should have a min attribute with a numeric value.
Waiting:Your #number should have a max attribute with a numeric value.
Waiting:You should have a label element with an id of name-label.
Waiting:You should have a label element with an id of email-label.
Waiting:You should have a label element with an id of number-label.
Waiting:Your #name-label should contain text that describes the input.
Waiting:Your #email-label should contain text that describes the input.
Waiting:Your #number-label should contain text that describes the input.
Waiting:Your #name-label should be a descedant of #survey-form.
Waiting:Your #email-label should be a descedant of #survey-form.
Waiting:Your #number-label should be a descedant of #survey-form.
Waiting:Your #name should have a placeholder attribute and value.
Waiting:Your #email should have a placeholder attribute and value.
Waiting:Your #number should have a placeholder attribute and value.
Waiting:You should have a select field with an id of dropdown.
Waiting:Your #dropdown should have at least two selectable (not disabled) option elements.
Waiting:Your #dropdown should be a descendant of #survey-form.
Waiting:You should have at least two input elements with a type of radio (radio buttons).
Waiting:You should have at least two radio buttons that are descendants of #survey-form.
Waiting:All your radio buttons should have a value attribute and value.
Waiting:All your radio buttons should have a name attribute and value.
Waiting:Every radio button group should have at least 2 radio buttons.
Waiting:You should have at least two input elements with a type of checkbox (checkboxes) that are descendants of #survey-form.
Waiting:All your checkboxes inside #survey-form should have a value attribute and value.
Waiting:You should have at least one textarea element that is a descendant of #survey-form.
Waiting:You should have an input or button element with an id of submit.
Waiting:Your #submit should have a type of submit.
Waiting:Your #submit should be a descendant of #survey-form.
*/
< !DOCTYPE html >
   <html>
      <head>
         <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
         <div class="container">
            <header class="header">
               <h1 id="title" class="text-center">freeCodeCamp Survey Form</h1>
               <p id="description" class="description text-center">
                  Thank you for taking the time to help us improve the platform
               </p>
            </header>
            <form id="survey-form">
               <div class="form-group">
                  <label id="name-label" for="name">Name</label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     class="form-control"
                     placeholder="Enter your name"
                     required
                  />
               </div>
               <div class="form-group">
                  <label id="email-label" for="email">Email</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     class="form-control"
                     placeholder="Enter your Email"
                     required
                  />
               </div>
               <div class="form-group">
                  <label id="number-label" for="number"
                  >Age<span class="clue">(optional)</span></label
                  >
                  <input
                     type="number"
                     name="age"
                     id="number"
                     min="10"
                     max="99"
                     class="form-control"
                     placeholder="Age"
                  />
               </div>
               <div class="form-group">
                  <p>Which option best describes your current role?</p>
                  <select id="dropdown" name="role" class="form-control" required>
                     <option disabled selected value>Select current role</option>
                     <option value="student">Student</option>
                     <option value="job">Full Time Job</option>
                     <option value="learner">Full Time Learner</option>
                     <option value="preferNo">Prefer not to say</option>
                     <option value="other">Other</option>
                  </select>
               </div>

               <div class="form-group">
                  <p>Would you recommend freeCodeCamp to a friend?</p>
                  <label>
                     <input
                        name="user-recommend"
                        value="definitely"
                        type="radio"
                        class="input-radio"
                        checked
                     />Definitely</label
                  >
                  <label>
                     <input
                        name="user-recommend"
                        value="maybe"
                        type="radio"
                        class="input-radio"
                     />Maybe</label
                  >

                  <label
                  ><input
                        name="user-recommend"
                        value="not-sure"
                        type="radio"
                        class="input-radio"
                     />Not sure</label
                  >
               </div>

               <div class="form-group">
                  <p>What is your favorite feature of freeCodeCamp?</p>
                  <select id="most-like" name="mostLike" class="form-control" required>
                     <option disabled selected value>Select an option</option>
                     <option value="challenges">Challenges</option>
                     <option value="projects">Projects</option>
                     <option value="community">Community</option>
                     <option value="openSource">Open Source</option>
                  </select>
               </div>

               <div class="form-group">
                  <p>
                     What would you like to see improved?
                     <span class="clue">(Check all that apply)</span>
                  </p>

                  <label
                  ><input
                        name="prefer"
                        value="front-end-projects"
                        type="checkbox"
                        class="input-checkbox"
                     />Front-end Projects</label
                  >
                  <label>
                     <input
                        name="prefer"
                        value="back-end-projects"
                        type="checkbox"
                        class="input-checkbox"
                     />Back-end Projects</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="data-visualization"
                        type="checkbox"
                        class="input-checkbox"
                     />Data Visualization</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="challenges"
                        type="checkbox"
                        class="input-checkbox"
                     />Challenges</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="open-source-community"
                        type="checkbox"
                        class="input-checkbox"
                     />Open Source Community</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="gitter-help-rooms"
                        type="checkbox"
                        class="input-checkbox"
                     />Gitter help rooms</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="videos"
                        type="checkbox"
                        class="input-checkbox"
                     />Videos</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="city-meetups"
                        type="checkbox"
                        class="input-checkbox"
                     />City Meetups</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="wiki"
                        type="checkbox"
                        class="input-checkbox"
                     />Wiki</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="forum"
                        type="checkbox"
                        class="input-checkbox"
                     />Forum</label
                  >
                  <label
                  ><input
                        name="prefer"
                        value="additional-courses"
                        type="checkbox"
                        class="input-checkbox"
                     />Additional Courses</label
                  >
               </div>

               <div class="form-group">
                  <p>Any comments or suggestions?</p>
                  <textarea
                     id="comments"
                     class="input-textarea"
                     name="comment"
                     placeholder="Enter your comment here..."
                  ></textarea>
               </div>

               <div class="form-group">
                  <button type="submit" id="submit" class="submit-button">
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </body>
   </html>
