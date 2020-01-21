var Messages = [
    {Name: "Devesh", Message: "I am from API"},
    {Name: "Sumit", Message: "I am from Bank"},
]

exports.getMessage = (req, res) => {
    res.send(Messages)
}