class App{
    static add = (req,res)=> {
        res.render("add", {
            name: "marwa",
            pageTitle:"Add Page"
        })
    }
    static edit = (req,res)=> {
        res.render("edit", {
            pageTitle:"Edit Page"
            
        })
    }
    static showAll = (req,res)=> {
        res.render("showAll", {
            pageTitle:"Show All Page"
            
        })
    }
    static showSingle = (req,res)=> {
        res.render("showSingle", {
            pageTitle:"Show Single Page"
            
        })
    }
}
module.exports = App