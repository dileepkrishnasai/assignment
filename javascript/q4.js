let b=[2,5,7,9,6,8,1,3,4];

class SortArray

{

 constructor(a,sort)
 {

   this.a=a;

   this.sort = function(a)
   {

     for(let i=0;i<a.length;i++)

     {

       for(let j=0;j<a.length;j++)

       {

         if(a[i]<a[j])

         {

           a[i]=a[i]+a[j];

           a[j]=a[i]-a[j];

           a[i]=a[i]-a[j];

         }

       }

     }

     return a;

   }

 }

 
SortArray(OriginalArray)
 {

   let a=this.sort(OriginalArray);

   Object.defineProperty(SortArray,'a',

   {

      get : function()

     {

      return a;

     }

    });

    return a;

  }

}


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



class SortObjectArray extends SortArray


{

  constructor(a,sort)

  {

    super(a,sort);

  }

  SortObjectArray(o)

  {

   let p=[];

   for(let i=0;i<o.length;i++)

   {


   p[i]=o[i].num;


   }

   p=this.sort(p);

   
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

    return o;

 }

}

let n=new SortObjectArray();


let l=n.SortObjectArray(o);


let m=new SortArray();


let s=m.SortArray(b);


console.log(s);


console.log(l);