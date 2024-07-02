import express from 'express'
import { atualizarModalidade, cadastrarModalidade, consultarModalidade, deletarModalidade, listaModalidades } from './controller/ModalidadePaesController'
import { insereEstoque, listaEstoques, consultarEstoque, atualizarEstoque, deletarQuantidadeEstoque  } from './controller/EstoquePaesController'
import { insereVenda, listaVendas } from './controller/VendaPaesController'


const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

function logInfo() {
  console.log(`API em execução no URL: http://localhost:${PORT}`)
}


/*MODALIDADES PAES*/
app.get('/api/modalidade/todos', listaModalidades)
app.get('/api/modalidade/:id', consultarModalidade)
app.post('/api/modalidade', cadastrarModalidade)
app.put('/api/modalidade', atualizarModalidade)
app.delete('/api/modalidade/:id', deletarModalidade)

/*ESTOQUES PAES*/
app.post('/api/estoque', insereEstoque)
app.get('/api/estoque/todos', listaEstoques)
app.get('/api/estoque/:id', consultarEstoque)
app.put('/api/estoque', atualizarEstoque)
app.delete('/api/estoque', deletarQuantidadeEstoque)

/*VENDAS PAES*/
app.post('/api/venda', insereVenda)
app.get('/api/venda', listaVendas)


app.listen(PORT, logInfo)