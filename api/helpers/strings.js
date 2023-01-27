module.exports = Object.freeze({
  // Mensagem e dados direcionados a testes
  mensagemTesteCreateUsuarios1: `Passo 1. Adiciona um novo usuário usando o bodyUsuario`,
  mensagemTesteCreateUsuarios2: `Passo 2. Tenta adicionar um novo usuário usando o bodyUsuario e não deve conseguir, pois o e-mail já está cadastrado`,
  mensagemTesteCreateUsuarios3: `Passo 3. Tenta adicionar um novo usuário usando o bodyUsuario após alterar o email (evitar erro de email repetido ) e não deve conseguir, pois agora será bloqueado pelo CPF que já está cadastrado.`,
  mensagemTesteGetUsuarios1: `Passo 4. Busca todos os usuários no banco de dados`,
  mensagemTesteGetUsuarios2: `Passo 5. Busca o usuário criado no passo 1 por getById`,
  mensagemTestePutUsuarios1: `Passo 6. Atualiza os dados do usuário criado no passo 1`,
  mensagemTesteDeleteUsuarios1: `Passo 7. Inativa o usuário criado no passo 1`,
  mensagemTesteDeleteUsuarios2: `Passo 8. Ativa novamente o usuário criado no passo 1`,

  // Strings fixas direcionadas à testes
  nomeTeste: 'Teste',
  nomeTesteEditado: 'Teste Editado',
  cpfTeste: '999.999.999-99',
  telefoneTeste: '(99)9-9999-9999',
  emailTeste: 'teste@example.com',
  senhaTeste: '123456',

  // Nomes tabelas

  VIEW_USUARIOS: 'view_usuarios',
  VIEW_PRODUTOS: 'view_produtos',
  VIEW_CARRINHOS: 'view_carrinhos',

  // Mensagens para responses

  criadoComSucesso: 'criado com sucesso!',
  editadoComSucesso: 'editado com sucesso!',
  naoEncontrado: 'não encontrado!',
});