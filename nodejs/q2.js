let Handlebars = require("handlebars");
let xml2js=require("xml2js");
let fs=require("fs");
let request=require("request");


let inp=[
  {
    "baseId": "1",
    "feature": {
         "value": "parent",
         "value": "first entry"
    },
    "contentType": {
        "value": "pure",
        "value": "mix"
    },
    "isActive": true,
    "childProducts": [
      {
        "baseId": "1-1",
        "isActive": true
      },
      {
        "baseId": "1-2",
        "isActive": false
      },
      {
        "baseId": "1-3",
        "isActive": true
      },
      {
        "baseId": "1-4",
        "isActive": true,
        "feature": {
          
           "value": "parent",
           "value": "first entry"
        },
        "searchTerms": {
          "value": "glue",
          "value": "adhesive",
          "value": "stick"
        }
      }
    ]
  },
  {
    "baseId": "10",
    "isActive": true,
    "searchTerms": {
      "value": "glue",
      "value": "adhesive",
      "value": "stick"
    },
    "childProducts": [
      {
        "baseId": "10-1",
        "isActive": true,
        "searchTerms": {
          "value": "glue"
        }
      },
      {
        "baseId": "10-2",
        "isActive": false
      },
      {
        "baseId": "10-3",
        "isActive": true
      },
      {
        "baseId": "10-4",
        "isActive": true
      }
    ]
  }
]

let s="<products><product><baseId>{{baseId}}</baseId><isActive>{{isActive}}</isActive>"+
"<contentType>{{#contentType}}<contentTypeValue>{{value}}</contentTypeValue></contentType>"+
"<features>{{#feature}}<feature>{{value}}</feature></features>"+
"<searchTerms>{{#searchTerms}}<searchTermValue>{{value}}</searchTermValue></searchTerms>"+
"<childProducts><childProduct>{{#childProducts}}<baseId>{{baseId}}</baseId>"+
"<isActive>{{isActive}}</isActive><features>{{#features}}<feature>{{value}}</feature></features>"+
"<searchTerms>{{#searchTerms}}<searchTermValue>{{value}}</searchTermValue></searchTerms></childProduct>"+
"<childProduct>{{#childProduct}}<baseId>{{baseId}}</baseId><isActive>{{isActive}}</isActive>"+
"<searchTerms>{{#searchTerms}}<searchTermValue>{{value}}</searchTermValue></searchTerms></childProducts></product></products>";

let temp=Handlebars.compile(s);
let r=temp(inp);