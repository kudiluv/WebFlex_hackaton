const apiRoute = require("./api");

const useRouter = (app) => {
    app.use("/api", apiRoute);
}

module.exports = useRouter;