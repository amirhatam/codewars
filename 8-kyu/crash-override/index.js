function aliasGen(firstname, lastname) {
    var fn = firstname.substr(0, 1).toUpperCase();
    var ln = lastname.substr(0, 1).toUpperCase();


    if (!firstName[fn] || !surname[ln]) {
        return 'Your name must start with a letter from A - Z.';
    } else {
        return firstName[fn] + ' ' + surname[ln];
    }
}

console.log(aliasGen("Mike", "Millington"));
