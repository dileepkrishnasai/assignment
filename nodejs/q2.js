let handlebars = require("handlebars");


let inp=[
  {
    "baseId": "1",
    "feature": {
      "1": "parent",
      "2": "first entry"
    },
    "contentType": {
      "1": {
        "value": "pure"
      },
      "2": {
        "value": "mix"
      }
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
          "1": "parent",
          "2": "first entry"
        },
        "searchTerms": {
          "0": "glue",
          "1": "adhesive",
          "2": "stick"
        }
      }
    ]
  },
  {
    "baseId": "10",
    "isActive": true,
    "searchTerms": {
      "0": "glue",
      "1": "adhesive",
      "2": "stick"
    },
    "childProducts": [
      {
        "baseId": "10-1",
        "isActive": true,
        "searchTerms": {
          "0": "glue"
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


let s="<products>"+
   "<product>"+
       "<baseId>{{baseId}}</baseId>"+
       "<isActive>{{isActive}}</isActive>"+
       "<contentType>{{#contentType}}"+
           "<contentTypeValue>{{value}}</contentTypeValue>"+
       "</contentType>"+
       "<features>{{#feature}}"+
           "<feature>{{#each feature}}</feature>"+
       "</features>"+
       "<searchTerms>{{#searchTerms}}"+
           "<searchTermValue>{{#each searchTerms}}</searchTermValue>"+
       "</searchTerms>"+
       "<childProducts>"+
           "<childProduct>{{#childProducts}}"+
               "<baseId>{{baseId}}</baseId>"+
               "<isActive>{{isActive}}</isActive>"+
               "<features>{{#feature}}"+
                   "<feature>{{#each feature}}</feature>"+
               "</features>"+
               "<searchTerms>{{#searchTerms}}"+
                   "<searchTermValue>{{#each searchTerms}}</searchTermValue>"+
               "</searchTerms>"+
           "</childProduct>"+
           "<childProduct>{{#childProducts}}"+
               "<baseId>{{baseId}}</baseId>"+
               "<isActive>{{isActive}}</isActive>"+
               "<features>{{#feature}}"+
                   "<feature>{{#each feature}}</feature>"+
               "</features>"+
               "<searchTerms>{{#searchTerms}}"+
                   "<searchTermValue>{{#each searchTerms}}</searchTermValue>"+
               "</searchTerms>"+
           "</childProduct>"+
           "<childProduct>{{#childProducts}}"+
               "<baseId>{{baseId}}</baseId>"+
               "<isActive>{{isActive}}</isActive>"+
               "<features>{{#feature}}"+
                   "<feature>{{#each feature}}</feature>"+
               "</features>"+
               "<searchTerms>{{#searchTerms}}"+
                   "<searchTermValue>{{#each searchTerms}}</searchTermValue>"+
               "</searchTerms>"+
           "</childProduct>"+
       "</childProducts>"+
   "</product>"+
"</products>";

let temp=handlebars.compile(s);
let r=temp(inp);