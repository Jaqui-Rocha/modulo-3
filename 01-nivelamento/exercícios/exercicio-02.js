// crie uma função factory que gera um Student
// Parametros: name, class, status, document
// Retorno {
//   code: 'uuid',
//   name: ''Victor,
//   class: '401B',
//   status: 'matriculado' || 'pendente,
//   document: '123.123.123-00',
//   createdAt: '2015-04-12' tipo Date
// }

let studentCount = 0

function makeStudent(name, className, status,document ) {
  const code = crypto.randomUUID()
  const createAt = new Date()
  if(status !== 'matriculado' && status!== 'pendente'){
    console.error( 'O status deve ser "matriculado" ou "pendente" ')
  }
  
  const student= {
    code,
    name,
    class: className,
    status,
    document,
    createAt
  }
  return student
}

// Crie as funçao para manipular a constante repository
// Deve ser possível:
// - Criar;
// - Editar por código;
// - Buscar por código;
// - Buscar por Turma;
// - Deletar.

const repository = []
// adiciona o obj ao banco
function createStudentRepository(data) {
  student1= createStudentRepository(data)//outra forma de criar obj
repository.push(student1)
}
// valida se o estudante ja esta no banco de dados antes de atualizar
function updateStudentRepository(code, data) {
  if (repository.includes(code)){
   repository.push(...data)
  }
  
}
// tratar erro caso n exista estudante com esse cod.
function findStudentByCodeRepository(code) {
  if (!repository.includes(code)){
  console.error('Estudante não encontrado', error)
  }
}
//procurar o estudante pela classe
function findStudentByClassRepository(className) {
  repository.filter((item) => repository.length (item === className))
}
//tratar erro para estudante que  n usa esse código
function deleteStudentByCode(code) {
}

createStudentRepository({
  name: 'Jubileu',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

createStudentRepository({
  name: 'Ciclano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

updateStudentRepository(2, {
  name: 'Fulano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})