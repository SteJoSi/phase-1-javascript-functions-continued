function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(job = "go to the office") {
    return  `This Monday, I will ${job}.`
}

function wrapAdjective(flare = "*") {
    return function(msg = "special") {
        return `You are ${flare}${msg}${flare}!`
    }
}

