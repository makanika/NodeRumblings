const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<htmml>')
        res.write('<head><title>NODE Enter Information</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
        res.write('</htmml>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunck) => {
            body.push(chunck)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', message)
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<htmml>')
    res.write('<head><title>NODE JS PAGE</title></head>')
    res.write('<body><h1>Thank you for the music</h1></body>')
    res.write('</htmml>')
    res.end()
}

module.exports = requestHandler