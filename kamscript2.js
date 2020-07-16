(function(window){
     var byegreeter=new object()
     var greetword="Good Bye"
     byegreeter.greet=function greet(name){
            console.log(greetword+" "+name);
    };
    window.byegreeter=byegreeter;
})(window);

       