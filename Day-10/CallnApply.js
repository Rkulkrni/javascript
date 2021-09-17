
var country= {
    cname : 'India',
    states :30,
    capital : 'Delhi',
    getdetails : function (){

        var details = this.cname +' '+this.capital
        console.log (details);
    }
}
// country.getdetails();

var currency= function(){
    return this.getdetails() + ' '+ 'currency is'+ this.currency 
}
currency ('rupee');
currency.call(country, 'rupee');
