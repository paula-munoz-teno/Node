//copiar y pegar lo que aprece 

function errorHandling(err, req, res, next)
{
    res.status(500).json({message: err.message})
}

module.exports = errorHandling;

