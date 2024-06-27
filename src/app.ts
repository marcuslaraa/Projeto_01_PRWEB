import express from 'express'
import { atualizarModalidade, cadastrarModalidade, consultarModalidade, deletarModalidade, listaModalidades } from './controller/ModalidadePaesController'
import { insereEstoque } from './controller/EstoquePaesController'
import { ModalidadePaesRepository } from './repository/ModalidadePaesRepository'

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

function logInfo() {
  console.log(`API em execução no URL: http://localhost:${PORT}`)
}


/*MODALIDADE PAES*/
app.get('/api/modalidade/todas', listaModalidades)
app.get('/api/modalidade/:id', consultarModalidade)
app.post('/api/modalidade', cadastrarModalidade)
app.put('/api/modalidade', atualizarModalidade)
app.delete('/api/modalidade/:id', deletarModalidade)

/*ESTOQUE PAES*/

app.post('/api/estoque', insereEstoque)


app.listen(PORT, logInfo)