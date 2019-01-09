let temp;

function SortArray(a)

{

   for(let i=0;i<a.length;i++)

   {

    for(let j=i;j<a.length;j++)

    {

      if(a[i] >a[j])

      {

        temp=a[i];


        a[i]=a[j];


        a[j]=temp;

      }

    }

  }

  console.log(a);

}

function GetSortArray()

{

  let b = [4,5,6,2,7,3,9,1,0];

  SortArray(b);

}


GetSortArray();


function SortObjectArray()

{

let o = [
  {
    num : 5
  },
  {
    num : 3
  },
  {
    num : 7
  }
  ]

let p=[];

  for(let i=0;i<o.length;i++)

  {

   p[i]=o[i].num;

  }

  SortArray(p);

  let tem;

  for(let i=0;i<o.length;i++)

  {

    for(let j=0;j<o.length;j++)

    {

      if(p[i]===o[j].num)

      {

        tem=o[i];

        o[i]=o[j];

        o[j]=tem;

      }

    }

  }

  console.log(o)

}

SortObjectArray();