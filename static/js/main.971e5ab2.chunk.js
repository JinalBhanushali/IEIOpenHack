(this.webpackJsonpieiopenhackwebsite=this.webpackJsonpieiopenhackwebsite||[]).push([[0],{51:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var o=s(9),a=s(1),i=s(7),n=s.n(i),r=(s(51),s(26)),c=s(27),l=s(31),d=s(30),m=s(0);a.Component;var h=function(){return Object(m.jsx)("div",{id:"home",children:Object(m.jsxs)("div",{id:"home-content",children:[Object(m.jsxs)("h1",{children:["Welcome",Object(m.jsx)("br",{}),"to",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:"OPEN HACK"})]}),Object(m.jsx)("h2",{children:"Coming soon"}),Object(m.jsxs)("div",{id:"timer",children:[Object(m.jsx)("div",{id:"day",className:"time"}),Object(m.jsx)("div",{id:"hour",className:"time"}),Object(m.jsx)("div",{id:"minute",className:"time"}),Object(m.jsx)("div",{id:"second",className:"time"})]})]})})},b=s(37),u=s(87),p=s(42),j=s.n(p),f=s(89),g=Object(u.a)((function(e){var t;return{toTop:(t={zIndex:2,position:"fixed",bottom:"2vh",backgroundColor:"#DCDCDC",color:"black","&:hover, &.Mui-focusVisible":{transition:"0.3s",color:"#397BA6",backgroundColor:"#DCDCDC"}},Object(b.a)(t,e.breakpoints.up("xs"),{right:"5%",backgroundColor:"rgb(220,220,220,0.7)"}),Object(b.a)(t,e.breakpoints.up("lg"),{right:"6.5%"}),t)}})),w=function(e){var t=e.showBelow,s=g(),i=Object(a.useState)(!t),n=Object(o.a)(i,2),r=n[0],c=n[1],l=function(){window.pageYOffset>t?r||c(!0):r&&c(!1)};return Object(a.useEffect)((function(){if(t)return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l)}})),Object(m.jsx)("div",{children:r&&Object(m.jsx)(f.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:s.toTop,"aria-label":"to top",component:"span",children:Object(m.jsx)(j.a,{})})})};function O(){return Object(m.jsx)("div",{id:"Schedule",children:Object(m.jsxs)("div",{className:"schedulediv",children:[Object(m.jsx)("h1",{id:"heading",children:"SCHEDULE"}),Object(m.jsxs)("div",{id:"main",children:[Object(m.jsxs)("div",{class:"event",children:[Object(m.jsxs)("div",{class:"event-description",children:[Object(m.jsx)("h1",{className:"",children:"Lorem ipsum dolor sit amet."}),Object(m.jsx)("div",{className:"content ",children:Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque est, fuga suscipit impedit odit cum ipsum, tempore quae harum quasi odio accusamus aperiam, quaerat"})})]}),Object(m.jsx)("div",{class:"date",children:Object(m.jsx)("div",{class:"show-on-scroll",children:Object(m.jsx)("h2",{children:"21 Feb, 2021"})})})]}),Object(m.jsxs)("div",{class:"event",children:[Object(m.jsxs)("div",{class:"event-description",children:[Object(m.jsx)("h1",{children:"Lorem ipsum dolor sit amet."}),Object(m.jsx)("div",{class:"content",children:Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque est, fuga suscipit impedit odit cum ipsum, tempore quae"})})]}),Object(m.jsx)("div",{class:"date",children:Object(m.jsx)("div",{class:"show-on-scroll",children:Object(m.jsx)("h2",{children:"21 Feb, 2021"})})})]}),Object(m.jsxs)("div",{class:"event",children:[Object(m.jsxs)("div",{class:"event-description",children:[Object(m.jsx)("h1",{children:"Lorem ipsum dolor sit amet."}),Object(m.jsx)("div",{class:"content",children:Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque est, fuga suscipit impedit odit cum ipsum, tempore quae harum quasi odio accusamus aperiam, quaerat"})})]}),Object(m.jsx)("div",{class:"date",children:Object(m.jsx)("div",{class:"show-on-scroll",children:Object(m.jsx)("h2",{children:"21 Feb, 2021"})})})]})]})]})})}var y=function(e){var t=e.posts,s=e.search,o=e.Arr;return Object(m.jsx)("div",{className:" mx-md-5  mx-3 postTable",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:" text-center",children:[Object(m.jsx)("th",{scope:"col",className:"border-right border-left",children:"No."}),Object(m.jsx)("th",{scope:"col",className:"border-right",children:"Problem ID"}),Object(m.jsx)("th",{scope:"col",className:"border-right",children:"Problem Statement"}),Object(m.jsx)("th",{scope:"col",className:"border-right",children:"Problem Description"}),Object(m.jsx)("th",{scope:"col",className:"border-right",children:"Details"})]})}),Object(m.jsx)("tbody",{children:""==s||"S"==s?t.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",className:"border-right border-left  text-center border-bottom",children:e.no},t),Object(m.jsx)("td",{className:"border-right  text-center border-bottom",children:e.id}),Object(m.jsxs)("td",{className:"border-right border-bottom",children:[e.statement," "]}),Object(m.jsx)("td",{className:"border-right border-bottom",children:e.description}),Object(m.jsx)("td",{className:"border-right border-bottom",children:Object(m.jsx)("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":e.modal,children:"Deatils"})})]})})):o.filter((function(e){if(e.id.includes(s))return e})).map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",className:"border-right border-left  text-center border-bottom",children:e.no},t),Object(m.jsx)("td",{className:"border-right  text-center border-bottom",children:e.id}),Object(m.jsxs)("td",{className:"border-right border-bottom",children:[e.statement," "]}),Object(m.jsx)("td",{className:"border-right border-bottom",children:e.description}),Object(m.jsx)("td",{className:"border-right border-bottom",children:Object(m.jsx)("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":e.modal,children:"Deatils"})})]})}))})]})})},S=function(e){for(var t=e.postsPerPage,s=e.totalPosts,o=e.paginate,a=e.setsearch,i=[],n=1;n<=Math.ceil(s/t);n++)i.push(n);return Object(m.jsx)("div",{className:"",children:Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{className:"pagination",children:i.map((function(e){return Object(m.jsx)("li",{className:"page-item",children:Object(m.jsx)("button",{onClick:function(){o(e),a("")},href:"#",className:"page-link",children:e})},e)}))})})})},x=[{no:"1",modal:"#modal1",modalid:"modal1",statement:"Wheel Alignment /Balancing setup modification for ease,work accuracy and efficiency improvement in Wheel balancing",id:"S01",description:"In automobile sector one of the common service is that it can\ufffdt accommodate all vast range of vehicle in term of length and breadth of vehicle wheel base. It is also difficult for single person to perform whole procedure alone. For single person its time consuming and tedious to up and down on downstairs made in the setup to perform different task."},{no:"2",modal:"#modal2",modalid:"modal2",statement:"Wheel Alignment /Balancing setup modification for ease,work accuracy and efficiency improvement in Wheel balancing",id:"S02",description:" Adaptive Signal Processing, Embedded Systems"},{no:"3",modal:"#modal3",modalid:"modal3",statement:"Wheel Alignment /Balancing setup modification for ease,work accuracy and efficiency improvement in Wheel balancing",id:"S03",description:"industrial  on ecology has forced us to be more stringent with our eflluent release standards. Novel techniques like photocatalysis which have the potential to utilize sunlight for degradation of pollutants will help a long way in overcoming the current barriers."},{no:"4",modal:"#modal4",modalid:"modal4",statement:"Wheel Alignment /Balancing setup modification for ease,work accuracy and efficiency improvement in Wheel balancing",id:"S04",description:"industrial wpact on ecology has forced us to be more stringent with our eflluent release standards. Novel techniques like photocatalysis which have the potential to utilize sunlight for degradation of pollutants will help a long way in overcoming the current barriers."},{no:"5",modal:"#modal5",modalid:"modal5",statement:"Wheel Alignment /Balancing setup modification for ease,work accuracy and efficiency improvement in Wheel balancing",id:"S05",description:"industrial pact on ecology has forced us to be more stringent with our eflluent release standards. Novel techniques like photocatalysis which have the potential to utilize sunlight for degradation of pollutants will help a long way in overcoming the current barriers."},{no:"6",modal:"#modal6",modalid:"modal6",statement:"IoT based Smart bottle for Healthcare",id:"S06",description:" indact on ecology has forced us to be more stringent with our eflluent release standards. Novel techniques like photocatalysis which have the potential to utilize sunlight for degradation of pollutants will help a long way in overcoming the current barriers."},{no:"7",modal:"#modal7",modalid:"modal7",statement:"Degradation of pollutants using industrial wastewater",id:"S07",description:"industrial wastewa impact on ecology has forced us to be more stringent with our eflluent release standards. Novel techniques like photocatalysis which have the potential to utilize sunlight for degradation of pollutants will help a long way in overcoming the current barriers."},{no:"8",modal:"#modal8",modalid:"modal8",statement:"\tRecycling/ reutilization of treated effluent",id:"S08",description:"At present we are treating effluent and getting required quality as per GPCB norms. We want to utilize this treated effluent in the various dairy process and utilities."},{no:"9",modal:"#modal9",modalid:"modal9",statement:"\tAutomatic Drip Irrigation System",id:"S09",description:"In the recent era, the developments in the agriculture fields are the buzzword in the market. The proposed system uses sensors to monitor the soil moisture content which depends on the valves of the system which can get turned ON/OFF automatically. "},{no:"10",modal:"#modal10",modalid:"modal10",statement:"\tAutomatic Drip Irrigation System",id:"S10",description:"In the recent era, the developments in the agriculture fields are the buzzword in the market. The proposed system uses sensors to monitor the soil moisture content which depends on the valves of the system which can get turned ON/OFF automatically. "},{no:"11",modal:"#modal11",modalid:"modal11",statement:"\tOff Grid Solar Home System(SHS)",id:"S11",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"12",modal:"#modal12",modalid:"modal12",statement:"\tOff Grid Solar Home System(SHS)",id:"S12",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"13",modal:"#modal13",modalid:"modal13",statement:"\tOff Grid Solar Home System(SHS)",id:"S13",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"14",modal:"#modal14",modalid:"modal14",statement:"\tOff Grid Solar Home System(SHS)",id:"S14",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"15",modal:"#modal15",modalid:"modal15",statement:"\tOff Grid Solar Home System(SHS)",id:"S15",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"16",modal:"#modal16",modalid:"modal16",statement:"\tOff Grid Solar Home System(SHS)",id:"S16",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"17",modal:"#modal17",modalid:"modal17",statement:"\tOff Grid Solar Home System(SHS)",id:"S17",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"18",modal:"#modal18",modalid:"modal18",statement:"\tOff Grid Solar Home System(SHS)",id:"S18",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"19",modal:"#modal19",modalid:"modal19",statement:"\tOff Grid Solar Home System(SHS)",id:"S19",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"20",modal:"#modal20",modalid:"modal20",statement:"\tOff Grid Solar Home System(SHS)",id:"S20",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"21",modal:"#modal21",modalid:"modal21",statement:"\tOff Grid Solar Home System(SHS)",id:"S21",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"22",modal:"#modal22",modalid:"modal22",statement:"\tOff Grid Solar Home System(SHS)",id:"S22",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"23",modal:"#modal23",modalid:"modal23",statement:"\tOff Grid Solar Home System(SHS)",id:"S23",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"24",modal:"#modal24",modalid:"modal24",statement:"\tOff Grid Solar Home System(SHS)",id:"S24",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"25",modal:"#modal25",modalid:"modal25",statement:"\tOff Grid Solar Home System(SHS)",id:"S25",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"26",modal:"#modal26",modalid:"modal26",statement:"\tOff Grid Solar Home System(SHS)",id:"S26",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"27",modal:"#modal27",modalid:"modal27",statement:"\tOff Grid Solar Home System(SHS)",id:"S27",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"28",modal:"#modal28",modalid:"modal28",statement:"\tOff Grid Solar Home System(SHS)",id:"S28",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"29",modal:"#modal29",modalid:"modal29",statement:"\tOff Grid Solar Home System(SHS)",id:"S29",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"30",modal:"#modal30",modalid:"modal30",statement:"\tAutomatic Drip Irrigation System",id:"S30",description:"In the recent era, the developments in the agriculture fields are the buzzword in the market. The proposed system uses sensors to monitor the soil moisture content which depends on the valves of the system which can get turned ON/OFF automatically. "},{no:"31",modal:"#modal31",modalid:"modal31",statement:"\tOff Grid Solar Home System(SHS)",id:"S31",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"32",modal:"#modal32",modalid:"modal32",statement:"\tOff Grid Solar Home System(SHS)",id:"S32",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"33",modal:"#modal33",modalid:"modal33",statement:"\tOff Grid Solar Home System(SHS)",id:"S33",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"34",modal:"#modal34",modalid:"modal34",statement:"\tOff Grid Solar Home System(SHS)",id:"S34",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"35",modal:"#modal35",modalid:"modal35",statement:"\tOff Grid Solar Home System(SHS)",id:"S35",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"36",modal:"#modal36",modalid:"modal36",statement:"\tOff Grid Solar Home System(SHS)",id:"S36",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"37",modal:"#modal37",modalid:"modal37",statement:"\tOff Grid Solar Home System(SHS)",id:"S37",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"38",modal:"#modal38",modalid:"modal38",statement:"\tOff Grid Solar Home System(SHS)",id:"S38",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"39",modal:"#modal39",modalid:"modal39",statement:"\tOff Grid Solar Home System(SHS)",id:"S39",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"40",modal:"#modal40",modalid:"modal40",statement:"\tOff Grid Solar Home System(SHS)",id:"S40",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"41",modal:"#modal41",modalid:"modal41",statement:"\tOff Grid Solar Home System(SHS)",id:"S41",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"42",modal:"#modal42",modalid:"modal42",statement:"\tOff Grid Solar Home System(SHS)",id:"S42",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"43",modal:"#modal43",modalid:"modal43",statement:"\tOff Grid Solar Home System(SHS)",id:"S43",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"44",modal:"#modal44",modalid:"modal44",statement:"\tOff Grid Solar Home System(SHS)",id:"S44",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"45",modal:"#modal45",modalid:"modal45",statement:"\tOff Grid Solar Home System(SHS)",id:"S45",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"46",modal:"#modal46",modalid:"modal46",statement:"\tOff Grid Solar Home System(SHS)",id:"S46",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"47",modal:"#modal47",modalid:"modal47",statement:"\tOff Grid Solar Home System(SHS)",id:"S47",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"48",modal:"#modal48",modalid:"modal48",statement:"\tOff Grid Solar Home System(SHS)",id:"S48",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "},{no:"49",modal:"#modal49",modalid:"modal49",statement:"\tOff Grid Solar Home System(SHS)",id:"S49",description:"This chapter focuses on the second market segment, namely, solar home system business modals with a particular focus on those operating on the "}];var v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],i=t[1],n=Object(a.useState)(x),r=Object(o.a)(n,1)[0],c=Object(a.useState)(1),l=Object(o.a)(c,2),d=l[0],h=l[1],b=Object(a.useState)(10),u=Object(o.a)(b,1)[0],p=d*u,j=p-u,f=r.slice(j,p);return Object(m.jsxs)("div",{class:"w-100",id:"ProblemStatement",className:"bg-light",children:[Object(m.jsx)("section",{class:"page-header",children:Object(m.jsx)("div",{class:"",children:Object(m.jsx)("div",{class:"row",children:Object(m.jsx)("div",{class:"col-md-12",children:Object(m.jsxs)("ul",{class:"breadcrumb",children:[Object(m.jsx)("li",{className:"pt-md-2",children:Object(m.jsx)("font",{class:"header-text ml-md-5",color:"white",size:"4",children:"Problem Statements"})}),Object(m.jsx)("font",{color:"white",size:"4"}),Object(m.jsx)("li",{class:"active",children:Object(m.jsx)("font",{color:"white",size:"4",children:" "})})]})})})})}),Object(m.jsxs)("div",{className:"mx-md-5 mx-3",children:[Object(m.jsxs)("div",{class:"row ",children:[Object(m.jsx)("div",{className:"col-md-2 mt-5",children:Object(m.jsx)(S,{postsPerPage:u,totalPosts:r.length,paginate:function(e){return h(e)},setsearch:i})}),Object(m.jsx)("div",{className:"col-md-5"}),Object(m.jsx)("div",{className:" col-sm mb-4 mt-sm-4",children:Object(m.jsx)("div",{className:"row mr-sm-1",children:Object(m.jsx)("input",{className:"mx-3 col ",list:"browsers",statement:"browser",id:"browser",placeholder:"Search Problem ID",value:s,onChange:function(e){i(e.target.value.toLocaleUpperCase())},size:"30",maxlength:"5"})})})]}),Object(m.jsx)("datalist",{id:"browsers",children:r.map((function(e){return Object(m.jsx)("option",{value:e.id})}))})]}),Object(m.jsx)(y,{posts:f,search:s,Arr:r}),Object(m.jsx)("div",{children:r.map((function(e,t){return Object(m.jsx)("div",{className:"modal fade",id:e.modalid,tabindex:"-1",role:"dialog","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsxs)("h5",{className:"modal-title",id:e.modalid,children:["Deatils of ",e.id," Problem Statement"]}),Object(m.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(m.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsxs)("table",{className:" ",children:[Object(m.jsxs)("tr",{className:"border-bottom ",children:[Object(m.jsx)("th",{className:"pr-3",children:"No "}),Object(m.jsxs)("td",{className:"",children:[" ",e.no]},t)]}),Object(m.jsxs)("tr",{className:" border-bottom",children:[Object(m.jsxs)("th",{className:"pr-3",children:["Problem Id"," "]}),Object(m.jsxs)("td",{className:"",children:[" ",e.id]})]}),Object(m.jsxs)("tr",{className:"border-bottom",children:[Object(m.jsxs)("th",{className:"pr-3",children:["Problem statement"," "]}),Object(m.jsxs)("td",{className:"",children:[" ",e.statement]})]}),Object(m.jsxs)("tr",{className:" ",children:[Object(m.jsxs)("th",{className:"pr-3",children:["Problem Description"," "]}),Object(m.jsxs)("td",{className:"",children:[" ",e.description]})]})]})}),Object(m.jsx)("div",{className:"modal-footer",children:Object(m.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"})})]})})})}))})]})};a.Component;var k=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"card-wrapper",children:Object(m.jsxs)("div",{className:"card profile-two",children:[Object(m.jsx)("div",{className:"card-image profile-img--two",children:Object(m.jsx)("img",{src:e.IMG,className:"cover-image",alt:"profile"})}),Object(m.jsxs)("ul",{className:"social-icons",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.FB,target:"_blank",children:Object(m.jsx)("i",{className:"fa fa-facebook-f"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.instagram,target:"_blank",children:Object(m.jsx)("i",{className:"fa fa-instagram"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.twitter,target:"_blank",children:Object(m.jsx)("i",{className:"fa fa-twitter"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.linkedin,target:"_blank",children:Object(m.jsx)("i",{className:"fa fa-linkedin"})})})]}),Object(m.jsx)("div",{className:"details jane",children:Object(m.jsxs)("h2",{children:[e.name,Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"job-title",children:e.role})]})})]})})})},N=[{id:1,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://image.ibb.co/c9rY6J/profile02.jpg",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:2,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://picsum.photos/250/350?image=1027",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:3,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://picsum.photos/250/350?image=839",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:4,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://picsum.photos/250/350?image=857",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:5,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://picsum.photos/250/350?image=836",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:6,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://image.ibb.co/c9rY6J/profile08.jpg",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"}],_=[{id:1,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://image.ibb.co/c9rY6J/profile02.jpg",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:2,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://picsum.photos/250/350?image=1027",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:3,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://picsum.photos/250/350?image=839",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:4,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://picsum.photos/250/350?image=857",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"},{id:5,Person_name:"Patricia Knott",Person_role:"Web Developer",Person_IMG:"https://picsum.photos/250/350?image=836",Link_FB:"https://www.youtube.com/?gl=IN&tab=r1",Link_instagram:"https://www.youtube.com/?gl=IN&tab=r1",Link_twitter:"https://www.youtube.com/?gl=IN&tab=r1",Link_linkedin:"https://www.youtube.com/?gl=IN&tab=r1"}],H=function(){return Object(m.jsx)("div",{id:"organizer",children:Object(m.jsxs)("div",{className:"background1",children:[Object(m.jsx)("h1",{className:"heading",children:"::: Organizer :::"}),Object(m.jsx)("div",{className:"container",children:_.map((function(e){return Object(m.jsx)(k,{name:e.Person_name,role:e.Person_role,IMG:e.Person_IMG,FB:e.Link_FB,twitter:e.Link_twitter,instagram:e.Link_instagram,linkedin:e.Link_linkedin},e.id)}))})]})})},I=function(){return Object(m.jsx)("div",{id:"judges",children:Object(m.jsxs)("div",{className:"background2",children:[Object(m.jsx)("h1",{className:"heading",children:"::: Judges :::"}),Object(m.jsx)("div",{className:"container",children:N.map((function(e){return Object(m.jsx)(k,{name:e.Person_name,role:e.Person_role,IMG:e.Person_IMG,FB:e.Link_FB,twitter:e.Link_twitter,instagram:e.Link_instagram,linkedin:e.Link_linkedin},e.id)}))})]})})};function P(){return Object(m.jsx)("div",{id:"about",children:Object(m.jsx)("section",{id:"about",class:"about-us-countdown-area section-padding-100-0",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsxs)("div",{class:"row mb-80",children:[Object(m.jsx)("div",{class:"col-12 col-lg-6",children:Object(m.jsxs)("div",{class:"about-content-text",children:[Object(m.jsx)("h3",{class:"wow fadeInUp abouth3","data-wow-delay":"300ms",children:"About"}),Object(m.jsx)("p",{class:"wow fadeInUp abouth3","data-wow-delay":"300ms",children:"Sadda Hack is a software-cum-hardware hackathon event where developers, students, hobbyists participate to engineer an innovative application revolving around any themes or area of problem they feel passionate about. Sadda Hack is a software-cum-hardware hackathon event where developers, students, hobbyists participate to engineer an innovative application revolving around any themes or area of problem they feel passionate about."}),Object(m.jsxs)("p",{class:"wow fadeInUp abouth3","data-wow-delay":"300ms",children:["Apply to the",Object(m.jsx)("a",{href:"#",class:"aboutatag",children:Object(m.jsx)("strong",{children:"Build for Open Mind Hackathon"})}),"with the same hack you create at SaddaHack!"]}),Object(m.jsx)("button",{type:"button",class:"btn btn-danger aboutbtn",children:Object(m.jsx)("a",{href:"#",target:"_blank",className:"aboutbtntext",children:"Register For Open Mind Hackathon"})})]})}),Object(m.jsx)("div",{class:"col-12 col-lg-3",children:Object(m.jsxs)("div",{class:"about-content-text",children:[Object(m.jsx)("h3",{class:"wow fadeInUp abouth3","data-wow-delay":"300ms",children:"When"}),Object(m.jsx)("p",{class:"wow fadeInUp abouth3","data-wow-delay":"300ms",children:"28 March - 30 March 2021"})]})})]})})})})}var L=s.p+"static/media/logo.5b04bcc9.jpg",G=s(13);function T(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2);t[0],t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("nav",{class:"navbar navbar-expand-lg  position-fixed ",children:[Object(m.jsx)("a",{class:"navbar-brand navbarimg",href:"#home",children:Object(m.jsx)("img",{src:L,alt:"logo"})}),Object(m.jsx)("div",{class:"collapse navbar-collapse ",id:"navbarSupportedContent navbar",children:Object(m.jsxs)("ul",{class:"navbar-nav mr-auto nav-link nav-links navbarul",children:[Object(m.jsx)("li",{class:"nav-item active navbarli",children:Object(m.jsxs)(G.Link,{activeClass:"active",class:"",to:"home",spy:!0,smooth:!0,offset:-79,duration:500,className:"navbara",children:["Home"," "]})}),Object(m.jsx)("li",{class:"nav-item navbarli",children:Object(m.jsxs)(G.Link,{activeClass:"active",class:"",to:"Schedule",spy:!0,smooth:!0,offset:-79,duration:500,className:"navbara",children:["Schedule"," "]})}),Object(m.jsx)("li",{class:"nav-item navbarli",children:Object(m.jsxs)(G.Link,{activeClass:"active",class:"",to:"ProblemStatement",spy:!0,smooth:!0,offset:-79,duration:500,className:"navbara",children:["Problem statement"," "]})}),Object(m.jsx)("li",{class:"nav-item active navbarli",children:Object(m.jsxs)(G.Link,{activeClass:"active",class:"",to:"organizer",spy:!0,smooth:!0,offset:-79,duration:500,className:"navbara",children:[" ","Organizer"," "]})}),Object(m.jsx)("li",{class:"nav-item active navbarli",children:Object(m.jsxs)(G.Link,{activeClass:"active",class:"",to:"judges",spy:!0,smooth:!0,offset:-79,duration:500,className:"navbara",children:[" ","Judges"," "]})}),Object(m.jsx)("li",{class:"nav-item active navbarli",children:Object(m.jsxs)(G.Link,{activeClass:"active",class:"",to:"about",spy:!0,smooth:!0,offset:-79,duration:500,className:"navbara",children:[" ","About Us"," "]})})]})})]})}),Object(m.jsx)(h,{}),Object(m.jsx)(O,{}),Object(m.jsx)(v,{}),Object(m.jsx)(H,{}),Object(m.jsx)("hr",{}),Object(m.jsx)(I,{}),Object(m.jsx)(P,{}),Object(m.jsx)(w,{showBelow:250})]})}var D=Object(m.jsx)(T,{});n.a.render(D,document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.971e5ab2.chunk.js.map