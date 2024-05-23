function skillsMember() {
    var member = {
        name: 'Jhon Doe',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        // Method
        details: function() {
            console.log(this.name + ' is ' + this.age + ' years old and knows ' + this.skills);
        }
    }
    return member;
}