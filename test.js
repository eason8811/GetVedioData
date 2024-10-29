location = {
    "ancestorOrigins": {},
    "href": "https://v.qq.com/x/cover/mzc002000y0ehh8/s4100gaakjh.html",
    "origin": "https://v.qq.com",
    "protocol": "https:",
    "host": "v.qq.com",
    "hostname": "v.qq.com",
    "port": "",
    "pathname": "/x/cover/mzc002000y0ehh8/s4100gaakjh.html",
    "search": "",
    "hash": ""
};
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    platform: "Win32",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
};
window = global;
window.addEventListener = function () {};
node = {
    addEventListener: function () {},
    createElement: createElement,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    getElementById: getElementById,
    getElementsByTagName: getElementsByTagName,
    createTextNode: createTextNode,
    appendChild: function () {},
    removeChild: function () {},
    replaceChild: function () {},
    insertBefore: function () {},
    cloneNode: function () {},
    hasChildNodes: function () {},
    nodeType: 1,
    nodeValue: null,
    textContent: null,
    parentNode: null,
    attributes: [],
    style: {},
    location: location,
};
function createElement () {return node;}
function querySelector () {return node;}
function querySelectorAll () {return [node, node];}
function getElementById () {return node;}
function getElementsByTagName () {return node;}
function createTextNode () {return node;}
function cloneNode () {return node;}
node.head = Object.assign({}, node);
node.firstChild = Object.assign({}, node);
node.lastChild = Object.assign({}, node);
node.nextSibling = Object.assign({}, node);
node.previousSibling = Object.assign({}, node);
node.childNodes = [Object.assign({}, node), Object.assign({}, node)];
node.ownerDocument = Object.assign({}, node);
document = node;