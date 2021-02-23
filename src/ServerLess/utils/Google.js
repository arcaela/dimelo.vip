if(!document.getElementById('google-maps-api')){
    const script = document.createElement('script')
    script.setAttribute('async', '');
    script.setAttribute('id', 'google-maps-api');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208&libraries=&callback=googleReady';
    document.querySelector('head').appendChild(script);
}

const Google = {
    __google__:null,
    __promise__:new Promise(()=>{}),
    ready(callback){ return this.__promise__.then(callback); },
};
Google.__promise__ = new Promise((s,e)=>{ Google.__resolve__=s; Google.__reject__=e; });
window.googleReady = ()=>Google.__resolve__(Google.__google__=window.google);



export default Google;