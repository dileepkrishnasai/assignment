let group =[


  {

    "channel": "A",

    "name": "shoe"

  },


  {

    "channel": "A",

    "name": "electronics"

  },


  {

    "channel": "B",

    "name": "apparel"

  },


  {

    "channel": "C",

    "name": "electronics"

  }
]


let A = [];
let B = [];
let C = [];


let j=0;k=0;l=0;


function GroupObjectsBy()
 {


  for(let i=0;i<group.length;i++)


  {


    if(group[i].channel === "A")


    {


      A[j] = group[i];


      j++;


    }


    else if(group[i].channel === "B")


    {


      B[k]=group[i];


      k++;


    }


    else{


      C[l]=group[i];


      l++;


    }


  }

  
  let x=[A,B,C]
 
    let y=["A","B","C"]

let will_return = {
  
};

for(i=0;i<y.length;i++)

{

  will_return[y[i]]=x[i];

}

console.log(will_return);

}


GroupObjectsBy();