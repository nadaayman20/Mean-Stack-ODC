const user = require("./modules/user.module")
const yargs = require('yargs')
yargs.command({
    command:"add",
    handler: function(argv){
        user.add(argv)
    }
})
yargs.command({
    command:"showAll",
    handler: function(argv){
        user.showAll()
    }
})
yargs.command({
    command:"showSingle",
    bulider:{
        id:{demandOption:true}
    },
    handler: function(argv){
        user.showSingle(argv.id)
        
    }
})
yargs.command({
    command:"edit",
    bulider:{
        id:{demandOption:true},
        status:{demandOption:true}
    },
    handler: function(argv){
        user.edit(argv.id , argv.status)
    }
})
yargs.command({
    command:"del",
    bulider:{
        id:{demandOption:true},
    },
    handler: function(argv){
        user.del(argv.id)
    }
})
yargs.argv