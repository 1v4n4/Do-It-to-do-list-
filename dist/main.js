(()=>{"use strict";function e(e,t){console.log("h"),this.name=e,console.log("he"),this.description=t}const t=e=>{const t=document.getElementById("projectsContainer"),o=document.createElement("p");o.className="";const n=document.createTextNode(e.name);if(o.appendChild(n),t.appendChild(o),0!=e.description){const o=document.createElement("p");o.className="";const n=document.createTextNode(e.name);o.appendChild(n),t.appendChild(o)}},o=document.getElementById("addForm");let n=[];null!==localStorage.getItem("myProjects")&&(n=JSON.parse(window.localStorage.getItem("myProjects"))),console.log(n),o.addEventListener("click",(c=>{c.preventDefault(),console.log(o[1].value);const l=o[0].value,s=o[1].value;let a=!0;if(l||(alert("Project's name can't be empty"),a=!1),!a)return!1;console.log("heree");const r=new e(l,s);console.log(r),t(r),n.push(r),console.log("here",n),console.log("in setProjectssss"),window.localStorage.setItem("myProjects",JSON.stringify(n)),myProjects.forEach((e=>t(e)))}))})();