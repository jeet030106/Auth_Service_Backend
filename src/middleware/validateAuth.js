const validateAuth= (req, res, next) => {{
    if(!req.body.mail || !req.body.password) {
        return res.status(400).json({
            data: null,
            message: 'Email and password are required',
            error: {},
            success: false
        });
    }
    next();
}};


module.exports = validateAuth;