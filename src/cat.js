var cat = {
    name: '',
    run: function(name) {
        this.name = name;
        console.log(this.name + ' is running');
    }
};

module.exports = cat;
