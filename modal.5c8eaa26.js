parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hR3q":[function(require,module,exports) {
(()=>{const e={openModalBtnHr:document.querySelector("[data-modal-open-hr]"),closeModalBtnHr:document.querySelector("[data-modal-close-hr]"),modalHr:document.querySelector("[data-modal-hr]")};function o(){e.modalHr.classList.toggle("is-hidden")}e.openModalBtnHr.addEventListener("click",o),e.closeModalBtnHr.addEventListener("click",o)})(),(()=>{const e={openModalBtnHrMob:document.querySelector("[data-modal-open-hr-mob]"),closeModalBtnHrMob:document.querySelector("[data-modal-close-hr-mob]"),modalHrMob:document.querySelector("[data-modal-hr-mob]")};function o(){e.modalHrMob.classList.toggle("is-hidden")}e.openModalBtnHrMob.addEventListener("click",o),e.closeModalBtnHrMob.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtnLoc:document.querySelector("[data-modal-open-loc]"),closeModalBtnLoc:document.querySelector("[data-modal-close-loc]"),modalLoc:document.querySelector("[data-modal-loc]")};function o(){e.modalLoc.classList.toggle("is-hidden")}e.openModalBtnLoc.addEventListener("click",o),e.closeModalBtnLoc.addEventListener("click",o)})(),(()=>{const e={openModalBtnFra:document.querySelector("[data-modal-open-fra]"),closeModalBtnFra:document.querySelector("[data-modal-close-fra]"),modalFra:document.querySelector("[data-modal-fra]")};function o(){e.modalFra.classList.toggle("is-hidden")}e.openModalBtnFra.addEventListener("click",o),e.closeModalBtnFra.addEventListener("click",o)})(),document.querySelector(".mail-input-form").addEventListener("submit",e=>{e.preventDefault(),new FormData(e.currentTarget).forEach((e,o)=>console.log(`${o}: ${e}`)),e.currentTarget.reset()});
},{}]},{},["hR3q"], null)
//# sourceMappingURL=/team-project/modal.5c8eaa26.js.map