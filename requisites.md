**Requisitos funcionais**

**Requisitos não funcionais**

**Regras de Negocio**



# Cadastro de carro
**RF**
-Deve ser possível cadastrar um novo carro.

**RN**
-Não deve ser possível cadastrar um carro com uma placa já cadastrada.
-O Carro deve ser cadastrado como padrão como disponivel para aluguel.
-Somente um usuário admistrador deve ser capaz de cadastrar um novo carro.



# Listagem de carros
**RF**
-Deve ser possível listar todos os carros disponíveis.
-Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
-Deve ser possível listar todos os carros disponíveis pelo nome da marca.
-Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
-O usuário nao necessita de estar logado no sistema para listar os carros.



# Cadastro de Especificações do carro
**RF**
-Deve ser possível cadastrar uma especificação para um carro.


**RN**
-Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
-Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
-Somente um usuário admistrador deve ser capaz de cadastrar uma specificação para o carro.


# Cadastro de imagens do carro
**RF**
-Deve ser possível cadastrar a imagem do carro.
-Deve ser possível listar todos os carros.

**RNF**
-Utilizar o multer para upload dos arquivos.

**RN**
-O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
-Somente um usuário admistrador deve ser capaz de cadastrar uma foto.



# Cadastro de aluguel de carro
**RF**
-Deve ser possível cadastrar um aluguel.

**RN**
-O aluguel deve ter duração mínima de 24 hora.
-Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
-Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.