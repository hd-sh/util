var customLog = console.log.bind(console);
export default {
    heart: function (params) {
        console.log(params);
    },
    customLog: customLog,
};
