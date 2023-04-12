export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Joao${codigo}`,
        email: `joaojoaojoaojoaojoao123421${codigo}@gmail.com`
    })
}