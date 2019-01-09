let MetadataParser = function(channel,version,keyfield)

{


Object.defineProperty(MetadataParser,'channel',

{

  get : function()

  {

    return this.channel;

  },

  set : function(value)

  {

    this.chaneel = value;

  }
});

Object.defineProperty(MetadataParser ,'version',

{

  get : function()

  {

    return this.version;

  },

  set : function(value)

  {

    this.version = value;

  }
});

Object.defineProperty(MetadataParser,'keyfield',

{

  get : function()

  {

    return this.keyfield;

  },

  set : function(value)

  {

    this.keyfield = value;

  }
});

}


MetadataParser();

let jso=[{channel:'A'},{channel:'B'},{channel:'c'},{channel:'D'}];


class getKeyFields

{

  constructor(){
    
  }

  getKeyFields(json)

  {

    let b = [];

    for(let i=0;i<json.length;i++)

    {


     b[i]=json[i].channel;


    }

    return b;

  }

}


let g=new getKeyFields();

let e=g.getKeyFields(jso);

console.log(e);






