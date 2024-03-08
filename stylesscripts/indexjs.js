// This will be the object that will contain the Vue attributes
// and be used to initialize it.
let app = {};


// Given an empty app object, initializes it filling its attributes,
// creates a Vue instance, and then initializes the Vue instance.
let init = (app) => {

    // This is the Vue data.
    app.data = {
        show_about: true,
        show_projects: false,
        show_resume: false,
        show_contact: false,
        show_ucsc_classes: false,
        show_mpc_classes: false,
        img_slides_arr: [
            {  
                "src": "IMG_1232.JPG",
                "des": "California poppy in Carmel-by-the-Sea, California.",
                "inf": "1/2000 sec., ISO-1600, F/5"
            },
            {  
                "src": "IMG_1673.JPG",
                "des": "Milky Way Galaxy in Lone Pine, California.",
                "inf": "30 sec., ISO-1600, F/4"
            },
            {
                "src": "IMG_1090.JPG",
                "des": "Harbor seal sunbathing at San Carlos Coast Guard Pier in Monterey, California.",
                "inf": "1/2000 sec., ISO-400, F/5"
            },
            {
                "src": "IMG_1006.JPG",
                "des": "Waterfall in Pfeiffer Beach, California.",
                "inf": "1/8 sec., ISO-100, F/22"
            },
            {
                "src": "IMG_1616.JPG",
                "des": "Zabriskie Point in Death Valley, California.",
                "inf": "1/2000 sec., ISO-100, F/3.5"
            }
        ],
        img_slides_len: null,
        img_slides_ind: null,
        img_slides_src: null,
        img_slides_des: null,
        img_slides_inf: null,
        img_slides_autochange_on: true,
        show_click_me: true
    };

    app.enumerate = (a) => {
        // This adds an _idx field to each element of the array.
        let k = 0;
        a.map((e) => {e._idx = k++;});
        return a;
    };

    app.page_change = function(page){
        window.scrollTo(0, 0);
        window.location.hash = "#" + page;
        app.vue.show_projects = page == "projects";
        app.vue.show_about = page == "about";
        app.vue.show_resume = page == "resume";
        app.vue.show_contact = page == "contact";
    }

    app.img_slides_change = function(direction){
        if(direction == -1){
            if(app.vue.img_slides_ind == 0){
                app.vue.img_slides_ind = app.vue.img_slides_len - 1;
            }
            else{
                app.vue.img_slides_ind -= 1;
            }
        }
        else{
            if(app.vue.img_slides_ind == app.vue.img_slides_len - 1){
                app.vue.img_slides_ind = 0;
            }
            else{
                app.vue.img_slides_ind += 1;
            }
        }
        const new_img_slide = app.vue.img_slides_arr[app.vue.img_slides_ind];
        app.vue.img_slides_src = new_img_slide["src"];
        app.vue.img_slides_des = new_img_slide["des"];
        app.vue.img_slides_inf = new_img_slide["inf"];
    }

    app.img_slides_change_by_index = function(new_index){
        app.vue.img_slides_ind = parseInt(new_index);
        const new_img_slide = app.vue.img_slides_arr[app.vue.img_slides_ind];
        app.vue.img_slides_src = new_img_slide["src"];
        app.vue.img_slides_des = new_img_slide["des"];
        app.vue.img_slides_inf = new_img_slide["inf"];
    }

    app.img_slides_autochange = function(){
        if(!app.vue.img_slides_autochange_on){
            return 0;
        }
        app.img_slides_change(1);
        if(app.vue.img_slides_autochange_on){
            setTimeout(app.img_slides_autochange, 3000);
        }
    }

    // This contains all the methods.
    app.methods = {
        // Complete as you see fit.
        page_change: app.page_change,
        img_slides_change: app.img_slides_change,
        img_slides_change_by_index: app.img_slides_change_by_index,
        img_slides_autochange: app.img_slides_autochange
    };

    // This creates the Vue instance.
    app.vue = new Vue({
        el: "#vue-target",
        data: app.data,
        methods: app.methods
    });

    // And this initializes it.
    app.init = () => {
        // Put here any initialization code.
        // Typically this is a server GET call to load the data.
        if(window.location.hash){
            switch(window.location.hash){
                case "#about": app.page_change("about"); break;
                case "#projects": app.page_change("projects"); break;
                case "#resume": app.page_change("resume"); break;
                case "#contact": app.page_change("contact"); break;
            }
        }
        else{
            window.location.hash = "#about";
        }
        for(let img_ind in app.vue.img_slides_arr){
            app.vue.img_slides_arr[img_ind]["index"] = img_ind;
        }
        app.vue.img_slides_len = app.vue.img_slides_arr.length;
        app.vue.img_slides_ind = Math.round(Math.random() * (app.vue.img_slides_len - 1));
        const init_img_slide = app.vue.img_slides_arr[app.vue.img_slides_ind];
        app.vue.img_slides_arr[app.vue.img_slides_ind]["is_current_img"] = true;
        app.vue.img_slides_src = init_img_slide["src"];
        app.vue.img_slides_des = init_img_slide["des"];
        app.vue.img_slides_inf = init_img_slide["inf"];
        setTimeout(app.img_slides_autochange, 3000);
    };

    // Call to the initializer.
    app.init();
};

// This takes the (empty) app object, and initializes it,
// putting all the code i
init(app);
