function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}document.addEventListener("DOMContentLoaded",function(){var e,r=function(e){if(Array.isArray(e))return t(e)}(e=document.querySelectorAll(".population"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=document.querySelector(".total-population"),o=document.querySelector(".average-population"),a=r.map(function(t){return+t.textContent.trim().replace(/,/g,"")}),i=a.reduce(function(t,e){return t+e},0),u=i/a.length;n.textContent=i.toLocaleString("en-US"),o.textContent=u.toLocaleString("en-US")});
//# sourceMappingURL=index.2bcddba3.js.map
