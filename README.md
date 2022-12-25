# Personal browser home page

This project is a simple single page application that you can run on locally on your machine without webserver.
The purpose of the project is to have a simple page that can be used as homepage when you open the browser.
# Screenshot
<img width="1218" alt="Screenshot 2022-12-25 at 17 19 46" src="https://user-images.githubusercontent.com/87307429/209475245-01e8a64d-925d-4885-a8ac-cd3277e75a22.png">



# Configuration
The configuration of the onscreen details is set in files/config.js

## Configurable parameters:
 
 showHeader: set to true to show header, false to hide header
 
 showFooter: set to true to show footer, false to hide footer

 headerText: Title of the page
 
 footerText: text displayed in the footer
 
Headercolor: background color in the header

footerColor: background color in the footer

cartContent: here the details displayed in cards are displayed

  The format of the cartcontent:
   
   - Groupname: title of the card
   
    color: background color of the card header
    
    input: true or false (if the link accepts parameters provided in the link at the end of the link)
    
      example: 
        <img width="274" alt="Screenshot 2022-12-25 at 17 20 05" src="https://user-images.githubusercontent.com/87307429/209475279-96cc2705-3d6c-41e7-b8c3-19160d7675bd.png">
   
   Tools: where the different links for this group are 
    
    each tool has a name and a link: (if input is true, at the end of the link the input parameter is added when clicking on the link.
      
     <img width="272" alt="Screenshot 2022-12-25 at 17 20 11" src="https://user-images.githubusercontent.com/87307429/209475328-d08a68dc-9576-43fd-a033-f7e2d0532126.png">
