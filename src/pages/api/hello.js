export default function handler(req, res) {
  res.status(200).json({
    name: 'Testando API',
    metodo: req.method,
    nome: req.query.nome,
    idade: +req.query.idade
  })
}