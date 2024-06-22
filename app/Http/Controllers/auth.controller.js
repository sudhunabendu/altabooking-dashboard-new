class AuthController {
    async registration(req, res){
        res.status(200).send({
            res_code: 201,
            response: "Parameter is missing!"
        });
    }
}

module.exports = new AuthController();