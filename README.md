# ignite-template-database-queries-main


Nesse desafio, você realizará consultas no banco de dados com o TypeORM de três maneiras:

- Usando o ORM
- Usando Query Builder
- Usando Raw Query

### UsersRepository

- Método **findUserWithGamesById**
- Método **findAllUsersOrderedByFirstName**
- Método **findUserByFullName**

    Esse método deve receber `first_name` e `last_name` e retornar um usuário que possua os mesmos `first_name` e `last_name`. Aqui você deve encontrar o usuário ignorando se o argumento passado está em caixa alta ou não. 

    Por exemplo, suponhamos que existe um usuário onde o `first_name` é `Danilo` e o `last_name` é `Vieira`. O método deve retornar o usuário mesmo que os argumentos passados sejam `daNiLo` para `first_name` e `vIeiRA` para `last_name`. Essa consulta deve ser realizada utilizando **raw query** e você pode buscar pelo uso do **LOWER** no Postgres para resolver esse problema.

### GamesRepository

- Método **findByTitleContaining**
- Método **countAllGames**

    Esse método deve retornar uma contagem do total de games existentes no banco. Deve ser usada **raw query** para essa consulta.

- Método **findUsersByGameId**

    Esse método deve receber o `Id` de um game e retornar uma lista de todos os usuários que possuem o game do `Id` informado. 

    Exemplo de retorno:

    ```jsx
    [
    	{
    		id: '81482ac4-29bd-497f-b71a-8ae3b20eca9b',
    		first_name: 'John',
    		last_name: 'Doe',
    		email: 'mail@example.com',
    		created_at: '2021-03-19 19:35:09.877037',
    		updated_at: '2021-03-19 19:35:09.877037'
    	},
    	{
    		id: '75920ac4-32ed-497f-b71a-8ae3c19eca9b',
    		first_name: 'Usuário',
    		last_name: 'Qualquer',
    		email: 'usuarioqualquer@example.com',
    		created_at: '2021-03-19 19:35:09.877037',
    		updated_at: '2021-03-19 19:35:09.877037'
    	}
    ]
    ```
