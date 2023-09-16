export const loginService = async(email,password) => {
  try {
    // Verifique se os itens já existem no localStorage
    const authToken = localStorage.getItem('authToken');
    const userEmail = localStorage.getItem('userEmail');

    if (authToken && userEmail) {
      // Se os itens já existirem, não faça nada e retorne os dados de autenticação existentes
      const fakeData = {
        data: {
          token: authToken,
          user: {
            email: email,
            password: '', // Não armazene a senha no localStorage por razões de segurança
          },
        },
      };
      return fakeData;
    }

    // Se os itens não existirem, simule a autenticação e salve os dados no localStorage
    const fakeData = {
      data: {
        token: 'DHFDHUDFH-DFDFJDH',
        user: {
          email: email,
          password: password,
        },
      },
    };

    await new Promise((resolve) => setTimeout(resolve, 1000));

    localStorage.setItem('authToken', fakeData.data.token);
    localStorage.setItem('userEmail', email);

    return fakeData; // Retorne os dados de autenticação
    
  } catch(e) {
    console.error('Erro ao fazer login: ', e);
  }
}