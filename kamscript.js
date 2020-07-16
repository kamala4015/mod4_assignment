(function() {
    var names = ["Yaakov", "John", "James", "Jason", "Paul", "Frank", "Larel", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byegreeter.greet(names[i]);
        } else {
            hellogreeter.greet(names[i]);
        }
    }
})();