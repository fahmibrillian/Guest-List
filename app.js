var vm1 = new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: [],
        signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
        eventCapacity: 25,
        eventCapacityPercentage: 0
    },
    methods: {
        formSubmitted: function () {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100){
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
            }
        },
    },
    computed : {
        sortNames : function () {
            return this.guestName.sort()
        }
    }
});

var vm2 = new Vue({
    el : '#navigation',
    data : {
        appName : 'Guest List',
        navLinks : [
            {name : 'Home' , id : 1 , url : 'http://www.google.com'},
            {name : 'Upcoming Events' , id : 2 , url : 'http://www.google.com'},
            {name : 'Guest Benefits' , id : 3, url : 'http://www.google.com'},
            {name : 'Latest News' , id : 4, url : 'http://www.google.com'},
        ]
    },
    methods: {
        changeTitle : function () {
        }
    }
})
