## Snowdog Front-end Recruitment test

Hi Snowdog user! I am Max and this is my finished recruitment test with comments. 


In this task, I wanted to show initiative and I complicated this task technically (only JS). Added 'class' constructor. I could create simple function click to get a value from the input fields and check them for validity (get 'validation' from stackoverflow answer). 
Or use special plugins (jQuery Validation and others). But, in this task, I create my validation. It's not super good example but works. The list of functions that you see below, code also. All work based on vanilla js. Without plugins.

Just pull/download and run 'gulp serve'.

Html in file: app/submodel.html https://github.com/ddmtApp/mtSD/blob/master/app/submodule.html

Css in file: app/styles/mtMain.css https://github.com/ddmtApp/mtSD/blob/master/app/styles/mtMain.css

Js in file: app/scripts/mtMain.js https://github.com/ddmtApp/mtSD/blob/master/app/scripts/mtMain.js

Task 1.
Function for this task: moreBacon()
.cloneNode(true) + .appendChild()

Task 2.
Style work on scss, in mtMain.css 

Task 3. 
Function for this task: sendInfo()
This method work on class 'InfoOfUser'.
1) After loaded page (event 'DOMContentLoaded') function create new object (line 152)
2) Line 153-197 we added parametrs. All named should be the same as id in html input/select
3) On line 9 we have this class. Content:
    - 'self' - object with params of status field. Will be returned
    - 'backBank' - object with params only for this class.
    - 'fieldsbox' - object with inputs or select html elements.
    - 'self.validationGo()' - function. Main function, which starts the test
    - 'backBank.showAlert()' - function. Show alert when validation is ok
    - 'backBank.standardValid()' - function. Standard validation (min/max letters, empty)
    - 'backBank.validText()' - function. Validation text
    - 'backBank.validNumber()' - function. Validation number (only numbers and other)
    - 'backBank.validEmail()' - function. Validation email ('@', '.com')
    - 'backBank.getText()' - function. Get text from fields 'at this moment'
    - 'backBank.getAllFields()' - function. Find fields with special id (named of objects should be the same as id in html)
    
![alt text](http://i.piccy.info/i9/68345f17b87134485c6381ada98e33be/1537022450/291448/1269508/vcvcvccv.jpg)

Thank you for the assignment. I'm waiting for a feedback. dmaxtsymbal@gmail.com
