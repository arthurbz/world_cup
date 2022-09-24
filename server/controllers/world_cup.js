module.exports = app => {
    app.get('/hello', async (req, res) => {
        try {
            res.status(200).json({ hello: "Hello world :D"})
        } catch (error) {
            res.status(500).json({ message: "Something failed :o" })
        }
    })
}