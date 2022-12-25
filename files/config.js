/*
          Created By Hardy Peter 2022 - 
          This is the configuration section
          Instructions:
            set parameters to show / hide header and footer.
            set headerText to the title of the page
            set footerText to bottom footer text
          colors can be set as follows:
            brown  purple  green-blue  amber   green  dark-blue  red  blue
        
        the cartContent contains an array of the cards that are displayed on the website.
            The group name is the header of each card.
            within each card you can add one or more tools, each tool has a name and a link. make sure to add tools 
            example of format:
             [{
                 groupname: "group1",   --> this sets the name of the group
                 color: blue, --> this sets the color of the group heading
                 input: true, --> this adds an inputbox (use only when your link in the tools accepts the input parameter at the end)
                 tools: [
                     {
                         name: "tool1",  --> name of the tool
                         link: "http://link1.com"  --> link to the webapplciation

                     }, {
                         name: "tool2",
                         link: "http://link2.com"

                     },
                 ]
             }]



      */
const showHeader = true; // set to true to show header, false to hide header
const showFooter = true; // set to true to show footer, false to hide footer

const headerText = "Personal Header text";
const footerText = "Some info";
const headerColor = "greenblue2";
const footerColor = "darkgreenblue";
const cartContent = [
  {
    groupname: "Search",
    color: "red",
    input: true,
    tools: [
      {
        name: "Google",
        link: "https://www.google.com/search?q=",
      },
    ],
  },
  {
    groupname: "Link group A",
    color: "purple ",
    tools: [
      { name: "Tool A", link: "http://www.google.com" },
      { name: "Tool B", link: "" },
      {
        name: "Training",
        link: "",
      },
      { name: "Meetings", link: "" },
    ],
  },
  {
    groupname: "IT documentation",
    color: "blue",
    tools: [{ name: "Confluence", link: "" }],
  },
  {
    groupname: "Jira tickets",
    color: "dark-blue",
    tools: [{ name: "Jira Query", link: "" }],
  },
  {
    groupname: "BI reports",
    color: "bg-primary",
    tools: [{ name: "Some links", link: "" }],
  },
  {
    groupname: "Social Media",
    color: "amber",
    tools: [
      {
        name: "Facebook",
        link: "",
      },
      { name: "Linkedin", link: "" },
      { name: "Instagram", link: "" },
    ],
  },

  {
    groupname: "Other Apps",
    color: "green",
    tools: [
      { name: "TBD", link: "" },
      { name: "TBD", link: "" },
      {
        name: "TBD",
        link: "",
      },
      { name: "TBD", link: "" },
    ],
  },
  {
    groupname: "Other Apps",
    color: "green",
    tools: [
      { name: "TBD", link: "" },
      { name: "TBD", link: "" },
      {
        name: "TBD",
        link: "",
      },
      { name: "TBD", link: "" },
    ],
  },
];
