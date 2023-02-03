var textbox=document.querySelector('#textbox');
var word=document.querySelector('#word');
var character=document.querySelector('#character');

textbox.oninput=function()
{
    var value=textbox.value;
    var l=value.length;
    character.innerHTML=l;

    value=value.trim();
    var array_of_word=value.split(' ');
    
    var w=array_of_word.filter(function(value)
    {
        return value!="";
    });

    word.innerHTML=w.length;
};